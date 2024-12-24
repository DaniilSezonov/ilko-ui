import React, { PropsWithChildren } from 'react';
import { FC } from 'react';

export const DefaultButton: FC<PropsWithChildren> = ({ children }) => {
  return <button data-theme="another" className="bg-primary text">{children}</button>;
};