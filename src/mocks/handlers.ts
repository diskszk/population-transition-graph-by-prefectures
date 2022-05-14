import { rest } from "msw";
import { mockedPrefecturesResponse } from "./mockResponses";

const uri = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

export const handlers = [
  rest.get(uri, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedPrefecturesResponse));
  }),
];
