import styled from "styled-components";
import { Graph } from "../../components/Graph";
import { Legend } from "../../components/Legend";
import { usePrefectureContext } from "../../hooks/usePrefectureContext";
import { createDatasets } from "../../lib/createDatasets";

export const PopulationLineGraph: React.FC = () => {
  const { prefecturesValue } = usePrefectureContext();
  const datasets = createDatasets(prefecturesValue);

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
