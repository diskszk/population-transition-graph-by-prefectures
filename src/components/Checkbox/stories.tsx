import { ComponentMeta } from "@storybook/react";
import { Prefecture } from "../../types";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const 北海道 = () => {
  const hokkaidou: Prefecture = {
    prefCode: 1,
    prefName: "北海道",
    populations: [],
  };

  return <Checkbox prefecture={hokkaidou} />;
};

export const 沖縄県 = () => {
  const okinawa: Prefecture = {
    prefCode: 47,
    prefName: "沖縄県",
    populations: [],
  };

  return <Checkbox prefecture={okinawa} />;
};
