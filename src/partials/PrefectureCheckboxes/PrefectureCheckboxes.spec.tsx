import { render, screen } from "@testing-library/react";
import { PrefectureCheckboxes } from "./PrefectureCheckboxes";
import { Prefecture } from "../../types";

describe("PrefectureCheckboxes", () => {
  test("各都道府県名とチェックボックスを表示する", () => {
    const prefectures: Prefecture[] = [
      {
        prefCode: 1,
        prefName: "北海道",
        populations: [],
      },
      {
        prefCode: 2,
        prefName: "青森県",
        populations: [],
      },
    ];

    render(<PrefectureCheckboxes prefectures={prefectures} />);
    expect(screen.getByText("北海道"));
    expect(screen.getByText("青森県"));
    expect(screen.getAllByRole("checkbox"));
  });
});
