// Single File Component の考え方に則った設計
// 参考: https://qiita.com/Takepepe/items/41e3e7a2f612d7eb094a

// import層
import React from "react";
import styled from "styled-components";
import { Prefecture } from "../../types";
import { useInputCheck } from "./useInputCheck";

// types層
type ContainerProps = {
  prefecture: Prefecture;
};
type Props = {
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
} & ContainerProps;

const StyledLabel = styled.label`
  margin-left: 2px;
`;

// DOM層: statelessなコンポーネント
export const Component: React.FC<Props> = ({ handleChange, prefecture }) => {
  const checkboxId = prefecture.prefCode.toString();

  return (
    <div>
      <input
        type={"checkbox"}
        id={checkboxId}
        name={checkboxId}
        onChange={handleChange}
        value={prefecture.prefName}
      />
      <StyledLabel htmlFor={checkboxId}>{prefecture.prefName}</StyledLabel>
    </div>
  );
};

// Container層
export const Container: React.FC<ContainerProps> = ({ prefecture }) => {
  const { handleChange, isLoading, isError, error } = useInputCheck(prefecture);

  if (isLoading) {
    // 親コンポーネントの<Suspense> に渡りloadingが表示される
    // TODO: なんで動いているのかわからないので理解したい
    throw new Promise(() => null);
  }

  if (isError) {
    throw new Error(String(error));
  }

  return <Component handleChange={handleChange} prefecture={prefecture} />;
};
