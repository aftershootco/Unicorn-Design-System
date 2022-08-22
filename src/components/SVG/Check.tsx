import React from "react";

interface SVGProps {
  className?: string;
}

const Check: React.FC<SVGProps> = ({ className }: SVGProps) => {
  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L4.125 8L1 4.81818"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
