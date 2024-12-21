import React from 'react';
import { FC } from 'react';

export const DefaultHeader: FC = () => {
  return <div className="flex w-full">
    <div className="basis-1/5">1</div>
    <div className="basis-1/5">2</div>
    <div className="basis-1/5">3</div>
    <div className="basis-1/5">4</div>
    <div className="basis-1/5">5</div>
  </div>;
};
