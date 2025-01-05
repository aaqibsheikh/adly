import IconSvg from 'src/components/common/ui/IconSvg';

function AppFooter() {
  return (
    <div className="h-[76px] bg-grayscale-800 w-full pl-6 lg:pl-[90px] py-[26px] flex items-center gap-4 z-50">
      <div className="flex gap-[17px]">
        <a
          href="https://discord.gg/kzs5jutR"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <IconSvg icon="discordM" className="text-grayscale-400" />
        </a>

        <a
          href="https://x.com/Looty_fi"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <IconSvg icon="twitterM" className="text-grayscale-400" />
        </a>

        <div className="h-6 border-l border-grayscale-400"></div>
      </div>

      <div className="text-[13px] lg:text-sm font-semibold text-grayscale-400">
        © 2024 Looty. All rights reserved.
      </div>
    </div>
  );
}

export default AppFooter;
