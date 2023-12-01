import { atom, action } from "nanostores";

export const $count = atom<number>(0);

export const increment = action($count, "increment", () => {
  $count.set($count.get() + 1);
});

export const decrement = action($count, "decrement", () => {
  $count.set($count.get() - 1);
});
