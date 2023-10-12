import { create } from "zustand";
import {
  getDashboardCause,
  getDashboardRaffle,
  setEditCauses,
} from "@/services/dashboard";
import { getDashboardPrize } from "@/services/dashboard";
import { createCause, getAssociationsApproveds } from "@/services/raffles";

interface PrizeStoreDasboard {
  isLoading: boolean;
  prize: any[];
  error: boolean;
  getPrize: (id: string) => Promise<void>;
}

export const usePrizeStoreDashboard = create<PrizeStoreDasboard>((set) => ({
  isLoading: false,
  prize: [],
  error: false,

  getPrize: async (id: string) => {
    set({ isLoading: true });

    const { data } = await getDashboardPrize(id);

    set({
      prize: data.results,
      isLoading: false,
    });
  },
}));

interface RaffleStoreDasboard {
  isLoading: boolean;
  raffle: any[];
  error: boolean;
  getRaffle: (id: string) => Promise<void>;
}

export const useRaffleStoreDashboard = create<RaffleStoreDasboard>((set) => ({
  isLoading: false,
  raffle: [],
  error: false,

  getRaffle: async (id: string) => {
    set({ isLoading: true });

    const { data } = await getDashboardRaffle(id);

    set({
      raffle: data.results,
      isLoading: false,
    });
  },
}));

interface AsociationsStoreDasboard {
  isLoading: boolean;
  asociations: any[];
  error: boolean;
  getAsociations: () => Promise<void>;
}

export const useAsociatonsStoreDashboard = create<AsociationsStoreDasboard>(
  (set) => ({
    isLoading: false,
    asociations: [],
    error: false,

    getAsociations: async () => {
      set({ isLoading: true });

      const { data } = await getAssociationsApproveds();
      set({
        asociations: data.results,
        isLoading: false,
      });
    },
  })
);

interface CreateCausesStoreDasboard {
  isLoading: boolean;
  cause: any[];
  error: boolean;
  getCause: (id: string, pagination: number) => Promise<void>;
  createCause: (cause: any) => Promise<void>;
  updateCause: (causeId: number, cause: any) => Promise<void>;
  pagination: number | null;
}

export const useCreateCausesStoreDashboard = create<CreateCausesStoreDasboard>(
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

    updateCause: async (causeId: number, cause: any) => {
      set({ isLoading: true });

      cause.categories = [Number(cause.categories)];
      cause.association = Number(cause.association);
      await setEditCauses(causeId, cause);

      set({
        //cause: data,
        isLoading: false,
      });
    },
  })
);
