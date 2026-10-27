import type { SVGProps } from "react";

const C = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      fill="#A8B9CC"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c2.76 0 5.26-1.12 7.07-2.93l-1.42-1.42A7.97 7.97 0 0 1 12 20a8 8 0 1 1 5.65-13.66l1.42-1.42A9.97 9.97 0 0 0 12 2Z"
    />
    <path
      fill="#fff"
      d="M15.5 8.5A4.95 4.95 0 0 0 12 7a5 5 0 1 0 3.5 8.5l-1.42-1.42A3 3 0 1 1 12 9c.83 0 1.58.34 2.12.88L15.5 8.5Z"
    />
  </svg>
);

export { C };
