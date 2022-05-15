import { ComponentMeta } from "@storybook/react";
import { Modal } from "../../../partials/Modal";
import { LoadingModal } from "./LoadingModal";

export default {
  title: "Components/Modal/Loading",
  component: LoadingModal,
} as ComponentMeta<typeof LoadingModal>;

export const View = () => (
  <Modal>
    <LoadingModal />
  </Modal>
);
