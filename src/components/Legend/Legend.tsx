import styled from "styled-components";
import { Dataset } from "../../types";

type Props = {
  datasets: Dataset[];
};

type ContainerProps = {
  datasets: Dataset[];
};

const StyledUl = styled.ul`
  @media (min-width: 1020px) {
    min-width: 30%;
    text-align: center;
    padding-bottom: 80px;
    margin-left: 0;
  }

  margin-left: 32px;
`;

const StyledLi = styled.li`
  display: flex;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;
const StyledBar = styled.div<{ color: string }>`
  width: 40px;
  height: 4px;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

export const Component: React.FC<Props> = ({ datasets }) => (
  <StyledUl data-testid="legend">
    {datasets.map((dataset, key) => (
      <StyledLi key={key} onClick={() => void 0}>
        <StyledBar color={dataset.borderColor} />
        <p>{dataset.label}</p>
      </StyledLi>
    ))}
  </StyledUl>
);

export const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
