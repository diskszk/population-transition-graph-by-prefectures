import { Line } from "react-chartjs-2";
import { usePrefecturesValue } from "../../contexts/PrefecturesContext";
import { createDatasets } from "../../lib/createDatasets";
import { labels, options } from "./PopulationLineGraphConfig";

export const PopulationLineGraph: React.FC = () => {
  const prefectures = usePrefecturesValue();
  const datasets = createDatasets(prefectures);

  const data = {
    labels,
    datasets,
  };

  return <Line options={options} data={data} />;
};
