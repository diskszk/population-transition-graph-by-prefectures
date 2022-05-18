import styled from "styled-components";
import { useFetchPopulationByPrefectureCode } from "../../hooks";
import { Prefecture } from "../../types";

type Props = {
  prefecture: Prefecture;
};

export const Checkbox: React.FC<Props> = ({ prefecture }) => {
  const { prefCode, prefName } = prefecture;
  const checkboxId = prefCode.toString();

  const { mutate } = useFetchPopulationByPrefectureCode();

  return (
    <div>
      <input
        type={"checkbox"}
        id={checkboxId}
        onChange={(ev) => {
          const { checked } = ev.target;

          if (checked) {
            mutate(prefCode);
          } else {
            console.log(checked);
          }
        }}
      />
      <StyledLabel htmlFor={checkboxId}>{prefName}</StyledLabel>
    </div>
  );
};

const StyledLabel = styled.label`
  margin-left: 2px;
`;
