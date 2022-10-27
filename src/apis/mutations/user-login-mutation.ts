import { client } from "../utils";

export interface LoginUserRequest {
  email: string;
  password: string;
}
export interface LoginUserResponse {
  _id: string;
  email: string;
  isCoinbaseAuthorized: boolean;
}

export const loginUser = ({ email, password }: LoginUserRequest) => {
  return client.post<LoginUserRequest, LoginUserResponse>("/auth/login", {
    email,
    password,
  });
};

export const signUpUser = ({ email, password }: LoginUserRequest) => {
  return client.post<LoginUserRequest, LoginUserResponse>("/auth/signup", {
    email,
    password,
  });
};
