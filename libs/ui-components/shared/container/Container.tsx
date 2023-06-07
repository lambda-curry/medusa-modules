import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export const Container: FC<PropsWithChildren & { className?: string }> = ({ className, ...props }) => {
  return <div className={classNames('max-w-screen-2xl w-full mx-auto px-4 sm:px-6 md:px-8', className)} {...props} />;
};
