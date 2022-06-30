import { renderHook, RenderHookResult } from "@testing-library/react";
import { ReactNode } from "react";
import { act } from "react-dom/test-utils";
import { PrefecturesProvider } from "../../contexts/PrefecturesContext";
import { mockedHokkaido } from "../../mocks/mockResponses";
import { ReturnType, usePrefectureContext } from "./usePrefectureContext";

describe("usePrefectureContext", () => {
  let renderHookResult: RenderHookResult<ReturnType, null>;

  const wrapper = (props: { children: ReactNode }) => (
    <PrefecturesProvider>{props.children}</PrefecturesProvider>
  );

  beforeEach(() => {
    renderHookResult = renderHook(() => usePrefectureContext(), {
      wrapper,
    });
  });

  test("初期値は空の配列である", () => {
    const { result } = renderHookResult;

    expect(result.current.prefecturesValue).toEqual([]);
  });

  test("`北海道`を追加したあと、`北海道`のデータを参照できる", () => {
    const { result } = renderHookResult;

    act(() => {
      result.current.addPrefecture(mockedHokkaido);
    });

    expect(result.current.prefecturesValue).toHaveLength(1);
    expect(result.current.prefecturesValue[0].prefName).toBe("北海道");
  });

  test("`北海道`のデータが格納されている時に`北海道`のデータを取り除くと、`北海道`のデータを参照できない", () => {
    const { result } = renderHookResult;

    act(() => {
      result.current.addPrefecture(mockedHokkaido);
      result.current.addPrefecture({
        prefCode: 2,
        prefName: "青森県",
        populations: [],
      });
    });

    act(() => {
      result.current.removePrefecture(mockedHokkaido);
    });

    expect(result.current.prefecturesValue).toHaveLength(1);
    expect(result.current.prefecturesValue).toEqual([
      {
        prefCode: 2,
        prefName: "青森県",
        populations: [],
      },
    ]);
  });
  test("リセットすると、空の配列になる", () => {
    const { result } = renderHookResult;

    act(() => {
      result.current.addPrefecture(mockedHokkaido);
      result.current.addPrefecture({
        prefCode: 2,
        prefName: "青森県",
        populations: [],
      });
    });

    act(() => {
      result.current.resetPrefectures();
    });

    expect(result.current.prefecturesValue).toEqual([]);
  });

  test("既に`北海道`のデータが存在する状態の時に`北海道`のデータの挿入をした場合、配列に追加されずに該当するデータが更新される", () => {
    const { result } = renderHookResult;

    act(() => {
      result.current.addPrefecture({
        prefName: "北海道",
        prefCode: 1,
        populations: [],
      });
    });

    act(() => {
      result.current.addPrefecture(mockedHokkaido);
    });

    expect(result.current.prefecturesValue).toEqual([mockedHokkaido]);
  });
});
