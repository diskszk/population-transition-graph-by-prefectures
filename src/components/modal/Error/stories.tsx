import { ComponentMeta } from "@storybook/react";
import { Modal } from "../../../partials/Modal/Modal";
import { Error } from "./Error";

export default {
  title: "Components/Modal/Error",
  component: Error,
} as ComponentMeta<typeof Error>;

export const View = () => (
  <Modal>
    <Error />
  </Modal>
);
