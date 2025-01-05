import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconSvg, { Icons } from 'src/components/common/ui/IconSvg';

const links: { path: string; icon: Icons; label: string }[] = [
  { path: '/', icon: 'homeM', label: 'Home' },
  { path: '/mint', icon: 'mint2M', label: 'Earn' },
];

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();



  const closeSidebar = () => {
    setIsOpen(false); // Close the mobile sidebar menu
  };
  return (
    <div className="flex items-center justify-between px-6 lg:pr-[61px] lg:pl-[67px] pt-[25px] lg:mb-[55px] mb-[43px] w-full">
      {window.innerWidth > 1024 ? (
        <>
          <div className="relative w-[121px] h-[34px] cursor-pointer" onClick={() => navigate('/')}>
            <img
              src="/assets/icons/app-logo.png"
              alt="Go to home"
              className="absolute inset-0 w-full h-full opacity-0 logo-hover"
            />

            <img
              src="/assets/icons/app-logo-hover.png"
              alt="Go to home"
              className="absolute inset-0 w-full h-full logo-default"
            />
          </div>

        </>
      ) : (
        <>
          <div onClick={() => navigate('/')}>
            <img src="/assets/icons/app-logo-mobile.png" alt="App logo" className="w-[32px]" />
          </div>

          <div
            className="p-1 rounded cursor-pointer bg-grayscale-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IconSvg icon="menuM" className="text-brand-primary-light" />
          </div>
        </>
      )}

      {window.innerWidth < 1024 && (
        <div
          className={`fixed top-[80px] left-0 bottom-0 right-0 z-50 transition-all ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="space-y-6 w-full p-5 pb-[29px] bg-grayscale-800">

            <div className="border-t border-grayscale-700"></div>

            <div className="flex flex-col gap-y-6 items-end">
              {links.map(({ path, icon, label }, index) => (
                <div key={index}>
                  {path ? (
                    <Link
                      to={path}
                      data-tooltip-id={`tooltip-${index}`}
                      className="flex items-center gap-x-2.5"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconSvg
                        icon={icon}
                        className={`text-grayscale-500 hover:text-brand-primary-light text-base ${
                          (
                            path && path === '/'
                              ? location.pathname === path
                              : path && location.pathname.includes(path)
                          )
                            ? '!text-brand-primary-light'
                            : ''
                        }`}
                      />

                      <div
                        className={`text-grayscale-500 hover:text-brand-primary-light text-base ${
                          (
                            path && path === '/'
                              ? location.pathname === path
                              : path && location.pathname.includes(path)
                          )
                            ? '!text-brand-primary-light'
                            : ''
                        }`}
                      >
                        {label}
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-x-2.5">
                      <IconSvg icon={icon} className="text-grayscale-500" />

                      <div className="text-brand-secondary">{label}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-grayscale-700"></div>

            <div className="flex gap-x-4 justify-end">
            
            </div>
          </div>

          <div
            className="w-full h-full bg-black bg-opacity-70"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
}

export default AppNavbar;
