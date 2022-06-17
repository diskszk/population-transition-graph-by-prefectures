import { cleanup, render, screen } from "@testing-library/react";
import { mockedHokkaido } from "../../mocks/mockResponses";
import { StyledComponent as Component } from "./Checkbox";

describe("Checkbox.tsx", () => {
  beforeEach(() => {
    render(
      <Component handleChange={() => void 0} prefecture={mockedHokkaido} />
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("チェックボックスと都道府県名を表示する", () => {
    expect(screen.getByRole("checkbox"));
    expect(screen.getByText("北海道"));
  });

  test("チェックボックスはデフォルトではチェックが入っていない状態で表示される", () => {
    expect(screen.getByRole("checkbox")).toBeNull;
  });
});
