import { GRAPH_LINE_COLORS } from "../../constants";
import { Dataset, Population, Prefecture } from "../../types";
import { filterEvery10YearsPopulationWithinRange } from "../filterEvery10YearsPopulationWithinRange";

export function convertToDataset(
  prefecture: Prefecture,
  populations: Population[],
  index: number
): Dataset {
  const filtered = filterEvery10YearsPopulationWithinRange(populations);
  const valueArray = filtered.map(({ value }) => value);

  return {
    label: prefecture.prefName,
    data: valueArray,
    prefCode: prefecture.prefCode,
    hidden: false,
    borderColor: getColor(index) || GRAPH_LINE_COLORS[0],
  };
}

export function getColor(index: number) {
  let result = "";

  for (let n = 0; !result; n++) {
    result = GRAPH_LINE_COLORS[n * -10 + index];
  }

  return result;
}
