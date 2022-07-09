import { useQuery } from "react-query";
import styled from "styled-components";
import { Checkbox } from "../../components/Checkbox";
import { fetchPrefectures } from "../../lib/fetchPrefectures";
import { Prefecture } from "../../types";

export const PrefectureCheckboxes: React.FC = () => {
  const { data, isError, error } = useQuery<Prefecture[]>(
    "fetchPrefectures",
    fetchPrefectures
  );

  if (isError) {
    throw error;
  }
  return (
    <div>
      <StyledH2>都道府県</StyledH2>
      <StyledUl>
        {data &&
          data.map((prefecture) => (
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

const StyledH2 = styled.h2`
  padding: 32px 16px 0 8px;
`;
