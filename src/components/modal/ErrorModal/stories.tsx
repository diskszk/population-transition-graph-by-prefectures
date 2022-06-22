import { ComponentProps } from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Component } from "./ErrorModal";

export default {
  title: "Components/Modal/Error",
  component: Component,
} as ComponentMeta<typeof Component>;

type Props = ComponentProps<typeof Component>;

export const ErrorModal: ComponentStoryObj<typeof Component> = {
  args: { message: "エラーが発生しました", onClick: () => void 0 } as Props,
};
