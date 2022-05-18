import { ComponentMeta } from "@storybook/react";
import { Modal } from "../../../partials/Modal";
import { ErrorModal } from "./ErrorModal";

export default {
  title: "Components/Modal/Error",
  component: ErrorModal,
} as ComponentMeta<typeof ErrorModal>;

export const View = () => (
  <Modal>
    <ErrorModal error={new Error("error")} onClick={() => null} />
  </Modal>
);
