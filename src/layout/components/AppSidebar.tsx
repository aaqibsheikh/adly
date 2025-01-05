import { Link, useLocation } from 'react-router-dom';
import IconSvg, { Icons } from 'src/components/common/ui/IconSvg';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Importing the default tooltip styles

function AppSidebar() {
  const location = useLocation();

  const links: { path: string; icon: Icons; label: string }[] = [
    { path: '/', icon: 'homeM', label: 'Home' },
    { path: '/mint', icon: 'mint2M', label: 'Earn' },
    { path: '', icon: 'ticketM', label: 'Soon' /*'Play'*/ },
    { path: '', icon: 'createM', label: 'Soon' /*'Create'*/ },
    { path: '', icon: 'fileM', label: 'Soon' /*'Apply'*/ },
    { path: '', /*'/multiversx/leaderboard',*/ icon: 'rocketM', label: 'Soon' /*'Leaderboard'*/ },
    { path: '', icon: 'burnM', label: 'Soon' },
  ];

  return (
    <div className="h-full bg-grayscale-800 w-[90px] py-[123px] px-[33px] space-y-6">
      {links.map(({ path, icon, label }, index) => (
        <div key={index}>
          {path ? (
            <Link to={path} data-tooltip-id={`tooltip-${index}`}>
              <IconSvg
                icon={icon}
                className={`text-grayscale-500 hover:text-brand-primary-light ${
                  (
                    path && path === '/'
                      ? location.pathname === path
                      : path && location.pathname.includes(path)
                  )
                    ? '!text-brand-primary-light'
                    : ''
                }`}
              />
            </Link>
          ) : (
            <div data-tooltip-id={`tooltip-${index}`}>
              <IconSvg icon={icon} className="text-grayscale-500 hover:text-brand-primary-light" />
            </div>
          )}

          <Tooltip
            id={`tooltip-${index}`}
            content={label}
            place="right"
            offset={22}
            className={`!py-1.5 !px-3 !text-sm rounded !bg-grayscale-700 !z-50 ${
              label === 'Soon' ? '!text-brand-secondary' : '!text-grayscale-200'
            }`}
          />
        </div>
      ))}
    </div>
  );
} 

export default AppSidebar;
