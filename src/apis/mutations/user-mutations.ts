import { client } from "../utils";

export interface CreateUserRequest {
  email: string;
  password: string;
}
export interface CreateUserResponse {
  _id: string;
  email: string;
}

export const createUser = ({ email, password }: CreateUserRequest) => {
  return client.post<CreateUserRequest, CreateUserResponse>("/auth/signup", {
    email,
    password,
  });
};
