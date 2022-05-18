import { TARGET_MIN_YEAR, TARGET_MAX_YEAR } from "../../constants";
import { Prefecture } from "../../types";

export function filterPopulationValue(prefecture: Prefecture): number[] {
  // 1970年以降、2020年以前のデータをfilterする
  const filteredPopulationRange = prefecture.populations.filter(
    ({ year }) => year >= TARGET_MIN_YEAR && year <= TARGET_MAX_YEAR
  );

  // 10年ごとのデータをフィルターする(XX00年, XX10年, ...)
  const every10YearsPopulation = filteredPopulationRange.filter(
    ({ year }) => year % 10 === 0
  );

  return every10YearsPopulation.map(({ value }) => value);
}
