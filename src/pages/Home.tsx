import { useQuery } from "react-query";
import styled from "styled-components";
import { ErrorModal } from "../components/modal/ErrorModal";
import { LoadingModal } from "../components/modal/LoadingModal";
import { Header } from "../components/Header";
import { fetchPrefectures } from "../lib/fetchPrefectures";
import { Modal } from "../partials/Modal";
import { PopulationLineGraph } from "../partials/PopulationLineGraph";
import { PrefectureCheckboxes } from "../partials/PrefectureCheckboxes";

export const Home: React.FC = () => {
  const { data, isLoading, error } = useQuery(
    "fetchPrefectures",
    fetchPrefectures
  );

  if (isLoading) {
    return (
      <Modal>
        <LoadingModal />
      </Modal>
    );
  }
  if (error) {
    return (
      <Modal>
        <ErrorModal _error={error} />
      </Modal>
    );
  }

  return (
    <>
      <Header title="都道府県別の総人口推移グラフ" />
      <StyledWrapper>
        {data && <PrefectureCheckboxes prefectures={data} />}
        <PopulationLineGraph prefectures={[]} />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  @media (min-width: 1020px) {
    margin: 0 20%;
  }
`;
