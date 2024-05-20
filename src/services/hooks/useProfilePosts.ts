import useSWR from "swr";
import { api } from "@/services/apiClient";

export function useProfilePosts<Data = any, Error = any>(ident: string) {
  const { data, error, isValidating, mutate } = useSWR<Data, Error>(
    "profileposts",
    async () => {
      const { data } = await api.get(
        "/social/timeline/posts/search?query=" + ident
      );

      return data.body.data;
    },
    { suspense: true, refreshInterval: 1000 }
  );

  return { data, error, isValidating, mutate };
}
