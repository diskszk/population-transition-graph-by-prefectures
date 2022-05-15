import axios from "axios";
import { API_KEY } from "../../constants";
import { Prefecture } from "../../types";

type Response = {
  message: string | null;
  result: Prefecture[];
};

export async function fetchPrefectures(): Promise<Prefecture[]> {
  const uri = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

  const res = await axios.get<Response>(uri, {
    headers: { "X-API-KEY": API_KEY },
  });

  return res.data.result;
}
