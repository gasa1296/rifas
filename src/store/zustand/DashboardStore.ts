import { create } from "zustand";
import { getDashboardCause, getDashboardRaffle, setEditCauses } from "@/services/dashboard";
import { getDashboardPrize } from "@/services/dashboard";
import { createCause, getAssociationsApproveds } from "@/services/raffles";


interface CausesStoreDasboard {
    isLoading: boolean;
    cause: any[];
    error: boolean;
    getCause: (id:string) => Promise<void>;
  }

  export const useCauseStoreDashboard = create<CausesStoreDasboard>((set) => ({
    isLoading: false,
    cause: [],
    error: false,
  
    getCause: async (id:string) => {
      set({ isLoading: true });
  
      const { data } = await getDashboardCause(id);
  
      set({
        cause: data.results,
        isLoading: false,
      });
    },
  }));

  interface PrizeStoreDasboard {
    isLoading: boolean;
    prize: any[];
    error: boolean;
    getPrize: (id:string) => Promise<void>;
  }

  export const usePrizeStoreDashboard = create<PrizeStoreDasboard>((set) => ({
    isLoading: false,
    prize: [],
    error: false,
  
    getPrize: async (id:string) => {
      set({ isLoading: true });
  
      const { data } = await getDashboardPrize(id);
  
      set({
        prize: data.results,
        isLoading: false,
      });
    },
  }));
  
  interface RaffleStoreDasboard {
    isLoading: boolean;
    raffle: any[];
    error: boolean;
    getRaffle: (id:string) => Promise<void>;
  }

  export const useRaffleStoreDashboard = create<RaffleStoreDasboard>((set) => ({
    isLoading: false,
    raffle: [],
    error: false,
  
    getRaffle: async (id:string) => {
      set({ isLoading: true });
  
      const { data } = await getDashboardRaffle( id);
  
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
  }

  export const useAsociatonsStoreDashboard = create<AsociationsStoreDasboard>((set) => ({
    isLoading: false,
    asociations: [],
    error: false,
  
    getAsociations: async () => {
      set({ isLoading: true });
  
      const { data } = await getAssociationsApproveds();
      set({
        asociations: data.results,
        isLoading: false,
      });
    },
  }));




  interface CreateCausesStoreDasboard {
    isLoading: boolean;
    cause: any[];
    error: boolean;
    createCause: (cause:any) => Promise<void>;
  }

  export const useCreateCausesStoreDashboard = create<CreateCausesStoreDasboard>((set) => ({
    isLoading: false,
    cause: [],
    error: false,
  
    createCause: async (cause:any) => {
      set({ isLoading: true });
   console.log("causes",cause)
      const { data } = await createCause(cause);
      set({
        cause: data,
        isLoading: false,
      });
    },
    
  }));



  interface setCausesStoreDasboard {
    isLoading: boolean;
    raffle: any[];
    error: boolean;
    setCauses: (id:string) => Promise<void>;
  }

  export const useCausesStoreDashboard = create<setCausesStoreDasboard>((set) => ({
    isLoading: false,
    raffle: [],
    error: false,
  
    setCauses: async (id:string) => {
      set({ isLoading: true });
  
      const { data } = await setEditCauses(id);
  
      set({
        raffle: data.results,
        isLoading: false,
      });
    },
  }));









