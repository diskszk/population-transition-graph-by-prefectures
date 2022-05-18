import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Prefecture } from "../../types";
import { Checkbox } from "./Checkbox";

describe("Checkbox.tsx", () => {
  const client = new QueryClient();

  beforeEach(() => {
    const hokkaidou: Prefecture = {
      prefCode: 1,
      prefName: "北海道",
      populations: [],
    };

    render(
      <QueryClientProvider client={client}>
        <Checkbox prefecture={hokkaidou} />
      </QueryClientProvider>
    );
  });

  afterEach(() => {
    client.clear();
  });

  test("チェックボックスと都道府県名を表示する", () => {
    expect(screen.getByRole("checkbox"));
    expect(screen.getByText("北海道"));
  });

  test("チェックボックスはデフォルトではチェックが入っていない状態で表示される", () => {
    expect(screen.getByRole("checkbox")).toBeNull;
  });
});
