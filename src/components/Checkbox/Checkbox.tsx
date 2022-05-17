import styled from "styled-components";
import { Prefecture } from "../../types";

type Props = {
  prefecture: Prefecture;
};

export const Checkbox: React.FC<Props> = ({ prefecture }) => {
  const checkboxId = prefecture.prefCode.toString();

  return (
    <div>
      <input type={"checkbox"} id={checkboxId} />
      <StyledLabel htmlFor={checkboxId}>{prefecture.prefName}</StyledLabel>
    </div>
  );
};

const StyledLabel = styled.label`
  margin-left: 2px;
`;
