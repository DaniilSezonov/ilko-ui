import React, { FC } from 'react';
import { DefaultButton } from '../buttons/default';

export const MainMenu: FC = () => {
  return (
    <div className="col-start-1 row-start-2 row-end-6 flex flex-col gap-2 from-secondary to-primary bg-gradient-to-t px-2 pt-1">
      <DefaultButton className="basis-[10%] hover:translate-x-1 hover:border-r-0 hover:border-l">Button 1</DefaultButton>
      <DefaultButton className="basis-[10%] hover:translate-x-1 hover:border-r-0 hover:border-l">Button 2</DefaultButton>
      <DefaultButton className="basis-[10%] hover:translate-x-1 hover:border-r-0 hover:border-l">Button 3</DefaultButton>
      <DefaultButton className="basis-[10%] hover:translate-x-1 hover:border-r-0 hover:border-l">Button 4</DefaultButton>
    </div>
  );
};
