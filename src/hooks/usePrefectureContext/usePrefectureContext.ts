import { useContext } from "react";
import {
  prefecturesContext,
  setPrefecturesContext,
} from "../../contexts/PrefecturesContext";
import { Prefecture } from "../../types";

export type ReturnType = {
  prefecturesValue: Prefecture[];
  addPrefecture: (prefecture: Prefecture) => void;
  removePrefecture: (prefecture: Prefecture) => void;
  resetPrefectures: () => void;
};

export function usePrefectureContext(): ReturnType {
  const prefecturesValue = useContext(prefecturesContext);
  const setValue = useContext(setPrefecturesContext);

  const addPrefecture = (prefecture: Prefecture) => {
    if (
      prefecturesValue.find(({ prefCode }) => prefCode === prefecture.prefCode)
    ) {
      return setValue((prev) =>
        prev.map((prev) =>
          prev.prefCode === prefecture.prefCode ? prefecture : prev
        )
      );
    }
    return setValue((prev) => [...prev, { ...prefecture }]);
  };

  const removePrefecture = (prefecture: Prefecture) =>
    setValue((prev) =>
      prev.filter(({ prefCode }) => prefCode !== prefecture.prefCode)
    );

  const resetPrefectures = () => setValue([]);

  return {
    prefecturesValue,
    addPrefecture,
    removePrefecture,
    resetPrefectures,
  };
}
