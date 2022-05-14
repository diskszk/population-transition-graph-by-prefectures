import "@testing-library/jest-dom";
import { server } from "./src/mocks/server";

// mockする際の準備、片付け
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
