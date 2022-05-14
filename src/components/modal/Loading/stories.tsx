import { ComponentMeta } from "@storybook/react";
import { Modal } from "../../../partials/Modal/Modal";
import { Loading } from "./Loading";

export default {
  title: "Components/Modal/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

export const View = () => (
  <Modal>
    <Loading />
  </Modal>
);
