import { getCausesStore } from "@/services/getCauses";
import { getPremioStore } from "@/services/getPremio";
import { create } from "zustand";

interface PremioStore {
  isLoading: boolean;
  premio: any[];
  error: boolean;
  getPremio: (pagination: number) => Promise<void>;
  resetPremio: () => void;
  paginacion: number | null;
}

export const usePremioStore = create<PremioStore>((set) => ({
  isLoading: false,
  premio: [],
  error: false,
  paginacion: 1,
  getPremio: async (pagination: number) => {
    set({ isLoading: true });

    const { data } = await getPremioStore(pagination || 1);

    const nextPagination = data.next ? pagination + 1 : null;

    set((state) => ({
      premio:
        pagination === 1 ? data.results : [...state.premio, ...data.results],
      isLoading: false,
      paginacion: nextPagination,
    }));
  },
  resetPremio: () => {
    set({ premio: [], paginacion: 1 });
  },
}));
