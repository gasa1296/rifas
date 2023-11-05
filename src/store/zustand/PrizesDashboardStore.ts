import {
  editPrize,
  getDashboardPrize,
  getDashboardPrizeUser,
} from "@/services/dashboard";
import {
  createPrizeGallery,
  deleteImageGallery,
  updateGalleryPrize,
} from "@/services/raffles";
import { create } from "zustand";

interface PrizeStoreDasboard {
  isLoading: boolean;
  prize: any[];
  prizeUser: any[];
  error: boolean;
  getPrizeUser: (pagination: number) => Promise<void>;
  getPrize: (id: string, pagination: number) => Promise<void>;
  updatePrize: (prizeId: number, prize: any, oldData: any) => Promise<void>;
  pagination: number | null;
  paginationUser: number | null;
}

export const usePrizeStoreDashboard = create<PrizeStoreDasboard>((set) => ({
  isLoading: false,
  prize: [],
  error: false,
  pagination: 1,
  prizeUser: [],
  paginationUser: 1,

  getPrize: async (id: string, pagination: number) => {
    set({ isLoading: true });

    const { data } = await getDashboardPrize(id, pagination);
    const nextPagination = data.next ? pagination + 1 : null;

    set((state) => ({
      prize:
        pagination === 1 ? data.results : [...state.prize, ...data.results],
      isLoading: false,
      pagination: nextPagination,
    }));
  },

  getPrizeUser: async (pagination: number) => {
    set({ isLoading: true });

    const { data } = await getDashboardPrizeUser(pagination);
    const nextPagination = data.next ? pagination + 1 : null;

    set((state) => ({
      prizeUser:
        pagination === 1 ? data.results : [...state.prizeUser, ...data.results],
      isLoading: false,
      paginationUser: nextPagination,
    }));
  },
  updatePrize: async (prizeId: number, prize: any, oldData: any) => {
    set({ isLoading: true });

    prize.status = prize.status === "usado" ? 1 : 0;

    prize.association = Number(prize.association);

    if (prize.association === 0 || prize.association === undefined)
      delete prize.association;

    prize.category = Number(prize.category);

    await editPrize(prizeId, prize);

    let resultGallery = [];

    if (prize.image && prize.image.length > 0) {
      const petitions: any[] = [];

      prize.image.map((gallery: any) =>
        petitions.push(createPrizeGallery(gallery, prizeId.toString()))
      );

      resultGallery = await Promise.all(petitions);

      await updateGalleryPrize(prizeId.toString(), {
        gallery: resultGallery.map((gallery) => gallery.data.id),
        name: prize.name,
        value: prize.value,
      });
    }

    const petitionsOld: any[] = [];

    oldData.images.map((image: any) =>
      petitionsOld.push(deleteImageGallery(image.id))
    );
    await Promise.all(petitionsOld);

    set({
      //prize: data,
      isLoading: false,
    });
  },
}));
