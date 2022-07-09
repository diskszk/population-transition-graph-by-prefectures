import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Component } from "./LoadingModal";

export default {
  title: "Components/Modal/Loading",
  component: Component,
} as ComponentMeta<typeof Component>;

export const LoadingModal: ComponentStoryObj<typeof Component> = {
  args: {},
};
