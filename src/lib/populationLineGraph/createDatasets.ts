import { Prefecture, PrefName } from "../../types";
import { filterPopulationValue } from "./filterPopulationValue";

type Dataset = {
  label: PrefName;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

export function createDatasets(prefectures: Prefecture[]): Dataset[] {
  const datasets: Dataset[] = prefectures.map((prefecture) => {
    return {
      label: prefecture.prefName,
      data: filterPopulationValue(prefecture),

      // TODO: ランダムに色を生成する関数を作る
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    };
  });

  return datasets;
}
