import { StateCreator } from "zustand";
import { LoginUserResponse } from "../apis/mutations/user-login-mutation";
export interface AuthState {
  user?: LoginUserResponse;
  setUser: (user?: LoginUserResponse) => void;
}
export const createCoinBaseslice: StateCreator<AuthState> = (set) => ({
  user: undefined,
  setUser: (user?: LoginUserResponse) => set(() => ({ user: user })),
});
