import styled from "styled-components";
import { StyledContainer } from "../commonStyles";

export const LoadingModal: React.FC = () => {
  return (
    <StyledContainer>
      <StyledLoadingAnimation></StyledLoadingAnimation>
      <p>Loading...</p>
    </StyledContainer>
  );
};

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
