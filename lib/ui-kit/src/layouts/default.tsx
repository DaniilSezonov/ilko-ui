import React from 'react';
import { FC, PropsWithChildren } from 'react';
import { DefaultHeader } from './headers/default';
import { MainMenu } from '../components/menus/main-menu';

interface DefaultLayoutProps extends PropsWithChildren {
  dataTheme?: "default" | "another";
} 

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children, dataTheme="default" }) => {
  return (
    <div data-theme={dataTheme} className="grid grid-cols-6 grid-rows-4 h-[100vh] overflow-auto bg-primary">
      <DefaultHeader className="col-span-6" />
      <MainMenu />
      <div className="col-start-2 col-span-6 row-span-6 bg-pri-bg rounded-lg border-t border-secondary p-2">
        {children}
      </div>
    </div>
  );
};
