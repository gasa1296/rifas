import { create } from "zustand";
import {
  getDashboardCause,
  getDashboardRaffle,
  getDashboardResumen,
  getDashboardWallet,
  setEditCauses,
  setDashboardAddUser,
  getDashboardUser,
  getDashboardResumenProfile,
  setDashboardDeleteUser,
  setDashboardCreateUser,
  setDashboardUpdateUser,
  getMicrosite,
  updateMicrosite,
  createImagesGallery,
  deleteImagesGallery,
  getSite,
} from "@/services/dashboard";
import { getDashboardPrize } from "@/services/dashboard";
import {
  createCause,
  getAssociationsApproveds,
  getRafflesPurchase,
} from "@/services/raffles";

import { handleError } from "@/utils/handleError";
import toast from "react-hot-toast";

interface RaffleStoreDasboard {
  isLoading: boolean;
  raffle: any[];
  error: boolean;
  getRaffle: (id: string) => Promise<void>;
  getRafflesPurchase: (id: number) => Promise<void>;
  paginacion: number | null;
  rafflePurchase: any[];
}

export const useRaffleStoreDashboard = create<RaffleStoreDasboard>((set) => ({
  isLoading: false,
  raffle: [],
  error: false,
  rafflePurchase: [],
  paginacion: 1,

  getRaffle: async (id: string) => {
    set({ isLoading: true });

    const { data } = await getDashboardRaffle(id);

    set({
      raffle: data.results,
      isLoading: false,
    });
  },

  getRafflesPurchase: async (pagination: number) => {
    try {
      set({ isLoading: true });

      const { data } = await getRafflesPurchase(pagination || 1);

      const nextPagination = data.next ? pagination + 1 : null;

      set((state) => ({
        rafflePurchase:
          pagination === 1
            ? data.results
            : [...state.rafflePurchase, ...data.results],
        isLoading: false,
        paginacion: nextPagination,
      }));
    } catch (error) {}
  },
}));

interface AsociationsStoreDasboard {
  isLoading: boolean;
  asociations: any[];
  error: boolean;
  getAsociations: () => Promise<void>;
  getWallet: (id: string, pagination: number) => Promise<void>;
  getResumen: (id: string) => Promise<void>;
  getMicrosite: (id: string) => Promise<void>;
  getSite: (id: string) => Promise<void>;
  updateMicrosite: (id: string, payload: any) => Promise<void>;
  getResumenProfile: () => Promise<void>;
  getUser: (id: string, pagination: number) => Promise<void>;
  setAddUser: (id: string, payload: any) => Promise<boolean>;
  setCreateUser: (id: string, payload: any) => Promise<boolean>;
  setEditUser: (id: string, payload: any) => Promise<boolean>;
  setRemoveUser: (id: string, email: string) => Promise<boolean>;
  pagination: number | null;
  wallets: any[];
  microsite: any;
  site: any;
  resumen: any;
  resumenProfile: any;
  user: any;
}

export const useAsociatonsStoreDashboard = create<AsociationsStoreDasboard>(
  (set) => ({
    isLoading: false,
    asociations: [],
    resumen: [],
    error: false,
    wallets: [],
    pagination: 1,
    user: [],
    resumenProfile: [],
    microsite: null,
    site: null,

    getAsociations: async () => {
      set({ isLoading: true });

      const { data } = await getAssociationsApproveds();
      set({
        asociations: data.results,
        isLoading: false,
      });
    },
    getWallet: async (id: string, pagination: number) => {
      set({ isLoading: true });

      const { data } = await getDashboardWallet(id, pagination);
      const nextPagination = data.next ? pagination + 1 : null;

      set((state) => ({
        wallets:
          pagination === 1 ? data.results : [...state.wallets, ...data.results],
        isLoading: false,
        pagination: nextPagination,
      }));
    },

    getUser: async (id: string, pagination: number) => {
      try {
        set({ isLoading: true });

        const { data } = await getDashboardUser(id, pagination);
        const nextPagination = data.next ? pagination + 1 : null;

        set((state) => ({
          user:
            pagination === 1 ? data.results : [...state.user, ...data.results],
          isLoading: false,
          pagination: nextPagination,
        }));
      } catch (error) {}
    },

    setAddUser: async (id: string, payload: any) => {
      try {
        set({ isLoading: true });
        await setDashboardAddUser(id, payload);
        set((state) => ({
          isLoading: false,
        }));
        return true;
      } catch (error) {
        handleError(error);

        set((state) => ({
          isLoading: false,
        }));
        return false;
      }
    },

    setCreateUser: async (id: string, payload: any) => {
      try {
        set({ isLoading: true });
        await setDashboardCreateUser(id, payload);
        set((state) => ({
          isLoading: false,
        }));
        return true;
      } catch (error) {
        handleError(error);

        set((state) => ({
          isLoading: false,
        }));
        return false;
      }
    },

    setEditUser: async (id: string, payload: any) => {
      try {
        set({ isLoading: true });
        await setDashboardUpdateUser(id, payload);
        set((state) => ({
          isLoading: false,
        }));
        return true;
      } catch (error) {
        handleError(error);

        set((state) => ({
          isLoading: false,
        }));
        return false;
      }
    },

    setRemoveUser: async (id: string, userId: string) => {
      try {
        set({ isLoading: true });
        await setDashboardDeleteUser(id, userId);
        set((state) => ({
          isLoading: false,
        }));
        return true;
      } catch (error) {
        handleError(error);

        set((state) => ({
          isLoading: false,
        }));
        return false;
      }
    },

    getResumen: async (id: string) => {
      set({ isLoading: true });

      const { data } = await getDashboardResumen(id);

      set({
        resumen: data,
        isLoading: false,
      });
    },

    getResumenProfile: async () => {
      try {
        set({ isLoading: true });

        const { data } = await getDashboardResumenProfile();

        set({
          resumenProfile: data,
          isLoading: false,
        });
      } catch (error) {}
    },

    getSite: async (slug: string) => {
      try {
        set({ isLoading: true });

        const { data } = await getSite(slug);

        set({
          site: data,
          isLoading: false,
        });
      } catch (error) {}
    },

    getMicrosite: async (asociationId: string) => {
      try {
        set({ isLoading: true });

        const { data } = await getMicrosite(asociationId);

        set({
          microsite: data,
          isLoading: false,
        });
      } catch (error) {}
    },
    updateMicrosite: async (asociationId: string, payload: any) => {
      try {
        set({ isLoading: true });

        if (payload.images.length > 0) {
          const petitions: any[] = [];

          payload.images.map((gallery: any) =>
            petitions.push(createImagesGallery(gallery, payload.id.toString()))
          );

          const resultGallery = await Promise.all(petitions);

          payload.images = resultGallery.map((gallery) => gallery.data.id);
        }

        const petitionsOld: any[] = [];

        payload.oldImages.map((image: any) =>
          petitionsOld.push(deleteImagesGallery(image.id))
        );
        await Promise.all(petitionsOld);

        const { data } = await updateMicrosite(asociationId, payload);

        toast.success("Se actualizo el micrositio con exito!!");

        set({
          microsite: data,
          isLoading: false,
        });
      } catch (error) {}
    },
  })
);
