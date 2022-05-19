import axios from "axios";
import { API_KEY } from "../../constants";
import { Prefecture } from "../../types";

type Response = {
  message: string | null;
  result: Prefecture[];
};

export async function fetchPrefectures(): Promise<Prefecture[]> {
  const BASE_URL = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

  const { data, status } = await axios.get<Response>(BASE_URL, {
    headers: { "X-API-KEY": API_KEY },
  });

  if (status !== 200) {
    throw new Error(status.toString());
  }

  return data.result;
}
