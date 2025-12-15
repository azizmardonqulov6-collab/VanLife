import {create} from 'zustand'
import {data} from '../data/data'
import type {Van} from '../type/Types'

export interface VanStore {
  vans: Van[];
  addVan: (van: Van) => void;
}

export const useVanStore = create<VanStore>((set) => ({
  vans: data,
  addVan: (van) =>
    set((state) => ({
      vans: [...state.vans, van],
    })),
}));
