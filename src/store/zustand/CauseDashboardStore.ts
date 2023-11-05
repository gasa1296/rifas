import { create } from "zustand";
import { getDashboardCause, setEditCauses } from "@/services/dashboard";

import {
  createCause,
  createCauseGallery,
  deleteImageGalleryRaffle,
  updateGalleryCause,
} from "@/services/raffles";

interface CreateCausesStoreDasboard {
  isLoading: boolean;
  cause: any[];
  error: boolean;
  getCause: (id: string, pagination: number) => Promise<void>;
  createCause: (cause: any) => Promise<void>;
  updateCause: (causeId: number, cause: any, oldData: any) => Promise<void>;
  pagination: number | null;
}

export const useCauseDashboardStore = create<CreateCausesStoreDasboard>(
  (set) => ({
    isLoading: false,
    cause: [],
    error: false,
    pagination: 1,

    getCause: async (id: string, pagination: number) => {
      set({ isLoading: true });

      const { data } = await getDashboardCause(id, pagination);
      const nextPagination = data.next ? pagination + 1 : null;

      set((state) => ({
        cause:
          pagination === 1 ? data.results : [...state.cause, ...data.results],
        isLoading: false,
        pagination: nextPagination,
      }));
    },

    createCause: async (cause: any) => {
      set({ isLoading: true });
      const { data } = await createCause(cause);
      set({
        cause: data,
        isLoading: false,
      });
    },

    updateCause: async (causeId: number, cause: any, oldData: any) => {
      set({ isLoading: true });

      cause.categories = [Number(cause.categories)];
      cause.association = Number(cause.association);
      await setEditCauses(causeId, cause);

      /////

      let resultGallery = [];

      if (cause.image && cause.image.length > 0) {
        const petitions: any[] = [];

        cause.image.map((gallery: any) =>
          petitions.push(createCauseGallery(gallery, causeId.toString()))
        );

        resultGallery = await Promise.all(petitions);

        await updateGalleryCause(causeId.toString(), {
          gallery: resultGallery.map((gallery) => gallery.data.id),
          goal: cause.goal,
          association: cause.association,
          name: cause.name,
          categories: cause.categories,
        });
      }

      const petitionsOld: any[] = [];

      oldData.images.map((image: any) =>
        petitionsOld.push(deleteImageGalleryRaffle(image.id))
      );
      await Promise.all(petitionsOld);

      set({
        //cause: data,
        isLoading: false,
      });
    },
  })
);
