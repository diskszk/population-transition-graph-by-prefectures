import { useQuery } from "react-query";
import { ErrorModal } from "../components/modal/ErrorModal";
import { LoadingModal } from "../components/modal/LoadingModal";
import { fetchPrefectures } from "../lib/fetchPrefectures";
import { Modal } from "../partials/Modal";
import { PrefectureCheckboxes } from "../partials/PrefectureCheckboxes";

export const Home: React.FC = () => {
  const { data, isLoading, error } = useQuery(
    "getPrefectures",
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

  return <div>{data && <PrefectureCheckboxes prefectures={data} />}</div>;
};
