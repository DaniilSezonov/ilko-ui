import React, { FC } from 'react';
import { DefaultButton } from '../buttons/default';
import classNames from 'classnames';

interface MainMenuProps {
  className?: string;
}

export const MainMenu: FC<MainMenuProps> = ({ className }) => {
  return (
    <div className={classNames(
        "col-start-1 row-start-2 row-end-6 flex flex-col gap-2 from-secondary to-primary bg-gradient-to-t px-2 pt-1",
        className,
      )}
    >
      <DefaultButton className="basis-[65px] hover:translate-x-1 hover:border-r-0 hover:border-l transition-transform">Button 1</DefaultButton>
      <DefaultButton className="basis-[65px] hover:translate-x-1 hover:border-r-0 hover:border-l transition-transform">Button 2</DefaultButton>
      <DefaultButton className="basis-[65px] hover:translate-x-1 hover:border-r-0 hover:border-l transition-transform">Button 3</DefaultButton>
      <DefaultButton className="basis-[65px] hover:translate-x-1 hover:border-r-0 hover:border-l transition-transform">Button 4</DefaultButton>
    </div>
  );
};
