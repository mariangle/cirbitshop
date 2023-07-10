import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

import { Variant } from '@/common.types';

interface WishlistStore {
  items: Variant[];
  addItem: (data: Variant) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useWishlist = create(
  persist<WishlistStore>((set, get) => ({
  items: [],
  addItem: (data: Variant) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === data.id);
    
    if (existingItem) {
      return toast(`Varen er allerede i ønskelisten.`);
    }

    set({ items: [...get().items, data] });
  },
  removeItem: (id: string) => {
    set({ items: [...get().items.filter((item) => item.id !== id)] });
  },
  removeAll: () => set({ items: [] }),
}), {
  name: 'wishlist-storage',
  storage: createJSONStorage(() => localStorage)
}));

export default useWishlist;