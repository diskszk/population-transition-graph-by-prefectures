import { Line } from "react-chartjs-2";
import { Dataset } from "../../types";
import { options, labels } from "./graphConfig";

type Props = {
  data: {
    labels: string[];
    datasets: Dataset[];
  };
};

type ContainerProps = {
  datasets: Dataset[];
};

export const Component: React.FC<Props> = ({ data }) => (
  <Line options={options} data={data} />
);

export const Container: React.FC<ContainerProps> = ({ datasets }) => {
  const data = {
    labels,
    datasets,
  };

  return <Component data={data} />;
};
