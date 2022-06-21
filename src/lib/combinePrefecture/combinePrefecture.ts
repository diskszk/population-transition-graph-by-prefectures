import { Prefecture, Population } from "../../types";

export function combinePrefecture(
  prefecture: Prefecture,
  populations: Population[]
): Prefecture {
  return { ...prefecture, populations: populations };
}
