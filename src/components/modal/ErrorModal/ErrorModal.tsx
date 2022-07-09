import React, { RefObject, useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledContainer } from "../common/commonStyles";
import { Modal } from "../common/Modal";

type Props = {
  message: string;
  restError: () => void;
  currentRef?:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;
  handleKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
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

export const Component: React.FC<Props> = ({
  restError,
  message,
  currentRef,
  handleKeyDown,
}) => (
  <Modal>
    <StyledContainer tabIndex={0} ref={currentRef} onKeyDown={handleKeyDown}>
      <StyledDiv>
        <p>{message}</p>
        <button onClick={restError}>閉じる</button>
      </StyledDiv>
    </StyledContainer>
  </Modal>
);

export const Container: React.FC<ContainerProps> = ({ error, restError }) => {
  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    currentRef.current?.focus();
  }, []);

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = ev;

    if (key === "Escape") {
      restError();
    }
  };

  return (
    <Component
      message={error.message}
      restError={restError}
      currentRef={currentRef}
      handleKeyDown={handleKeyDown}
    />
  );
};
