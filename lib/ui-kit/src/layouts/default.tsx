import React from 'react';
import { FC, PropsWithChildren } from 'react';
import { DefaultHeader } from './headers/default';

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-2 grid-rows-2">
    <DefaultHeader />
  </div>;
};
