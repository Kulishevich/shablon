import { Ref, SVGProps, forwardRef, memo } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="12"
    height="15"
    ref={ref}
    {...props}
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.863281 14C0.863281 11.2079 3.0737 8.94445 5.80039 8.94445C8.52708 8.94445 10.7375 11.2079 10.7375 14M8.62159 3.88889C8.62159 5.48438 7.35847 6.77778 5.80039 6.77778C4.24228 6.77778 2.97918 5.48438 2.97918 3.88889C2.97918 2.2934 4.24228 1 5.80039 1C7.35847 1 8.62159 2.2934 8.62159 3.88889Z"
      stroke="#25338C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(UserIcon);
const Memo = memo(ForwardRef);

export default Memo;
