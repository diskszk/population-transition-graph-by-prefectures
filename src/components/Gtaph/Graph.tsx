import { Line } from "react-chartjs-2";
import { usePrefecturesValue } from "../../contexts/PrefecturesContext";
import { createDatasets } from "../../lib/createDatasets";
import { Dataset } from "../../types";
import { options, labels } from "./graphConfig";

type Props = {
  data: {
    labels: string[];
    datasets: Dataset[];
  };
};

export const Component: React.FC<Props> = ({ data }) => (
  <Line options={options} data={data} />
);

export const Container: React.FC = () => {
  const prefectures = usePrefecturesValue();
  const datasets = createDatasets(prefectures);

  const data = {
    labels,
    datasets,
  };

  return <Component data={data} />;
};
