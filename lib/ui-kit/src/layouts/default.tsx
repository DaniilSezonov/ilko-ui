import React from 'react';
import { FC, PropsWithChildren } from 'react';

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-5"></div>;
};
