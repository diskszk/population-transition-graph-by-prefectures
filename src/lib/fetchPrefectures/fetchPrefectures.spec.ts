import { fetchPrefectures } from "./fetchPrefectures";

describe("fetchPrefectures", () => {
  test("都道府県一覧を取得する", async () => {
    const result = await fetchPrefectures();

    expect(result[0]).toEqual({ prefCode: 1, prefName: "北海道" });
    expect(result[7].prefName).toBe("茨城県");
  });
});

test("allows user to log in", async () => {
  // Render components, perform requests, receive mocked responses.
});
