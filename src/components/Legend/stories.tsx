import { ComponentStoryObj, Meta } from "@storybook/react";
import { ComponentProps } from "react";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { Component } from "./Legend";

const meta: Meta = {
  title: "Components/Legend",
  component: Component,
};

export default meta;

type Props = ComponentProps<typeof Component>;
const props: Props = {
  datasets: [
    {
      label: "北海道",
      data: [],
      borderColor: "#0f0",
      prefCode: 1,
      hidden: false,
    },
    {
      label: "青森県",
      data: [],
      borderColor: "#00F",
      prefCode: 2,
      hidden: false,
    },
  ],
  handleClick: () => void 0,
};

export const LegendItem: ComponentStoryObj<typeof Component> = {
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <Story />
        </>
      );
    },
  ],
  args: props as Props,
};
