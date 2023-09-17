import { getAllNotifications } from "@/services/notification";
import { postEmail, postEmailRecover } from "@/services/auth";
import { create } from "zustand";

interface ForgotPasswordStoreI {
  showModal: boolean;
  isLoading: boolean;
  error: boolean;
  postEmail: (email: string) => Promise<boolean>;
  postEmailRecover: (id: string, password: string) => Promise<boolean>;
  setShowModal: (showModal: boolean) => void;
}

export const ForgotPasswordStore = create<ForgotPasswordStoreI>((set) => ({
  showModal: false,
  isLoading: false,
  error: false,

  postEmail: async (email: string) => {
    try {
      set({ isLoading: true });

      await postEmail(email);

      set({
        isLoading: false,
      });
      return true;
    } catch (error) {
      set({
        isLoading: false,
        error: true,
      });
      return false;
    }
  },
  postEmailRecover: async (id: string, password: string) => {
    try {
      set({ isLoading: true });

      await postEmailRecover(id, password);

      set({
        isLoading: false,
      });
      return true;
    } catch (error) {
      set({
        isLoading: false,
        error: true,
      });
      return false;
    }
  },

  setShowModal: (showModal: boolean) => {
    set({ showModal });
  },
}));
