import { Graph } from "../../components/Graph";
import { Legend } from "../../components/Legend";
import { usePrefecturesValue } from "../../contexts/PrefecturesContext";
import { createDatasets } from "../../lib/createDatasets";

export const PopulationLineGraph: React.FC = () => {
  const prefectures = usePrefecturesValue();
  const datasets = createDatasets(prefectures);

  return (
    <div>
      <Graph datasets={datasets} />
      <Legend datasets={datasets} />
    </div>
  );
};
