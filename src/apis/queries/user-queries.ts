import { client } from "../utils";
export const getUsers = () => {
  return client.get("/users");
};


export const getUsersTransactions= () => {
  return client.get("/coinbase");
};
