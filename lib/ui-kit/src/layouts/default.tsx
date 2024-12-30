import React from 'react';
import { FC, PropsWithChildren } from 'react';


type MenuRenderProps = {
  className?: string;
}

interface DefaultLayoutProps extends PropsWithChildren {
  dataTheme?: "default" | "another";
  menuRender?: (props: MenuRenderProps) => JSX.Element;
  headerRender?: (props: MenuRenderProps) => JSX.Element;
} 

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children, dataTheme="default", menuRender, headerRender }) => {
  return (
    <div data-theme={dataTheme} className="grid grid-cols-6 grid-rows-4 h-[100vh] overflow-auto bg-primary">
      <div className='flex col-span-6'>
        {headerRender?.({})}
      </div>
      {menuRender?.({})}
      <div className="col-start-2 col-span-6 row-span-6 bg-pri-bg rounded-lg border-t border-secondary p-2">
        {children}
      </div>
    </div>
  );
};
