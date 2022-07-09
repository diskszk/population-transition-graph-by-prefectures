import { useContext } from "react";
import {
  DatasetsSetContext,
  DatasetsValueContext,
} from "../../contexts/DatasetsProvider";
import {
  ADD_DATASET,
  REMOVE_DATASET,
  TOGGLE_HIDDEN,
} from "../../reducers/datasetsReducer";
import { Dataset } from "../../types";

export type ReturnType = {
  state: Dataset[];
  addDataset: (dataset: Dataset) => void;
  removeDataset: (prefCode: number) => void;
  toggleHidden: (prefCode: number) => void;
};

export function useDatasets(): ReturnType {
  const state = useContext(DatasetsValueContext);
  const dispatch = useContext(DatasetsSetContext);

  return {
    state,
    addDataset: (dataset: Dataset): void =>
      dispatch({ type: ADD_DATASET, payload: dataset }),
    removeDataset: (prefCode: number): void =>
      dispatch({ type: REMOVE_DATASET, payload: prefCode }),
    toggleHidden: (prefCode: number): void =>
      dispatch({ type: TOGGLE_HIDDEN, payload: prefCode }),
  };
}
