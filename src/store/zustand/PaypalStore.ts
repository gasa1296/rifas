import {
  deleteReservedTickets,
  getPaypalCreate,
  getPrice,
  getReservedTickets,
  setMercadopago,
  setPaypalCapture,
  setReserveTickets,
  setWalletCapture,
} from "@/services/Payments";

import { create } from "zustand";

interface PaypalPayment {
  isLoading: boolean;
  payment: any;
  error: boolean;
  payId: string;
  setPaymentCreate: (id: number, raffle: any) => Promise<void>;
  setPaymentCapture: (
    raffleId: number,
    price: number,
    order: string,
    coupon: string,
    wallet: boolean
  ) => Promise<void>;
  setWalletCapture: (
    raffleId: number,

    coupon: string
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
    },
    coupon: string,
    wallet: boolean
  ) => Promise<void>;
}

export const usePaypalPayment = create<PaypalPayment>((set) => ({
  isLoading: false,
  payment: [],
  error: false,
  payId: "",
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
  setPaymentCapture: async (
    raffleId: number,
    price: number,
    order: string,
    coupon: string,
    wallet: boolean
  ) => {
    try {
      set({ isLoading: true, error: false });

      const payload: any = { price, order, coupon, wallet };

      if (payload.coupon === "") delete payload.coupon;

      await setPaypalCapture(raffleId, payload);

      set({
        isLoading: false,
        payId: order,
      });
    } catch (error) {
      set({
        error: true,
      });
    }
  },
  setWalletCapture: async (raffleId: number, coupon: string) => {
    try {
      set({ isLoading: true, error: false });

      const payload: any = { coupon };

      if (payload.coupon === "") delete payload.coupon;

      const result = await setWalletCapture(raffleId, payload);

      set({
        isLoading: false,
        payId: "",
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
    },
    coupon: string,
    wallet: boolean
  ) => {
    try {
      set({ isLoading: true, error: false });
      const payload: any = {
        email: payment_data.payer.email,
        token: payment_data.token,
        price: price,
        payment_method_id: payment_data.payment_method_id,
        issuer_id: payment_data.issuer_id,
        type: "",
        number: "",
        coupon,
        wallet,
      };

      if (payload.coupon === "") delete payload.coupon;

      await setMercadopago(raffleId, payload);

      set({
        isLoading: false,
        payId: payment_data.token,
      });
    } catch (error) {
      set({
        error: true,
      });
    }
  },
}));
