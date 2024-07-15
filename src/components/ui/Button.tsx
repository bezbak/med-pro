import React from "react";

const Button = ({
  сhildren,
  className,
}: {
  сhildren: React.ReactNode;
  className: string;
}) => {
  return <button className={` ${className}`}>{сhildren}</button>;
};

export default Button;
