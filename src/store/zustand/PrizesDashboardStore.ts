import { editPrize, getDashboardPrize } from "@/services/dashboard";
import { create } from "zustand";

interface PrizeStoreDasboard {
  isLoading: boolean;
  prize: any[];
  error: boolean;
  getPrize: (id: string, pagination: number) => Promise<void>;
  updatePrize: (prizeId: number, prize: any) => Promise<void>;
  pagination: number | null;
}

export const usePrizeStoreDashboard = create<PrizeStoreDasboard>((set) => ({
  isLoading: false,
  prize: [],
  error: false,
  pagination: 1,

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

  
  updatePrize: async (prizeId: number, prize: any) => {
    set({ isLoading: true });

    prize.status = prize.status === "usado" ? 1 : 0;

    prize.association = Number(prize.association);

    if (prize.association === 0 || prize.association === undefined)
      delete prize.association;

    prize.category = Number(prize.category);

    await editPrize(prizeId, prize);

    set({
      //prize: data,
      isLoading: false,
    });
  },
}));
