import { SVGProps } from "react";

export default function ArrowButton(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 15"
      {...props}
      className={`fill-none ${props.className ?? ""}`}
    >
      <path d="M24 1.00006L12.5 13.0001L0.999998 1.00006" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
