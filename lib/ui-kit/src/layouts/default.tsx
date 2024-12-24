import React from 'react';
import { FC, PropsWithChildren } from 'react';
import { DefaultHeader } from './headers/default';
import { DefaultButton } from '../components/buttons/default';

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
  <div className="grid grid-cols-6 grid-rows-4 h-[100vh] overflow-auto">
    <DefaultHeader className="col-span-6" />
    <div className='col-start-1 row-start-2 row-end-6'>
      <DefaultButton>
        Button 1
      </DefaultButton>
    </div>
    <div className="col-start-2 col-span-6 row-span-6">
      {children}
    </div>
  </div>
  );
};
