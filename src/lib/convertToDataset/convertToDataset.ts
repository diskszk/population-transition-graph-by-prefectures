import { Dataset, Population, Prefecture } from "../../types";
import { filterEvery10YearsPopulationWithinRange } from "../filterEvery10YearsPopulationWithinRange";

export function convertToDataset(
  prefecture: Prefecture,
  populations: Population[]
): Dataset {
  const filtered = filterEvery10YearsPopulationWithinRange(populations);
  const valueArray = filtered.map(({ value }) => value);

  return {
    label: prefecture.prefName,
    data: valueArray,
    prefCode: prefecture.prefCode,
    hidden: false,
  };
}
