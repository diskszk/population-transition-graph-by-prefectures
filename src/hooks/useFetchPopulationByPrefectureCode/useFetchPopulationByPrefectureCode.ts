import { useMutation } from "react-query";
import { usePrefecturesSetValue } from "../../contexts/PrefecturesContext";
import { combinePrefecture } from "../../lib/combinePrefecture";
import { fetchPopulationByPrefectureCode } from "../../lib/fetchPopulationByPrefectureCode";
import { Population, Prefecture } from "../../types";

// TODO: この関数でPrefectureをセットするのは良くないので直す => Populationをsetするだけにとどめる
export function useFetchPopulationByPrefectureCode(prefecture: Prefecture) {
  const setPrefectures = usePrefecturesSetValue();

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
