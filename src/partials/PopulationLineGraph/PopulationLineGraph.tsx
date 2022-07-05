import { useMemo } from "react";
import styled from "styled-components";
import { Graph } from "../../components/Graph";
import { Legend } from "../../components/Legend";
import { GRAPH_LINE_COLORS } from "../../constants";
import { useDatasets } from "../../hooks/useDatasets";

export const PopulationLineGraph: React.FC = () => {
  const { state } = useDatasets();
  const datasets = useMemo(
    () =>
      state.map((data, i) => {
        return { ...data, borderColor: GRAPH_LINE_COLORS[i] };
      }),
    [state]
  );

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
