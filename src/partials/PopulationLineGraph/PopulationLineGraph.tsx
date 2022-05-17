import { Line } from "react-chartjs-2";
import { createDatasets } from "../../lib/populationLineGraph/createDatasets";
import { Prefecture } from "../../types";
import { labels, options } from "./PopulationLineGraphConfig";

type Props = {
  prefectures: Prefecture[];
};

export const PopulationLineGraph: React.FC<Props> = ({ prefectures }) => {
  const datasets = createDatasets(prefectures);

  const data = {
    labels,
    datasets,
  };

  return <Line options={options} data={data} />;
};
