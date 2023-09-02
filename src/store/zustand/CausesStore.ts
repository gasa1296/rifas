import { getAllNotifications } from "@/services/notification";
import { getCausesStore } from "@/services/getCauses";
import { create } from "zustand";

interface CausesStore {
  isLoading: boolean;
  causes: any[];
  error: boolean;
  getCauses: () => Promise<void>;
}

export const useCausesStore = create<CausesStore>((set) => ({
  isLoading: false,
  causes: [],
  error: false,

  getCauses: async () => {
    set({ isLoading: true });

    const { data } = await getCausesStore();

    set({
        causes: data,
      isLoading: false,
    });
  },
}));
