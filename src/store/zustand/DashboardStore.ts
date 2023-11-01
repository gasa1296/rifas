import { create } from "zustand";
import {
  getDashboardCause,
  getDashboardRaffle,
  getDashboardResumen,
  getDashboardWallet,
  setEditCauses,
} from "@/services/dashboard";
import { getDashboardPrize } from "@/services/dashboard";
import {
  createCause,
  getAssociationsApproveds,
  getRafflesPurchase,
} from "@/services/raffles";

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
  pagination: number | null;
  wallets: any[];
  resumen: any;
}

export const useAsociatonsStoreDashboard = create<AsociationsStoreDasboard>(
  (set) => ({
    isLoading: false,
    asociations: [],
    resumen: [],
    error: false,
    wallets: [],
    pagination: 1,

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

    getResumen: async (id: string) => {
      set({ isLoading: true });

      const { data } = await getDashboardResumen(id);

      set({
        resumen: data,
        isLoading: false,
      });
    },
  })
);
