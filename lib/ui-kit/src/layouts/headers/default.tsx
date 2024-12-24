import classNames from 'classnames';
import React from 'react';
import { FC } from 'react';

interface DefaultHeaderProps {
  className?: string;
}

export const DefaultHeader: FC<DefaultHeaderProps> = ({ className }) => {
  return <div className={classNames("flex w-full", className)}>
    <div className="basis-1/5">1</div>
    <div className="basis-1/5">2</div>
    <div className="basis-1/5">3</div>
    <div className="basis-1/5">4</div>
    <div className="basis-1/5">5</div>
  </div>;
};
