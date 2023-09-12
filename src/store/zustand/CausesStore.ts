import { getAllNotifications } from "@/services/notification";
import { getCausesStore } from "@/services/getCauses";
import { create } from "zustand";

interface CausesStore {
  isLoading: boolean;
  causes: any[];
  error: boolean;
  getCauses: (pagination: number) => Promise<void>;
  resetCauses: () => void;
  paginacion: number | null;
}

export const useCausesStore = create<CausesStore>((set) => ({
  isLoading: false,
  causes: [],
  error: false,
  paginacion: 1,
  getCauses: async (pagination: number) => {
    set({ isLoading: true });

    const { data } = await getCausesStore(pagination || 1);

    const nextPagination = data.next ? pagination + 1 : null;

    set((state) => ({
      causes:
        pagination === 1 ? data.results : [...state.causes, ...data.results],
      isLoading: false,
      paginacion: nextPagination,
    }));
  },
  resetCauses: () => {
    set({ causes: [] });
  },
}));
