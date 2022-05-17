import { render, screen } from "@testing-library/react";
import { Prefecture } from "../../types";
import { Checkbox } from "./Checkbox";

describe("Checkbox.tsx", () => {
  beforeEach(() => {
    const hokkaidou: Prefecture = {
      prefCode: 1,
      prefName: "北海道",
      populations: [],
    };

    render(<Checkbox prefecture={hokkaidou} />);
  });

  test("チェックボックスと都道府県名を表示する", () => {
    expect(screen.getByRole("checkbox"));
    expect(screen.getByText("北海道"));
  });

  test("チェックボックスはデフォルトではチェックが入っていない状態で表示される", () => {
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
});
