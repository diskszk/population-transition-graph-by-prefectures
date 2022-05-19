import { useQuery } from "react-query";
import styled from "styled-components";
import { Header } from "../components/Header";
import { PrefecturesProvider } from "../contexts/PrefecturesContext";
import { fetchPrefectures } from "../lib/fetchPrefectures";
import { PopulationLineGraph } from "../partials/PopulationLineGraph";
import { PrefectureCheckboxes } from "../partials/PrefectureCheckboxes";

export const Home: React.FC = () => {
  const { data } = useQuery("fetchPrefectures", fetchPrefectures);

  return (
    <>
      <PrefecturesProvider>
        <Header title="都道府県別の総人口推移グラフ" />
        <StyledWrapper>
          {data && <PrefectureCheckboxes prefectures={data} />}
          <PopulationLineGraph />
        </StyledWrapper>
      </PrefecturesProvider>
    </>
  );
};

const StyledWrapper = styled.div`
  @media (min-width: 1020px) {
    margin: 0 20%;
  }
`;
