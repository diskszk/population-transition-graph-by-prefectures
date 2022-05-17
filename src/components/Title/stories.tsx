import { ComponentMeta } from "@storybook/react";
import { Title } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

export const View = () => {
  return <Title value="Title" />;
};
