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

      const result = await postValidateAccount(code);

      await localStorage.setItem("sessionToken", result.data.access);
      await localStorage.setItem("sessionTokenRefresh", result.data.refresh);

      set({
        isLoading: false,
      });
      return result.data;
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
