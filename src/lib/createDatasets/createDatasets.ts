import { Prefecture, PrefName } from "../../types";
import { filterPopulationValue } from "../filterPopulationValue";
import { GRAPH_LINE_COLORS } from "../../constants";

export type Dataset = {
  label: PrefName;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

export function createDatasets(prefectures: Prefecture[]): Dataset[] {
  const { backgroundColor, borderColor } = GRAPH_LINE_COLORS;

  const datasets: Dataset[] = prefectures.map((prefecture, i) => {
    return {
      label: prefecture.prefName,

      // TODO: ここではfilterされた状態で出てくる想定
      data: filterPopulationValue(prefecture),

      borderColor: borderColor[i],
      backgroundColor: backgroundColor[i],
    };
  });

  return datasets;
}
