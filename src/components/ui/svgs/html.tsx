import type { SVGProps } from "react";

const HTML = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      fill="#E34F26"
      d="M2 2h20l-1.82 20L12 24l-8.18-2L2 2Z"
    />
    <path
      fill="#EF652A"
      d="M12 4v18.3l6.64-1.63L20.1 4H12Z"
    />
    <path
      fill="#fff"
      d="M5.8 6h12.4l-.18 2.2H8.3l.18 2.2h9.36l-.75 7.9L12 19.55l-5.09-1.25-.34-3.3h2.2l.18 1.5 3.05.75 3.05-.75.33-3.9H6.4L5.8 6Z"
    />
  </svg>
);

export { HTML };