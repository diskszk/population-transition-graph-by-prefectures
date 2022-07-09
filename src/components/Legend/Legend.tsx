import { useCallback } from "react";
import styled from "styled-components";
import { COLOR_CODE } from "../../constants";
import { useDatasets } from "../../hooks/useDatasets";
import { Dataset } from "../../types";

type Props = {
  datasets: Dataset[];
  handleClick: (prefCode: number) => void;
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
const StyledBar = styled.div<{ color?: string }>`
  width: 40px;
  height: 4px;
  background-color: ${(props) => props.color || COLOR_CODE.spaceGray};
  margin-right: 8px;
`;
const StyledParagraph = styled.p<{ isHidden: boolean }>`
  text-decoration-line: ${(props) =>
    props.isHidden ? "line-through" : "none"};
`;

export const Component: React.FC<Props> = ({ datasets, handleClick }) => (
  <StyledUl data-testid="legend">
    {datasets.map((dataset, key) => (
      <StyledLi key={key} onClick={() => handleClick(dataset.prefCode)}>
        <StyledBar color={dataset.borderColor} />
        <StyledParagraph isHidden={dataset.hidden}>
          {dataset.label}
        </StyledParagraph>
      </StyledLi>
    ))}
  </StyledUl>
);

export const Container: React.FC<ContainerProps> = (props) => {
  const { toggleHidden } = useDatasets();

  const handleClick = useCallback(
    (prefCode: number) => {
      toggleHidden(prefCode);
    },
    [toggleHidden]
  );

  return <Component datasets={props.datasets} handleClick={handleClick} />;
};
