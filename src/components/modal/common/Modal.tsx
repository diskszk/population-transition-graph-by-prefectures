import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({ children }) => {
  return <StyledOverlay>{children}</StyledOverlay>;
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(201, 203, 207, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
`;
