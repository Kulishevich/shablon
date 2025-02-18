import { Ref, SVGProps, forwardRef, memo } from "react";

const BurgerIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="28"
    height="18"
    ref={ref}
    {...props}
    viewBox="0 0 28 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1H27"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M1 9H22"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M1 17H17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
const ForwardRef = forwardRef(BurgerIcon);
const Memo = memo(ForwardRef);

export default Memo;
