import styled from "styled-components";
import { Checkbox } from "../../components/Checkbox";
import { Prefecture } from "../../types";

type Props = {
  prefectures: Prefecture[];
};

export const PrefectureCheckboxes: React.FC<Props> = ({ prefectures }) => {
  return (
    <div>
      <h2>都道府県</h2>
      <StyledUl>
        {prefectures.map((prefecture) => (
          <StyledLi key={prefecture.prefCode}>
            <Checkbox prefecture={prefecture} />
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 32px 8px;
`;

const StyledLi = styled.li`
  padding: 4px;
`;
