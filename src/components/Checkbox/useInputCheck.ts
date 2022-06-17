import { useCallback } from "react";
import { useFetchPopulationByPrefectureCode } from "../../hooks";
import { usePrefectureRemoveValue } from "../../hooks/usePrefectureSetValue";
import { Prefecture } from "../../types";

export type ReturnType = {
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

export function useInputCheck(prefecture: Prefecture): ReturnType {
  const { removePrefecture } = usePrefectureRemoveValue();

  const { mutate, isLoading, isError, error } =
    useFetchPopulationByPrefectureCode(prefecture);

  return {
    handleChange: useCallback(
      (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = ev.target;

        if (checked) {
          mutate(prefecture.prefCode);
        } else {
          removePrefecture(prefecture);
        }
      },
      [mutate, prefecture, removePrefecture]
    ),
    isLoading,
    isError,
    error,
  };
}
