import { Dataset, Prefecture } from "../../types";
import { filterPopulationValue } from "../filterPopulationValue";
import { GRAPH_LINE_COLORS } from "../../constants";

export function createDatasets(prefectures: Prefecture[]): Dataset[] {
  const datasets: Dataset[] = prefectures.map((prefecture, i) => {
    return {
      label: prefecture.prefName,

      // TODO: ここではfilterされた状態で出てくる想定
      data: filterPopulationValue(prefecture),

      borderColor: GRAPH_LINE_COLORS[i],
      prefCode: prefecture.prefCode,
      hidden: false,
    };
  });

  return datasets;
}
