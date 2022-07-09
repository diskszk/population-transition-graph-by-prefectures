import styled from "styled-components";
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

const StyledDiv = styled.div`
  height: 400px;

  width: 400px;
  max-width: 100%;
  border-radius: 20%;
  background-color: #fefefe;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Component: React.FC<Props> = ({ restError, message }) => (
  <Modal>
    <StyledContainer>
      <StyledDiv>
        <p>{message}</p>
        <button onClick={restError}>閉じる</button>
      </StyledDiv>
    </StyledContainer>
  </Modal>
);

export const Container: React.FC<ContainerProps> = ({ error, restError }) => {
  return <Component restError={restError} message={error.message} />;
};
