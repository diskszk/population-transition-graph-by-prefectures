import { Prefecture } from "../../types";

type Props = {
  prefecture: Prefecture;
};

export const Checkbox: React.FC<Props> = ({ prefecture }) => {
  const checkboxId = prefecture.prefCode.toString();

  return (
    <div>
      <input type={"checkbox"} id={checkboxId} />
      <label htmlFor={checkboxId}>{prefecture.prefName}</label>
    </div>
  );
};
