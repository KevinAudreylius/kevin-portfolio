import type { SVGProps } from "react";

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      fill="#F24E1E"
      d="M8 2h4v6H8a3 3 0 1 1 0-6Z"
    />
    <path
      fill="#FF7262"
      d="M8 8h4v6H8a3 3 0 1 1 0-6Z"
    />
    <path
      fill="#A259FF"
      d="M8 14h4v5a3 3 0 1 1-3-3v-2h-1Z"
    />
    <path
      fill="#1ABCFE"
      d="M12 2h4a3 3 0 1 1 0 6h-4V2Z"
    />
    <path
      fill="#0ACF83"
      d="M12 8h4a3 3 0 1 1 0 6h-4V8Z"
    />
  </svg>
);

export { Figma };