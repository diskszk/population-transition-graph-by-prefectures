import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { DatasetContextWrapper as wrapper } from "../../test-utils";
import { Dataset } from "../../types";
import { ReturnType, useDatasets } from "./useDatasets";

const dummyData1: Dataset = {
  label: "北海道",
  data: [],
  borderColor: "#00f",
  prefCode: 1,
  hidden: false,
};
const dummyData2: Dataset = {
  label: "青森県",
  data: [],
  borderColor: "#0f0",
  prefCode: 2,
  hidden: false,
};

describe("useDatasets", () => {
  let renderHookResult: RenderHookResult<ReturnType, null>;

  beforeEach(() => {
    renderHookResult = renderHook(() => useDatasets(), {
      wrapper,
    });
  });

  test("初期値は空の配列である", () => {
    const { result } = renderHookResult;

    expect(result.current.state).toEqual([]);
  });

  test("addDataset: 北海道のデータを配列に追加したあと、北海道のデータを参照できる", () => {
    const { result } = renderHookResult;

    act(() => {
      result.current.addDataset(dummyData1);
    });

    expect(result.current.state).toHaveLength(1);
    expect(result.current.state[0].label).toBe("北海道");
  });

  test("removeDataset: 北海道のデータを配列から削除すると、北海道のデータを参照できない", () => {
    const { result } = renderHookResult;

    act(() => {
      result.current.addDataset(dummyData1);
      result.current.addDataset(dummyData2);
    });

    expect(result.current.state).toHaveLength(2);

    act(() => {
      result.current.removeDataset(1);
    });

    expect(result.current.state).toHaveLength(1);
    expect(result.current.state).not.toEqual(
      expect.arrayContaining([dummyData1])
    );
  });

  test("toggleHidden: 選択されたデータのhidden要素が反転する", () => {
    const { result } = renderHookResult;

    act(() => {
      result.current.addDataset(dummyData1);
    });
    expect(result.current.state[0].hidden).toBe(false);

    // false -> true
    act(() => {
      result.current.toggleHidden(1);
    });
    expect(result.current.state[0].hidden).toBe(true);

    // true -> false
    act(() => {
      result.current.toggleHidden(1);
    });
    expect(result.current.state[0].hidden).toBe(false);
  });
});
