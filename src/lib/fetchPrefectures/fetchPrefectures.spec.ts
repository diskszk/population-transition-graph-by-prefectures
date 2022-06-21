import { fetchPrefectures } from "./fetchPrefectures";

describe("fetchPrefectures", () => {
  test("都道府県一覧を取得する", async () => {
    const result = await fetchPrefectures();

    expect(result.length).toBe(47);
    expect(result[0]).toEqual({ prefCode: 1, prefName: "北海道" });
  });
});
