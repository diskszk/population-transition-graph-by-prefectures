import styled from "styled-components";
import { Header } from "../components/Header";
import { DatasetsProvider } from "../contexts/DatasetsProvider";
import { PopulationLineGraph } from "../partials/PopulationLineGraph";
import { PrefectureCheckboxes } from "../partials/PrefectureCheckboxes";

export const Home: React.FC = () => {
  return (
    <>
      <DatasetsProvider>
        <Header title="都道府県別の総人口推移グラフ" />
        <StyledWrapper>
          <PrefectureCheckboxes />
          <PopulationLineGraph />
        </StyledWrapper>
      </DatasetsProvider>
    </>
  );
};

const StyledWrapper = styled.div`
  @media (min-width: 1020px) {
    margin: 0 20%;
  }
`;
