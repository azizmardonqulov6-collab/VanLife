import {create} from 'zustand'
import type {Van} from '../type/Types'

export interface VanStore {
  vans: Van[];
  addVan: (van: Van) => void;
}

export const useVanStore = create<VanStore>((set) => ({
  vans: [
  {
    id: 1,
    name: "Modest Explorer",
    price: 60,
    type: "Simple",
    imgUrl: "/image/cards/1.png",
    dec: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
  },
  {
    id: 2,
    name: "Beach Bum",
    price: 80,
    type: "Rugged",
    imgUrl: "/image/cards/2.png",
    dec: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
  },
  {
    id: 3,
    name: "Reliable Red",
    price: 100,
    type: "Luxury",
    imgUrl: "/image/cards/3.jpg",
    dec: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
  },
  {
    id: 4,
    name: "Dreamfinder",
    price: 65,
    type: "Simple",
    imgUrl: "/image/cards/4.png",
    dec: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
  },
  {
    id: 5,
    name: "The Cruiser",
    price: 120,
    type: "Luxury",
    imgUrl: "/image/cards/5.png",
    dec: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
  },
  {
    id: 6,
    name: "Green Wonder",
    price: 70,
    type: "Rugged",
    imgUrl: "/image/cards/6.png",
    dec: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
  }
],
  addVan: (van) =>
    set((state) => ({
      vans: [...state.vans, van],
    })),
}));
