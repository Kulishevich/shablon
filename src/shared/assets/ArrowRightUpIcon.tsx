import { Ref, SVGProps, forwardRef, memo } from "react";

const ArrowRightUpIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="20"
    height="21"
    ref={ref}
    {...props}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 15.5L15 5.5M15 5.5H7.5M15 5.5V13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRightUpIcon);
const Memo = memo(ForwardRef);

export default Memo;
