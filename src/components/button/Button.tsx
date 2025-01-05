import React from 'react';

type ButtonType = 'primary' | 'secondary' | 'ghost' | 'disabled';
type ButtonSize = 'xs' | 'sm' | 'm';

interface Props {
  type: ButtonType;
  size: ButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
  classNames?: string;
  disabled?: boolean;
}

const Button = ({ type, size, onClick, children, classNames, disabled = false }: Props) => {
  const buttonStyles = {
    primary: 'bg-brand-primary text-grayscale-900',
    secondary: 'bg-brand-primary-light text-grayscale-900',
    ghost: 'bg-grayscale-700 text-brand-primary-light',
    disabled: 'bg-grayscale-700 text-grayscale-600 cursor-not-allowed',
  };

  const sizeStyles = {
    xs: 'h-10 text-sm min-w-[84px] px-2.5',
    sm: 'h-[42px] text-base min-w-[104px] px-2.5',
    m: 'h-12 text-lg min-w-[121px] px-2.5',
  };


  const combinedStyles = `${buttonStyles[type]} ${sizeStyles[size]} flex items-center justify-center font-semibold relative mx-[11px] w-fit ${classNames}`;

  // Dynamic height for SVG and scaling factor for path
  const svgHeight = size === 'xs' ? 40 : size === 'sm' ? 42 : 48;
  const scaleY = svgHeight / 40; // 40 is the original height of the path
  const svgColor = type === 'primary' ? '#B73FFF' : type === 'secondary' ? '#EEE0F9' : '#3E3E3E';

  return (
    <button
      className={combinedStyles}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <svg
        width="11"
        height={svgHeight}
        viewBox={`0 0 11 ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-10px]"
      >
        <path
          d={`M7.33333 ${40 * scaleY}V${36.7568 * scaleY}H3.66667V${33.5135 * scaleY}H0V${
            6.48649 * scaleY
          }H3.66667V${3.24324 * scaleY}H7.33333V0H11V${40 * scaleY}H7.33333Z`}
          fill={svgColor}
        />
      </svg>

      <span className={`leading-[1.25rem] flex items-center gap-2.5`}>{children}</span>

      <svg
        width="11"
        height={svgHeight}
        viewBox={`0 0 11 ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-[-10px]"
      >
        <path
          d={`M3.66667 ${40 * scaleY}V${36.7568 * scaleY}H7.33333V${33.5135 * scaleY}H11V${
            6.48649 * scaleY
          }H7.33333V${3.24324 * scaleY}H3.66667V0H0V${40 * scaleY}H3.66667Z`}
          fill={svgColor}
        />
      </svg>
    </button>
  );
};

export default Button;
