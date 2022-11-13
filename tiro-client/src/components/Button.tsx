import React from "react";

interface Props {
  bg: string;
  bgHover: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const Button = ({ bg, bgHover, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`pl-2 pr-2 text-base ${bg} border-black border-2 rounded-md ${bgHover} focus:outline-none focus:ring-2 focus:ring-gray-400`}
    >
      {children}
    </button>
  );
};

export default Button;
