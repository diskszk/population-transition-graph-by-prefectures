import { ComponentMeta } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const View = () => {
  return <Header title="Title" />;
};
