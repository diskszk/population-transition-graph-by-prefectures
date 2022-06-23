import { ComponentStoryObj, Meta } from "@storybook/react";
import { ComponentProps } from "react";
import { mockedHokkaido } from "../../mocks/mockResponses";
import { Component } from "./Graph";
import { labels } from "./graphConfig";

const meta: Meta = {
  title: "Components/Graph",
  component: Component,
};

export default meta;

type Props = ComponentProps<typeof Component>;

export const SingleDataGraph: ComponentStoryObj<typeof Component> = {
  args: {
    data: {
      labels: labels,
      datasets: [
        {
          label: "北海道",
          data: [5184287, 5575989, 5643647, 5683062, 5506419, 5216615],
          borderColor: "rgb(255, 0, 0)",
          prefecture: mockedHokkaido,
        },
      ],
    },
  } as Props,
};

export const SomeDataGraph: ComponentStoryObj<typeof Component> = {
  args: {
    data: {
      labels: labels,
      datasets: [
        {
          label: "北海道",
          data: [5184287, 5575989, 5643647, 5683062, 5506419, 5216615],
          borderColor: "rgb(0, 255, 0)",
          prefecture: mockedHokkaido,
        },
        {
          label: "茨城県",
          data: [2143551, 2558007, 2845382, 2985676, 2969770, 2844791],
          borderColor: "rgb(0, 0, 255)",
          prefecture: {
            prefCode: 7,
            prefName: "茨城県",
            populations: [],
          },
        },
      ],
    },
  } as Props,
};

export const NoDataGraph: ComponentStoryObj<typeof Component> = {
  args: {
    data: {
      labels: labels,
      datasets: [],
    },
  },
};
