import { Ref, SVGProps, forwardRef, memo } from 'react';

const RepeatIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2.98438 4.30005H14.5177C15.9011 4.30005 17.0177 5.41672 17.0177 6.80005V9.56675"
      stroke="white"
      strokeWidth="1.6"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.61771 1.66663L2.98438 4.29993L5.61771 6.9333"
      stroke="white"
      strokeWidth="1.6"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.0177 15.6996H5.48437C4.10104 15.6996 2.98438 14.583 2.98438 13.1996V10.433"
      stroke="white"
      strokeWidth="1.6"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.3828 18.3339L17.0161 15.7006L14.3828 13.0673"
      stroke="white"
      strokeWidth="1.6"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(RepeatIcon);
const Memo = memo(ForwardRef);

export default Memo;
