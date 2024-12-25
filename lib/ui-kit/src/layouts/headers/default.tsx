import classNames from 'classnames';
import React from 'react';
import { FC } from 'react';

interface DefaultHeaderProps {
  className?: string;
}

export const DefaultHeader: FC<DefaultHeaderProps> = ({ className }) => {
  return (
    <div className={classNames('flex w-full bg-primary', className)}>
      <div className="basis-1/5"></div>
      <div className="basis-1/5 border-l border-secondary"></div>
      <div className="basis-1/5 border-l border-secondary"></div>
      <div className="basis-1/5 border-l border-secondary"></div>
      <div className="basis-1/5 border-l border-secondary"></div>
    </div>
  );
};
