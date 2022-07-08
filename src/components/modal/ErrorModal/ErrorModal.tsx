import { StyledContainer } from "../common/commonStyles";
import { Modal } from "../common/Modal";

type Props = {
  message: string;
  restError: () => void;
};

type ContainerProps = {
  error: Error;
  restError: () => void;
};

export const Component: React.FC<Props> = ({ restError, message }) => (
  <Modal>
    <StyledContainer>
      <p>{message}</p>
      <button onClick={restError}>閉じる</button>
    </StyledContainer>
  </Modal>
);

export const Container: React.FC<ContainerProps> = ({ error, restError }) => {
  return <Component restError={restError} message={error.message} />;
};
