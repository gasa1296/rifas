import { getAllNotifications } from "@/services/notification";
import { postEmail, postValidateAccount } from "@/services/auth";
import { create } from "zustand";

interface ForgotPasswordStoreI {
  showModal: boolean;
  isLoading: boolean;
  error: boolean;
  postEmail: (email: string) => Promise<boolean>;
  postValidateAccount: (code: string) => Promise<boolean>;
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

  postValidateAccount: async (code: string) => {
    try {
      set({ isLoading: true });

      await postValidateAccount(code);

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
