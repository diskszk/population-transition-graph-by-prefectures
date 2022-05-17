import styled from "styled-components";
import { GRAPH_LINE_COLORS } from "../../constants";

type Props = {
  value: string;
};
export const Title: React.FC<Props> = ({ value }) => {
  return (
    <StyledHeader>
      <StyledH1>{value}</StyledH1>
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
