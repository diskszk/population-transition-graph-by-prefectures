import { StyledContainer } from "../commonStyles";

type Props = {
  error: Error;
  onClick: () => void;
};

export const ErrorModal: React.FC<Props> = ({ error: _error, onClick }) => {
  // TODO: errorを渡すと独自のエラーメッセージを返すhooksを作る
  const customMessage = "何かしらのエラーが発生しました(仮)";

  return (
    <StyledContainer>
      <p>{customMessage}</p>
      <button onClick={onClick}>閉じる</button>
    </StyledContainer>
  );
};
