import { useMutation } from "react-query";
import { GRAPH_LINE_COLORS } from "../../constants";
import { combinePrefecture } from "../../lib/combinePrefecture";
import { convertToDatasetFromPrefectures } from "../../lib/convertToDatasetFromPrefectures";
import { fetchPopulationByPrefectureCode } from "../../lib/fetchPopulationByPrefectureCode";
import { filterPopulationValue } from "../../lib/filterPopulationValue";
import { Population, Prefecture } from "../../types";
import { useDatasets } from "../useDatasets";
import { usePrefectureContext } from "../usePrefectureContext";

// TODO: この関数でPrefectureをセットするのは良くないので直す => Populationをsetするだけにとどめる
export function useFetchPopulationByPrefectureCode(prefecture: Prefecture) {
  const { addDataset } = useDatasets();

  return useMutation(
    (prefCode: number) => fetchPopulationByPrefectureCode(prefCode),
    {
      onSuccess: (data: Population[]) => {
        if (data) {
          const combinedPrefecture = combinePrefecture(prefecture, data);

          const converted = {
            label: combinedPrefecture.prefName,

            // TODO: ここではfilterされた状態で出てくる想定
            data: filterPopulationValue(combinedPrefecture),

            borderColor: "#00f",
            prefCode: combinedPrefecture.prefCode,
            hidden: false,
          };

          addDataset(converted);
          // addPrefecture(combinedPrefecture);

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
