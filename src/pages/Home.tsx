import { createContext, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Header } from "../components/Header";
import { fetchPrefectures } from "../lib/fetchPrefectures";
import { PopulationLineGraph } from "../partials/PopulationLineGraph";
import { PrefectureCheckboxes } from "../partials/PrefectureCheckboxes";
import { Prefecture } from "../types";

export const PrefecturesContext = createContext<Prefecture[]>([]);
export const SetPrefecturesContext = createContext<
  React.Dispatch<React.SetStateAction<Prefecture[]>>
>(() => undefined);

export const Home: React.FC = () => {
  const { data } = useQuery("fetchPrefectures", fetchPrefectures);

  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  return (
    <>
      <PrefecturesContext.Provider value={prefectures}>
        <SetPrefecturesContext.Provider value={setPrefectures}>
          <Header title="都道府県別の総人口推移グラフ" />
          <StyledWrapper>
            {data && <PrefectureCheckboxes prefectures={data} />}
            <PopulationLineGraph prefectures={prefectures} />
          </StyledWrapper>
        </SetPrefecturesContext.Provider>
      </PrefecturesContext.Provider>
    </>
  );
};

const StyledWrapper = styled.div`
  @media (min-width: 1020px) {
    margin: 0 20%;
  }
`;
