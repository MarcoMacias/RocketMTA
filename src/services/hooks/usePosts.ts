import useSWR from "swr";
import { api } from "@/services/apiClient";

export function usePosts<Data = any, Error = any>() {
  const { data, error, isValidating, mutate } = useSWR<Data, Error>(
    "feed",
    async () => {
      const { data } = await api.get("/social/timeline/posts/engineFeedSearch");

      return data.body.data;
    },
    { suspense: true, refreshInterval: 1000 }
  );

  return { data, error, isValidating, mutate };
}
