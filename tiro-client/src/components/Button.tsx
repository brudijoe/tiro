import React from "react";

interface Props {
  styling: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const Button = ({ styling, onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={styling}>
      {children}
    </button>
  );
};

export default Button;
