import styled from "styled-components";
import { GRAPH_LINE_COLORS } from "../../constants";

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

const { backgroundColor } = GRAPH_LINE_COLORS;

const StyledHeader = styled.header`
  background-color: ${backgroundColor[6]};
  min-height: 64px;
`;
const StyledH1 = styled.h1`
  text-align: center;
  line-height: 64px;
  font-size: 24px;
`;
