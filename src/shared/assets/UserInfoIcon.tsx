import { Ref, SVGProps, forwardRef, memo } from 'react';

const UserInfoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    ref={ref}
    {...props}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9987 9.16671C13.0237 9.16671 14.6654 7.52508 14.6654 5.50004C14.6654 3.475 13.0237 1.83337 10.9987 1.83337C8.97365 1.83337 7.33203 3.475 7.33203 5.50004C7.33203 7.52508 8.97365 9.16671 10.9987 9.16671Z"
      stroke="#25338C"
      strokeWidth="1.5"
    />
    <path
      d="M10.9987 11.9166C13.3896 11.9166 15.4751 12.6639 16.5791 13.772M14.2841 18.7335C13.3232 19.0615 12.1994 19.25 10.9987 19.25C7.45487 19.25 4.58203 17.6083 4.58203 15.5833C4.58203 14.3373 5.66967 13.2364 7.33203 12.5739"
      stroke="#25338C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16.5 16.9584C16.858 17.3163 17.0587 17.5171 17.4167 17.875L19.25 15.5834"
      stroke="#25338C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(UserInfoIcon);
const Memo = memo(ForwardRef);

export default Memo;
