import { getAllNotifications } from "@/services/notification";
import { create } from "zustand";

interface ForgotPasswordStoreI {
    showModal: boolean;
setShowModal: (showModal: boolean) => void;
}

export const ForgotPasswordStore = create<ForgotPasswordStoreI>((set) => ({
 
showModal: false,

setShowModal: (showModal: boolean) => {set({ showModal});
},
}));
