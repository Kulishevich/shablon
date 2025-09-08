import { Ref, SVGProps, forwardRef, memo } from 'react';

const EyeCloseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g opacity="0.5">
      <path
        d="M2.75073 2.75L19.2507 19.25M9.02465 9.0875C8.54557 9.58247 8.25073 10.2568 8.25073 11C8.25073 12.5188 9.48198 13.75 11.0007 13.75C11.7547 13.75 12.4378 13.4466 12.9345 12.9553M5.95906 6.09322C4.21804 7.24198 2.89192 8.96861 2.25391 11C3.42197 14.719 6.89642 17.4167 11.0009 17.4167C12.8241 17.4167 14.5229 16.8845 15.9505 15.9669M10.084 4.62861C10.3856 4.59867 10.6915 4.58333 11.0009 4.58333C15.1055 4.58333 18.5799 7.281 19.7479 11C19.4906 11.8195 19.1212 12.5893 18.6578 13.2917"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(EyeCloseIcon);
const Memo = memo(ForwardRef);

export default Memo;
