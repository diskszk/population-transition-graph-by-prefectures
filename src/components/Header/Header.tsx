import styled from "styled-components";
import { COLOR_CODE } from "../../constants";

type Props = {
  title: string;
};
export const Header: React.FC<Props> = ({ title }) => {
  return (
    <StyledHeader>
      <StyledH1>{title}</StyledH1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${COLOR_CODE.spaceGray};
  min-height: 64px;
`;
const StyledH1 = styled.h1`
  text-align: center;
  line-height: 64px;
  font-size: 24px;
`;
