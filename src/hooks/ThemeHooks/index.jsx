import { useQuery } from "@tanstack/react-query";
export const useThemeInfo = () => {
  const { isFetching, data } = useQuery({
    queryKey: [`themeInfo`],

    queryFn: () => {},
  });
  return {
    isFetching,
    data,
  };
};
