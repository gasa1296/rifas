import { getPaypalCreate, getReserveTickets } from "@/services/Payments";
import { getCausesStore } from "@/services/getCauses";
import { getPremioStore } from "@/services/getPremio";
import { create } from "zustand";

interface PaypalPayment {
  isLoading: boolean;
  payment: any;
  error: boolean;
  setPaymentCreate: (id: number, raffle: any) => Promise<void>;
  getPaymentCreate: (id: number, raffle: any) => Promise<void>;
}

export const usePaypalPayment = create<PaypalPayment>((set) => ({
  isLoading: false,
  payment: [],
  error: false,

  setPaymentCreate: async (raffleId: number, raffle: any) => {
    set({ isLoading: true });

    const results = await getPaypalCreate(raffleId, raffle);

    set({
      payment: results,
      isLoading: false,
    });
  },
  getPaymentCreate: async (raffleId: number, raffle: any) => {
    try {
      set({ isLoading: true });

      const resultTickets = await getReserveTickets(raffleId, raffle);
      const results = await getPaypalCreate(raffleId, raffle);

      set({
        payment: results,
        isLoading: false,
      });
    } catch (error) {
      console.log("Tes", error);
    }
  },
}));
