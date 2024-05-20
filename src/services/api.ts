import axios, { AxiosError } from "axios";

import * as ls from "@/utils/localstorageSlim";
import { signOut } from "@/context/AuthContext";

export function setupApiClient() {
  const api = axios.create({
    baseURL: "http://localhost:4096/v1",
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      console.log(error);
      if (error.response?.status === 401) {
        return signOut();
      }

      return Promise.reject(error);
    }
  );

  api.interceptors.request.use(async (config: any) => {
    const token = ls.get("saturn-api.token");

    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  });

  return api;
}
