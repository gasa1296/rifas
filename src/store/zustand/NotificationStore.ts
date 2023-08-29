import { getAllNotifications } from "@/services/notification";
import { create } from "zustand";

interface NotificationStore {
  isLoading: boolean;
  notifications: any[];
  notificationsSize: number;
  error: boolean;
  getNotifications: () => Promise<void>;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  isLoading: false,
  notifications: [],
  notificationsSize: 0,
  error: false,

  getNotifications: async () => {
    set({ isLoading: true });

    const { data } = await getAllNotifications();

    set({
      notifications: data,
      notificationsSize: data.length,
      isLoading: false,
    });
  },
}));
