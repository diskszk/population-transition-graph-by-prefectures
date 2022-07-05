import { useCallback } from "react";
import { useFetchPopulationByPrefectureCode } from "../../hooks/useFetchPopulationByPrefectureCode";
import { usePrefectureContext } from "../../hooks/usePrefectureContext";
import { Prefecture } from "../../types";

export type ReturnType = {
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

export function useInputCheck(prefecture: Prefecture): ReturnType {
  const { mutate, isLoading, isError, error } =
    useFetchPopulationByPrefectureCode(prefecture);

  return {
    handleChange: useCallback(
      (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = ev.target;

        if (checked) {
          mutate(prefecture.prefCode);
        } else {
          // removePrefecture(prefecture);
          console.log("remove");
        }
      },
      [mutate, prefecture]
    ),
    isLoading,
    isError,
    error,
  };
}
