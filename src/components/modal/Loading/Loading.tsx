import styled from "styled-components";

export const Loading: React.FC = () => {
  return (
    <StyledContainer>
      <StyledLoadingAnimation></StyledLoadingAnimation>
      <p data-testid="loading-text">Loading...</p>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
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
