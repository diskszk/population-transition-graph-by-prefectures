import { render, screen } from "@testing-library/react";
import { PrefectureCheckboxes } from "./PrefectureCheckboxes";
import { QueryClient, QueryClientProvider } from "react-query";

describe("PrefectureCheckboxes", () => {
  const client = new QueryClient();

  test("各都道府県名とチェックボックスを表示する", async () => {
    render(
      <QueryClientProvider client={client}>
        <PrefectureCheckboxes />
      </QueryClientProvider>
    );
    expect(await screen.findByText("北海道"));
    expect(await screen.findAllByRole("checkbox"));
    expect(await screen.findAllByRole("checkbox")).toHaveLength(47);
    client.clear();
  });
});
