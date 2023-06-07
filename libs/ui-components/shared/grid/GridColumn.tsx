import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface GridColumnProps extends HTMLAttributes<HTMLElement> {}

export const GridColumn: FC<GridColumnProps> = ({ className, ...props }) => (
  <div className={classNames('col-span-12', className)} {...props} />
);
