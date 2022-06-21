import { ComponentProps } from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

type Props = ComponentProps<typeof Header>;

export const Title: ComponentStoryObj<typeof Header> = {
  args: {
    title: "Title",
  } as Props,
};
