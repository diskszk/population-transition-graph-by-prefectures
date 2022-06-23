import { useCallback } from "react";
import styled from "styled-components";
import { Dataset } from "../../types";

type Props = {
  datasets: Dataset[];
  handleClick: (dataset: Dataset) => void;
};

type ContainerProps = {
  datasets: Dataset[];
};

const StyledLi = styled.li`
  display: flex;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const StyledBar = styled.div<{ color: string }>`
  width: 40px;
  height: 4px;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

// TODO: prefecture | prefcode を持たせる
export const Component: React.FC<Props> = ({ datasets, handleClick }) => (
  <ul>
    {datasets.map((dataset, key) => (
      <StyledLi key={key} onClick={() => handleClick(dataset)}>
        <StyledBar color={dataset.borderColor} />
        <p>{dataset.label}</p>
      </StyledLi>
    ))}
  </ul>
);

export const Container: React.FC<ContainerProps> = (props) => {
  const handleClick = useCallback((dataset: Dataset) => {
    console.log(dataset, "解除する");
  }, []);

  return <Component {...props} handleClick={handleClick} />;
};
