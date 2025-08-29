import { Ref, SVGProps, forwardRef, memo } from 'react';

const UserProfileIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="64"
    height="64"
    ref={ref}
    {...props}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.9948 26.6668C37.8858 26.6668 42.6615 21.8912 42.6615 16.0002C42.6615 10.1091 37.8858 5.3335 31.9948 5.3335C26.1038 5.3335 21.3281 10.1091 21.3281 16.0002C21.3281 21.8912 26.1038 26.6668 31.9948 26.6668Z"
      stroke="#25338C"
      strokeWidth="3"
    />
    <path
      d="M31.9948 34.6665C38.9503 34.6665 45.0172 36.8404 48.2287 40.0638M41.5524 54.4974C38.7569 55.4516 35.4879 55.9998 31.9948 55.9998C21.6855 55.9998 13.3281 51.2241 13.3281 45.3332C13.3281 41.7084 16.4922 38.506 21.3281 36.5785"
      stroke="#25338C"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M48 49.3334C49.0413 50.3747 49.6253 50.9587 50.6667 52L56 45.3334"
      stroke="#25338C"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(UserProfileIcon);
const Memo = memo(ForwardRef);

export default Memo;
