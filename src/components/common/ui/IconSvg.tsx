import { ReactComponent as AppLogo } from 'src/assets/icons/logo.svg';
interface IconSvgProps {
  icon: Icons;
  className?: string;
  [key: string]: any;
}

const icons = Object.freeze({
  appLogo: AppLogo,
});

export type Icons = keyof typeof icons;

const IconSvg = ({ icon, className, ...rest }: IconSvgProps) => {
  const SvgIcon = icons[icon];
if (!SvgIcon) {
  console.error(`Invalid icon: ${icon}`);
  return null; // or return a default icon
}

  return <SvgIcon className={className} {...rest} />;
};

export default IconSvg;
