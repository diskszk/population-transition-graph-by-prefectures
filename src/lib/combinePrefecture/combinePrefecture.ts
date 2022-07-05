import { Prefecture, Population } from "../../types";

export function combinePrefecture(
  prefecture: Prefecture,
  _populations: Population[]
): Prefecture {
  return { ...prefecture };
}
