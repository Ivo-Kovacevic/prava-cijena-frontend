import { SVGProps } from "react";

export default function XButton(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
      className={`stroke-current ${props.className ?? ""}`}
    >
      <path d="M1 15L8 8M8 8L15 1M8 8L1 1M8 8L15 15" strokeLinecap="round" />
    </svg>
  );
}
