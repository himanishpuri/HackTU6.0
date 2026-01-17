import React from "react";

interface SeparatorProps {
  height?: string;
  width?: string;
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  height = "20px",
  width = "100%",
  className = "",
}) => {
  return <div className={`h-[${height}] w-[${width}] ${className}`} />;
};

export default Separator;
