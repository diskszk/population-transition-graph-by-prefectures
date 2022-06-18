import { usePrefecturesSetValue } from "../../contexts/PrefecturesContext";
import { Prefecture } from "../../types";

export type ReturnType = {
  removePrefecture: (val: Prefecture) => void;
};

export function usePrefectureRemoveValue(): ReturnType {
  const setPrefectures = usePrefecturesSetValue();

  return {
    removePrefecture: (prefecture: Prefecture) =>
      setPrefectures((prev) =>
        prev.filter(({ prefCode }) => prefCode !== prefecture.prefCode)
      ),
  };
}
