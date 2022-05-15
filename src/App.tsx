import { fetchPopulationByPrefectureCode } from "./lib/fetchPopulationByPrefectureCode/fetchPopulationByPrefectureCode";

function App() {
  fetchPopulationByPrefectureCode(1);

  return (
    <div>
      <p>Hello vite-react</p>
    </div>
  );
}

export default App;
