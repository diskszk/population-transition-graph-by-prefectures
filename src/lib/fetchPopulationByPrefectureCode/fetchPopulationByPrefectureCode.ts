import axios from "axios";
import { API_KEY } from "../../constants";
import { Population } from "../../types";

type Response = {
  message: string | null;
  result: {
    boundaryYear: number;
    data: { labe: string; data: Population[] }[];
  };
};

export async function fetchPopulationByPrefectureCode(
  prefCode: number
): Promise<Population[]> {
  const BASE_URL =
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=";
  const { data, status } = await axios.get<Response>(`${BASE_URL}${prefCode}`, {
    headers: { "X-API-KEY": API_KEY },
  });

  if (status !== 200) {
    throw new Error(status.toString());
  }

  // label: 総人口だけを取り出す
  return data.result.data[0].data;
}
