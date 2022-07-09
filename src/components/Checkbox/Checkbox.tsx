// Single File Component の考え方に則った設計
// 参考: https://qiita.com/Takepepe/items/41e3e7a2f612d7eb094a

// import層
import React from "react";
import styled from "styled-components";
import { Prefecture } from "../../types";
import { useHandleCheck } from "./useHandleCheck";

// types層
type ContainerProps = {
  prefecture: Prefecture;
};
type Props = {
  checkedOn: (prefecture: Prefecture) => void;
  checkedOff: (prefCode: number) => void;
} & ContainerProps;

const StyledLabel = styled.label`
  margin-left: 2px;
`;

// DOM層: statelessなコンポーネント
export const Component: React.FC<Props> = ({
  prefecture,
  checkedOn,
  checkedOff,
}) => (
  <div>
    <input
      type={"checkbox"}
      id={`${prefecture.prefCode}`}
      name={`${prefecture.prefCode}`}
      onChange={(ev) => {
        if (ev.target.checked) {
          checkedOn(prefecture);

          return;
        } else {
          checkedOff(prefecture.prefCode);

          return;
        }
      }}
      value={prefecture.prefName}
    />
    <StyledLabel htmlFor={`${prefecture.prefCode}`}>
      {prefecture.prefName}
    </StyledLabel>
  </div>
);

// Container層
export const Container: React.FC<ContainerProps> = ({ prefecture }) => {
  const { checkedOn, checkedOff } = useHandleCheck();

  return (
    <Component
      prefecture={prefecture}
      checkedOn={checkedOn}
      checkedOff={checkedOff}
    />
  );
};
