import React from "react";

interface Props {
  backgroundColor: String;
  backgroundColorHover: String;
  textColor: String;
  onClick: () => void;
  children?: React.ReactNode;
}

function Button({
  backgroundColor,
  backgroundColorHover,
  textColor,
  onClick,
  children,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`ml-2 mr-2 pl-2 pr-2 pt-1 pb-1 shadow ${textColor} text-base ${backgroundColor} rounded-sm ${backgroundColorHover} focus:outline-none focus:ring-2 focus:ring-gray-400`}
    >
      {children}
    </button>
  );
}

export default Button;
