import {
  deleteReservedTickets,
  getPaypalCreate,
  getPrice,
  getReservedTickets,
  setMercadopago,
  setPaypalCapture,
  setReserveTickets,
} from "@/services/Payments";

import { create } from "zustand";

interface PaypalPayment {
  isLoading: boolean;
  payment: any;
  error: boolean;
  setPaymentCreate: (id: number, raffle: any) => Promise<void>;
  setPaymentCapture: (
    raffleId: number,
    price: number,
    order: string
  ) => Promise<void>;
  getPaymentCreate: (id: number, raffle: any) => Promise<void>;
  setMercadopagoCapture: (
    raffleId: number,
    price: number,
    payment_data: {
      payer: { email: string };
      token: string;
      payment_method_id: string;
      issuer_id: string;
    }
  ) => Promise<void>;
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

      const reservedTickets = await getReservedTickets(Number(raffleId));
      if (reservedTickets.data.results.length)
        await deleteReservedTickets(
          Number(raffleId),
          reservedTickets.data.results.map((ticket: any) => ticket.number)
        );

      await setReserveTickets(raffleId, raffle);

      set({
        isLoading: false,
      });
    } catch (error) {
      set({
        error: true,
      });
    }
  },
  setPaymentCapture: async (raffleId: number, price: number, order: string) => {
    try {
      set({ isLoading: true });

      const payload = { price, order };

      await setPaypalCapture(raffleId, payload);

      set({
        isLoading: false,
      });
    } catch (error) {
      set({
        error: true,
      });
    }
  },
  setMercadopagoCapture: async (
    raffleId: number,
    price: number,
    payment_data: {
      payer: { email: string };
      token: string;
      payment_method_id: string;
      issuer_id: string;
    }
  ) => {
    set({ isLoading: true });

    const priceResult = await getPrice(raffleId);
    console.log("testt", priceResult);

    const payload = {
      email: payment_data.payer.email,
      token: payment_data.token,
      price: price,
      payment_method_id: payment_data.payment_method_id,
      issuer_id: payment_data.issuer_id,
      type: "",
      number: "",
    };

    await setMercadopago(raffleId, payload);

    set({
      isLoading: false,
    });
  },
}));
