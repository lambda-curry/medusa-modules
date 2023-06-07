import { HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface EmptyProductListItemProps extends HTMLAttributes<HTMLElement> {}

export const EmptyProductListItem: React.FC<EmptyProductListItemProps> = ({ className, ...props }) => (
  <article className={classNames(className, 'group')} {...props}>
    <figure className="w-full h-full aspect-w-1 aspect-h-1 border rounded-lg overflow-hidden">
      <div className="w-full h-full object-center object-cover group-hover:opacity-75 bg-gray-200" />
    </figure>
  </article>
);
