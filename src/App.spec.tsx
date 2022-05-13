import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import App from "./App";

describe("App.tsx", () => {
  test("Hello vite-react と表示される", () => {
    render(<App />);
    expect(screen.getByText("Hello vite-react")).toBeInTheDocument();
  });
});
