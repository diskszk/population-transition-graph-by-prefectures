import { ComponentStoryObj, Meta } from "@storybook/react";
import { ComponentProps } from "react";
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
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
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
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          label: "茨城県",
          data: [2143551, 2558007, 2845382, 2985676, 2969770, 2844791],
          borderColor: "rgb(255, 159, 64)",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
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
