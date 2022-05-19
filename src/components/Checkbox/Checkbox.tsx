import styled from "styled-components";
import { usePrefecturesSetValue } from "../../contexts/PrefecturesContext";
import { useFetchPopulationByPrefectureCode } from "../../hooks";
import { Prefecture } from "../../types";

type Props = {
  prefecture: Prefecture;
};

export const Checkbox: React.FC<Props> = ({ prefecture }) => {
  const { prefCode, prefName } = prefecture;
  const checkboxId = prefCode.toString();
  const setPrefectures = usePrefecturesSetValue();

  const { mutate, isLoading, isError, error } =
    useFetchPopulationByPrefectureCode(prefecture);

  if (isLoading) {
    // 親コンポーネントの<Suspense> に渡りloadingが表示される
    // TODO: なんで動いているのかわからないので理解したい
    throw new Promise(() => null);
  }

  if (isError) {
    throw new Error(String(error));
  }

  return (
    <div>
      <input
        type={"checkbox"}
        id={checkboxId}
        name={checkboxId}
        onChange={(ev) => {
          const { checked } = ev.target;

          if (checked) {
            mutate(prefCode);
          } else {
            setPrefectures((prev) =>
              prev.filter(({ prefCode }) => prefCode !== prefCode)
            );
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
