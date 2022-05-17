import { rest } from "msw";
import {
  mockedPopulationsResponse,
  mockedPrefecturesResponse,
} from "./mockResponses";

export const handlers = [
  rest.get(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockedPrefecturesResponse));
    }
  ),
  rest.get(
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const cityCode = query.get("cityCode");
      const prefCode = query.get("prefCode");

      if (cityCode === "-" && prefCode === "1") {
        return res(ctx.status(200), ctx.json(mockedPopulationsResponse));
      }

      return res(ctx.status(200), ctx.json({ prefCode }));
    }
  ),
];
