import { Ref, SVGProps, forwardRef, memo } from "react";

const ShoppingCartIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="32"
    height="32"
    ref={ref}
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.47328 15.2556C7.72401 17.5124 7.84939 18.6407 8.60875 19.3204C9.36811 20 10.5034 20 12.774 20H12.9416H17.9612H19.7698C21.334 20 22.116 20 22.7507 19.6179C23.3854 19.2357 23.7514 18.5445 24.4832 17.1621L27.7742 10.946C28.4818 9.60933 27.5128 8 26.0004 8H12.9416H12.6258C9.84491 8 8.45444 8 7.65945 8.88821C6.86447 9.77641 7.01803 11.1584 7.32513 13.9223L7.47328 15.2556Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M4 4H4.66667C5.55227 4 6.29624 4.66589 6.39404 5.54607L7.40744 14.6667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 26C12 27.1045 11.1046 28 10 28C8.89543 28 8 27.1045 8 26C8 24.8955 8.89543 24 10 24C11.1046 24 12 24.8955 12 26Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M24 26C24 27.1045 23.1045 28 22 28C20.8955 28 20 27.1045 20 26C20 24.8955 20.8955 24 22 24C23.1045 24 24 24.8955 24 26Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingCartIcon);
const Memo = memo(ForwardRef);

export default Memo;
