import { Ref, SVGProps, forwardRef, memo } from 'react';

const UserLogOutIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    ref={ref}
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33594 10.0006H9.79427M6.66867 6.66724L3.33756 10.0005L6.66867 13.3339M8.1276 4.16398V3.54224C8.1276 2.85188 8.68727 2.29224 9.3776 2.29224H14.3776C15.0679 2.29224 15.6276 2.85188 15.6276 3.54224V16.4589C15.6276 17.1492 15.0679 17.7089 14.3776 17.7089H9.3776C8.68727 17.7089 8.1276 17.1492 8.1276 16.4589V15.8339"
      stroke="#DE0C2F"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(UserLogOutIcon);
const Memo = memo(ForwardRef);

export default Memo;
