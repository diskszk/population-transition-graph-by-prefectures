import { TARGET_MIN_YEAR, TARGET_MAX_YEAR } from "../../constants";
import { Prefecture } from "../../types";

export function filterPopulationValue(prefecture: Prefecture): number[] {
  const filteredPopulations = prefecture.populations.filter(
    ({ year }) => year >= TARGET_MIN_YEAR && year <= TARGET_MAX_YEAR
  );

  return filteredPopulations.map(({ value }) => value);
}
