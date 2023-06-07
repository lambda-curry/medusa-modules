import { FC, ReactNode } from 'react';
import classNames from 'classnames';

export interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page: FC<PageProps> = ({ className, children }) => {

  return (
    <div className={classNames('page-layout flex min-h-screen flex-col bg-gray-50', className)}>
      <main className="flex-auto">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};
