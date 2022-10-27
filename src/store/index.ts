import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthState, createAuthSlice } from "./auth";
export const useStore = create<
  AuthState,
  [["zustand/devtools", never], ["zustand/persist", AuthState]]
>(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
      }),
      { name: "global-store" }
    )
  )
);
