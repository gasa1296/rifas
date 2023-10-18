import { create } from "zustand";
import {
  getDashboardCause,
  getDashboardRaffle,
  getDashboardResumen,
  getDashboardWallet,
  setEditCauses,
} from "@/services/dashboard";
import { getDashboardPrize } from "@/services/dashboard";
import { createCause, getAssociationsApproveds } from "@/services/raffles";

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
    resumen:[],
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
