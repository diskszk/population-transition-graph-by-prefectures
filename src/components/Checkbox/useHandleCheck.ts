import { useCallback } from "react";
import { useMutation } from "react-query";
import { fetchPopulationByPrefectureCode } from "../../lib/fetchPopulationByPrefectureCode";
import { useDatasets } from "../../hooks/useDatasets";
import { Prefecture } from "../../types";
import { convertToDataset } from "../../lib/convertToDataset";

export type ReturnType = {
  checkedOn: (prefecture: Prefecture) => void;
  checkedOff: (prefCode: number) => void;
};

export function useHandleCheck(): ReturnType {
  const { removeDataset, addDataset } = useDatasets();

  const { mutate, isLoading, isError, error } = useMutation(
    (prefecture: Prefecture) =>
      fetchPopulationByPrefectureCode(prefecture.prefCode),
    {
      onSuccess: (populations, ctx: Prefecture) => {
        const dataset = convertToDataset(ctx, populations);

        addDataset(dataset);
      },
    }
  );

  if (isLoading) {
    throw new Promise(() => void 0);
  }
  if (isError) {
    throw error;
  }

  const checkedOn = useCallback(
    (prefecture: Prefecture) => {
      mutate(prefecture);
    },
    [mutate]
  );

  const checkedOff = useCallback(
    (prefCode: number) => {
      removeDataset(prefCode);
    },
    [removeDataset]
  );

  return {
    checkedOn,
    checkedOff,
  };
}
