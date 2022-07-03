import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { GRAPH_LINE_COLORS } from "../../constants";
import { Prefecture } from "../../types";
import { ReturnType, useDatasets } from "./useDatasets";

describe("useDatasets", () => {
  let renderHookResult: RenderHookResult<ReturnType, null>;

  const dummyData: Prefecture[] = [
    {
      prefName: "北海道",
      prefCode: 1,
      populations: [],
    },
    {
      prefName: "青森県",
      prefCode: 2,
      populations: [],
    },
  ];

  beforeEach(() => {
    renderHookResult = renderHook(() => useDatasets(dummyData));
  });

  test("Prefecture[]型を渡すとDataset[]型で返ってくる", () => {
    const { result } = renderHookResult;

    expect(result.current.datasets).toEqual([
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
    ]);
  });

  test("TOGGLE_HIDDEN: hidden要素が切り替わる", () => {
    const { result } = renderHookResult;

    act(() => {
      result.current.toggleHidden(1);
    });

    expect(result.current.datasets).toHaveLength(2);
    expect(result.current.datasets[0].hidden).toBe(true);
  });
});
