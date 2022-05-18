import { useContext } from "react";
import { useMutation } from "react-query";
import { combinePrefecture } from "../../lib/combinePrefecture";
import { fetchPopulationByPrefectureCode } from "../../lib/fetchPopulationByPrefectureCode";
import { SetPrefecturesContext } from "../../pages/Home";
import { Population, Prefecture } from "../../types";

export function useFetchPopulationByPrefectureCode(prefecture: Prefecture) {
  const setPrefectures = useContext(SetPrefecturesContext);

  return useMutation(
    (prefCode: number) => fetchPopulationByPrefectureCode(prefCode),
    {
      onSuccess: (data: Population[]) => {
        if (data) {
          const combinedPrefecture = combinePrefecture(prefecture, data);

          setPrefectures((prev) => [...prev, { ...combinedPrefecture }]);

          return;
        }
        return;
      },
      onError: () => {
        return;
      },
    }
  );
}
