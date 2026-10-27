import type { SVGProps } from "react";

const Vue = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      fill="#41B883"
      d="M1.5 3h4.8L12 12.5 17.7 3h4.8L12 21 1.5 3Z"
    />
    <path
      fill="#35495E"
      d="M6.3 3h3.2l2.5 4.3L14.5 3h3.2L12 12.5 6.3 3Z"
    />
  </svg>
);

export { Vue };