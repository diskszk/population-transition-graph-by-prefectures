import { ComponentMeta } from "@storybook/react";
import { Modal } from "../../../partials/Modal/Modal";
import { Error as ErrorModal } from "./Error";

export default {
  title: "Components/Modal/Error",
  component: ErrorModal,
} as ComponentMeta<typeof ErrorModal>;

export const View = () => (
  <Modal>
    <ErrorModal _error={new Error("error")} />
  </Modal>
);
