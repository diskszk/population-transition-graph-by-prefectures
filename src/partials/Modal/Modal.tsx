import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {/* TODO: CSSを書く */}
      {children}
    </div>
  );
};
