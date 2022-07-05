import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockedHokkaido } from "../../mocks/mockResponses";
import { Component } from "./Checkbox";

describe("Checkbox.tsx", () => {
  beforeEach(() => {
    render(
      <Component
        prefecture={mockedHokkaido}
        checkedOn={() => void 0}
        checkedOff={() => void 0}
      />
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

  test("チェックボックスをクリックするとチェックボックスにチェックが入る", async () => {
    await userEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
});
