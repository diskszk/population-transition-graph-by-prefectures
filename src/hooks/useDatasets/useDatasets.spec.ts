import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { GRAPH_LINE_COLORS } from "../../constants";
import { Dataset } from "../../types";
import {
  ReturnType,
  TOGGLE_HIDDEN,
  UPDATE_DATASET,
  useDatasets,
} from "./useDatasets";

describe("useDatasets", () => {
  let renderHookResult: RenderHookResult<ReturnType, null>;

  const dummyData: Dataset[] = [
    {
      label: "北海道",
      data: [],
      borderColor: GRAPH_LINE_COLORS[0],
      prefCode: 1,
      hidden: false,
    },
    {
      label: "青森県",
      data: [],
      borderColor: GRAPH_LINE_COLORS[1],
      prefCode: 2,
      hidden: false,
    },
  ];

  beforeEach(() => {
    renderHookResult = renderHook(() => useDatasets());
  });

  test("初期値は空の配列である", () => {
    const { result } = renderHookResult;

    expect(result.current.datasets).toEqual([]);
  });

  test("UPDATE_DATASET: dataを登録する", () => {
    const { result } = renderHookResult;

    act(() => {
      result.current.dispatch({
        type: UPDATE_DATASET,
        payload: dummyData,
      });
    });

    expect(result.current.datasets).toEqual(dummyData);
  });

  test("TOGGLE_HIDDEN: hidden要素が切り替わる", () => {
    const { result } = renderHookResult;

    // dummyデータを登録する
    act(() => {
      result.current.dispatch({
        type: UPDATE_DATASET,
        payload: dummyData,
      });
    });

    act(() => {
      result.current.dispatch({
        type: TOGGLE_HIDDEN,
        payload: 1,
      });
    });

    expect(result.current.datasets).toHaveLength(2);
    expect(result.current.datasets[0].hidden).toBe(true);
  });
});
