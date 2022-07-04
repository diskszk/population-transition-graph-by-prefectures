import { useEffect } from "react";
import styled from "styled-components";
import { Graph } from "../../components/Graph";
import { Legend } from "../../components/Legend";
import { UPDATE_DATASET, useDatasets } from "../../hooks/useDatasets";
import { usePrefectureContext } from "../../hooks/usePrefectureContext";
import { convertToDatasetFromPrefectures } from "../../lib/convertToDatasetFromPrefectures";

export const PopulationLineGraph: React.FC = () => {
  const { prefecturesValue } = usePrefectureContext();

  const { datasets, dispatch } = useDatasets();

  // prefectures contextの更新を検知してdatasetを更新する
  useEffect(() => {
    dispatch({
      type: UPDATE_DATASET,
      payload: convertToDatasetFromPrefectures(prefecturesValue),
    });
  }, [dispatch, prefecturesValue]);

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
