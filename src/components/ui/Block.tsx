import React from "react";

const Block = ({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={`rounded-3xl bg-white ${className}`}>{children}</div>;
};

export default Block;
