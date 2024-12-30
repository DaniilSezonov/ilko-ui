import classNames from 'classnames';
import React from 'react';
import { FC } from 'react';

interface DefaultHeaderProps {
  className?: string;
  errorSection?: () => JSX.Element;
}

export const DefaultHeader: FC<DefaultHeaderProps> = ({
  className, 
  errorSection,
}) => {
  return (
    <div className={classNames('flex w-full bg-primary', className)}>
      <div className="basis-1/5"></div>
      <div className="basis-1/5 border-l border-secondary">{errorSection?.()}</div>
      <div className="basis-1/5 border-l border-secondary"></div>
      <div className="basis-1/5 border-l border-secondary"></div>
      <div className="basis-1/5 border-l border-secondary"></div>
    </div>
  );
};
