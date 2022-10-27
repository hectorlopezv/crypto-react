import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import {
  loginUser,
  LoginUserRequest,
  LoginUserResponse,
} from "../mutations/user-login-mutation";
import {
  createUser,
  CreateUserRequest,
  CreateUserResponse,
} from "../mutations/user-mutations";

export const useCreateUser = (
  options?: Omit<
    UseMutationOptions<CreateUserResponse, unknown, CreateUserRequest, unknown>,
    "mutationKey" | "mutationFn"
  >
) => {
  return useMutation(["create-user"], createUser, options ?? {});
};

export const useLoginUser = (
  options?: Omit<
    UseMutationOptions<LoginUserResponse, unknown, LoginUserRequest, unknown>,
    "mutationKey" | "mutationFn"
  >
) => {
  return useMutation<LoginUserResponse, unknown, LoginUserRequest, unknown>(
    ["login-user"],
    loginUser,
    options ?? {}
  );
};


export const useSignUpUser = (
  options?: Omit<
    UseMutationOptions<LoginUserResponse, unknown, LoginUserRequest, unknown>,
    "mutationKey" | "mutationFn"
  >
) => {
  return useMutation<LoginUserResponse, unknown, LoginUserRequest, unknown>(
    ["login-user"],
    loginUser,
    options ?? {}
  );
};
