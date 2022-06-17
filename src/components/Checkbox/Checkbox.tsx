// Single File Component の考え方に則った設計
// 参考: https://qiita.com/Takepepe/items/41e3e7a2f612d7eb094a

// import層
import React, { useCallback } from "react";
import styled from "styled-components";
import { usePrefecturesSetValue } from "../../contexts/PrefecturesContext";
import { useFetchPopulationByPrefectureCode } from "../../hooks";
import { Prefecture } from "../../types";

// types層
type ContainerProps = {
  prefecture: Prefecture;
};
type Props = {
  checkboxId: string;
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
} & ContainerProps;

// DOM層: statelessなコンポーネント
export const Component: React.FC<Props> = ({
  checkboxId,
  handleChange,
  prefecture,
}) => (
  <>
    <input
      type={"checkbox"}
      id={checkboxId}
      name={checkboxId}
      onChange={handleChange}
    />
    <label htmlFor={checkboxId}>{prefecture.prefName}</label>
  </>
);

// Style層
export const StyledComponent: React.FC<Props> = styled(Component)`
  > label {
    margin-left: 2px;
  }
`;

// Container層
export const Container: React.FC<ContainerProps> = ({ prefecture }) => {
  const checkboxId = prefecture.prefCode.toString();
  const setPrefectures = usePrefecturesSetValue();

  const { mutate, isLoading, isError, error } =
    useFetchPopulationByPrefectureCode(prefecture);

  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = ev.target;

      if (checked) {
        mutate(prefecture.prefCode);
      } else {
        setPrefectures((prev) =>
          prev.filter(({ prefCode }) => prefCode !== prefecture.prefCode)
        );
      }
    },
    [mutate, prefecture.prefCode, setPrefectures]
  );

  if (isLoading) {
    // 親コンポーネントの<Suspense> に渡りloadingが表示される
    // TODO: なんで動いているのかわからないので理解したい
    throw new Promise(() => null);
  }

  if (isError) {
    throw new Error(String(error));
  }

  return (
    <StyledComponent
      checkboxId={checkboxId}
      handleChange={handleChange}
      prefecture={prefecture}
    />
  );
};
