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
  const { data } = await axios.get<Response>(`${BASE_URL}${prefCode}`, {
    headers: { "X-API-KEY": API_KEY },
  });

  return data.result.data.map((data) => data.data).flat(1);
}
