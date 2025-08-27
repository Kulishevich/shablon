import { Ref, SVGProps, forwardRef, memo } from 'react';

const OrderHistoryIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.875 16.5C7.63439 16.5 8.25 17.1156 8.25 17.875C8.25 18.6344 7.63439 19.25 6.875 19.25C6.11561 19.25 5.5 18.6344 5.5 17.875C5.5 17.1156 6.11561 16.5 6.875 16.5Z"
      stroke="#25338C"
      strokeWidth="1.5"
    />
    <path
      d="M15.125 16.5001C15.8844 16.5001 16.5 17.1157 16.5 17.8751C16.5 18.6345 15.8844 19.2501 15.125 19.2501C14.3656 19.2501 13.75 18.6345 13.75 17.8751C13.75 17.1157 14.3656 16.5001 15.125 16.5001Z"
      stroke="#25338C"
      strokeWidth="1.5"
    />
    <path
      d="M10.082 9.9L11.1297 11L13.7487 8.25"
      stroke="#25338C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.83203 2.75L2.07147 2.83419C3.2646 3.25366 3.86116 3.4634 4.20238 3.96273C4.5436 4.46207 4.5436 5.12532 4.5436 6.45183V8.94667C4.5436 11.6431 4.60157 12.5329 5.39577 13.3707C6.18997 14.2083 7.46822 14.2083 10.0247 14.2083H10.9987M14.8857 14.2083C16.3166 14.2083 17.0321 14.2083 17.5378 13.7962C18.0436 13.3841 18.188 12.6834 18.4769 11.2819L18.935 9.05919C19.2532 7.46505 19.4122 6.66799 19.0053 6.13899C18.5984 5.61 17.208 5.61 15.6634 5.61H10.1036M4.5436 5.61H6.41536"
      stroke="#25338C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const ForwardRef = forwardRef(OrderHistoryIcon);
const Memo = memo(ForwardRef);

export default Memo;
