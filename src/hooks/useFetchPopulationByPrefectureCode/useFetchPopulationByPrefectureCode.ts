import { useMutation } from "react-query";
import { combinePrefecture } from "../../lib/combinePrefecture";
import { fetchPopulationByPrefectureCode } from "../../lib/fetchPopulationByPrefectureCode";
import { Population, Prefecture } from "../../types";
import { usePrefectureContext } from "../usePrefectureContext";

// TODO: この関数でPrefectureをセットするのは良くないので直す => Populationをsetするだけにとどめる
export function useFetchPopulationByPrefectureCode(prefecture: Prefecture) {
  const { addPrefecture } = usePrefectureContext();

  return useMutation(
    (prefCode: number) => fetchPopulationByPrefectureCode(prefCode),
    {
      onSuccess: (data: Population[]) => {
        if (data) {
          const combinedPrefecture = combinePrefecture(prefecture, data);

          addPrefecture(combinedPrefecture);

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
