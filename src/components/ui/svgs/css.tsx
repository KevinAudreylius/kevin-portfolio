import type { SVGProps } from "react";

const CSS = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      fill="#1572B6"
      d="M2 2h20l-1.82 20L12 24l-8.18-2L2 2Z"
    />
    <path
      fill="#33A9DC"
      d="M12 4v18.3l6.64-1.63L20.1 4H12Z"
    />
    <path
      fill="#fff"
      d="M6 6h12.2l-.2 2.2H8.2l.2 2.2h9.4l-.75 7.9L12 19.55l-5.05-1.25-.35-3.3h2.2l.2 1.5 3 .75 3-.75.3-3.9H6.6L6 6Z"
    />
  </svg>
);

export { CSS };
