import useSWR from "swr";
import { api } from "@/services/apiClient";

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, isValidating, mutate } = useSWR<Data, Error>(
    url,
    async () => {
      const { data } = await api.get(url);

      return data.body;
    },
    { suspense: true }
  );

  return { data, error, isValidating, mutate };
}
