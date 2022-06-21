import styled from "styled-components";
import { StyledContainer } from "../common/commonStyles";
import { Modal } from "../common/Modal";

const StyledLoadingAnimation = styled.span`
  border: 12px solid #fafafa;
  border-radius: 50%;
  border-top: 12px solid #3498db;
  width: 100px;
  height: 100px;
  animation: spin 3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Component: React.FC = () => (
  <Modal>
    <StyledContainer>
      <StyledLoadingAnimation></StyledLoadingAnimation>
      <p>Loading...</p>
    </StyledContainer>
  </Modal>
);
