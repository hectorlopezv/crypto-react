import { StateCreator } from "zustand";
import { User } from "../models/user";
export interface AuthState {
  user?: User;
}
export const createAuthSlice: StateCreator<AuthState> = (set) => ({
  user: undefined,
});
