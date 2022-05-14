import axios from "axios";
import { Prefecture } from "../../types";

type Response = {
  message: string | null;
  result: Prefecture[];
};

export async function fetchPrefectures(): Promise<Prefecture[]> {
  const uri = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  const apiKey: string = process.env.VITE_API_KEY || "";

  const res = await axios.get<Response>(uri, {
    headers: { "X-API-KEY": apiKey },
  });

  return res.data.result;
}
