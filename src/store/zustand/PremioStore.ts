import { getCausesStore } from "@/services/getCauses";
import { getPremioStore } from "@/services/getPremio";
import { create } from "zustand";

interface PremioStore {
  isLoading: boolean;
  premio: any[];
  error: boolean;
  getPremio: () => Promise<void>;
}

export const usePremioStore = create<PremioStore>((set) => ({
  isLoading: false,
  premio: [],
  error: false,

  getPremio: async () => {
    set({ isLoading: true });

    const { data } = await getPremioStore();
    console.log("first", data)

    set({
        premio: data.results,
      isLoading: false,
    });
  },
}));
