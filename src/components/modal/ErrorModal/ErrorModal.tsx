import { StyledContainer } from "../commonStyles";

type Props = {
  _error: unknown;
};

export const ErrorModal: React.FC<Props> = ({ _error }) => {
  // TODO: errorを渡すと独自のエラーメッセージを返すhooksを作る
  const customMessage = "何かしらのエラーが発生しました(仮)";

  return (
    <StyledContainer>
      <p>{customMessage}</p>
      <button>閉じる</button>
    </StyledContainer>
  );
};
