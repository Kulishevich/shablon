import { Ref, SVGProps, forwardRef, memo } from "react";

const CheckedIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="18"
    height="13"
    ref={ref}
    {...props}
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 1L6 12L1 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckedIcon);
const Memo = memo(ForwardRef);

export default Memo;
