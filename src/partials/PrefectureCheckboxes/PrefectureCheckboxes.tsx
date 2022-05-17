import { Checkbox } from "../../components/Checkbox";
import { Prefecture } from "../../types";

type Props = {
  prefectures: Prefecture[];
};

export const PrefectureCheckboxes: React.FC<Props> = ({ prefectures }) => {
  return (
    <ul>
      {prefectures.map((prefecture) => (
        <li key={prefecture.prefCode}>
          <Checkbox prefecture={prefecture} />
        </li>
      ))}
    </ul>
  );
};
