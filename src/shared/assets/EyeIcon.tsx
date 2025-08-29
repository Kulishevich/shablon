import { Ref, SVGProps, forwardRef, memo } from 'react';

const EyeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    ref={ref}
    {...props}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path
        d="M13.75 11C13.75 12.5188 12.5188 13.75 11 13.75C9.48124 13.75 8.25 12.5188 8.25 11C8.25 9.48117 9.48124 8.25 11 8.25C12.5188 8.25 13.75 9.48117 13.75 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.997 4.58301C6.89251 4.58301 3.41809 7.28065 2.25 10.9997C3.41807 14.7187 6.89251 17.4163 10.997 17.4163C15.1015 17.4163 18.5759 14.7187 19.7441 10.9997C18.5759 7.28068 15.1015 4.58301 10.997 4.58301Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(EyeIcon);
const Memo = memo(ForwardRef);

export default Memo;
