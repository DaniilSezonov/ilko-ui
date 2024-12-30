import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { FC } from 'react';

interface DefaultButtonProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  type?: "primary" | "inverse";
}

export const DefaultButton: FC<DefaultButtonProps> = ({
  children,
  onClick,
  className,
  type = "primary",
}) => {
  return (
    <button
      className={classNames(
        'relative font-semibold py-2 px-4 border border-l-0 rounded-sm hover:hue-rotate-30',
        {
          "bg-primary border-secondary text-secondary": type === "primary",
          "bg-secondary border-primary text-primary": type === "inverse",
        },
        className
      )}
      onClick={() => {
        onClick?.();
      }}
    >
      {children}
    </button>
  );
};
