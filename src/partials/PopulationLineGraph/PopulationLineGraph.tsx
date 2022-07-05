import styled from "styled-components";
import { Graph } from "../../components/Graph";
import { Legend } from "../../components/Legend";
import { useDatasets } from "../../hooks/useDatasets";

export const PopulationLineGraph: React.FC = () => {
  const { datasets } = useDatasets();

  return (
    <StyledDiv>
      <Graph datasets={datasets} />
      <Legend datasets={datasets} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  @media (min-width: 1020px) {
    display: flex;
    align-items: center;
  }
`;
