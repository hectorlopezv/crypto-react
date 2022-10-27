// import { useQuery, useQueryClient } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
import { getUsers, getUsersTransactions } from "../queries/user-queries";

export const useGetUsers = () => {
  return useQuery(["get-users"], () => getUsers());
};

export const useGetUserCoinBseTransactions = () => {
  return useQuery(["get-user-transactions"], () => getUsersTransactions());
};
