import { ComponentProps } from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { mockedHokkaido } from "../../mocks/mockResponses";
import { Prefecture } from "../../types";
import { Component } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Component,
} as ComponentMeta<typeof Component>;

type Props = ComponentProps<typeof Component>;

export const 北海道 = () => {
  const props: Props = {
    checkedOn: () => void 0,
    checkedOff: () => void 0,
    prefecture: mockedHokkaido,
  };

  return <Component {...props} />;
};

// 別の書き方
const okinawa: Prefecture = {
  prefCode: 47,
  prefName: "沖縄県",
  populations: [],
};

export const 沖縄県: ComponentStoryObj<typeof Component> = {
  args: {
    checkedOn: () => void 0,
    checkedOff: () => void 0,
    prefecture: okinawa,
  } as Props,
};
