import { StyledContainer } from "../common/commonStyles";
import { Modal } from "../common/Modal";

type Props = {
  message: string;
  onClick: () => void;
};

type ContainerProps = {
  error: Error;
  onClick: () => void;
};

export const Component: React.FC<Props> = ({ onClick, message }) => (
  <Modal>
    <StyledContainer>
      <p>{message}</p>
      <button onClick={onClick}>閉じる</button>
    </StyledContainer>
  </Modal>
);

export const Container: React.FC<ContainerProps> = ({
  error: _error,
  onClick,
}) => {
  // TODO: errorを渡すと独自のエラーメッセージを返すhooksを作る
  const customMessage = "何かしらのエラーが発生しました(仮)";

  return <Component onClick={onClick} message={customMessage} />;
};
