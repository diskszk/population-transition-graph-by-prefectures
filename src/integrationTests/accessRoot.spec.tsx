import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { fetchPrefectures } from "../lib/fetchPrefectures";
import { Checkbox } from "../components/Checkbox";
import { QueryClient, QueryClientProvider } from "react-query";

describe("ルート画面へのアクセス", () => {
  test("ルートにアクセスした時に、都道府県一覧のチェックボックスを表示する", async () => {
    const QueryWrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    );

    const data = await fetchPrefectures();

    render(
      <QueryWrapper>
        <ul>
          {data.map((d, key) => (
            <Checkbox key={key} prefecture={d} />
          ))}
        </ul>
      </QueryWrapper>
    );

    expect(await screen.findAllByRole("checkbox")).toHaveLength(47);
  });
});
