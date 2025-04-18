import { Ref, SVGProps, forwardRef, memo } from 'react';

const CatalogIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="76"
    height="76"
    ref={ref}
    {...props}
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.1033 17.2433L57.855 25.995C59.8217 27.8633 59.8217 31.01 57.855 32.8783L35.0417 55.5933V24.3233L42.1217 17.2433C43.99 15.2767 47.235 15.2767 49.1033 17.2433ZM67 49.7917V62.0833C67 64.8367 64.8367 67 62.0833 67H31.4033L53.5283 44.875H62.0833C64.8367 44.875 67 47.1367 67 49.7917ZM8 55.9867V12.9167C8 10.1633 10.1633 8 12.9167 8H25.2083C27.9617 8 30.125 10.1633 30.125 12.9167V55.9867C30.125 62.0833 25.2083 67 19.1117 67C13.015 67 8 62.0833 8 55.9867ZM19.0133 60.9033C21.7667 60.9033 23.93 58.74 23.93 55.9867C23.93 53.2333 21.7667 51.07 19.0133 51.07C16.26 51.07 14.0967 53.2333 14.0967 55.9867C14.0967 58.74 16.3583 60.9033 19.0133 60.9033Z"
      fill="#25338C"
    />
  </svg>
);
const ForwardRef = forwardRef(CatalogIcon);
const Memo = memo(ForwardRef);

export default Memo;
