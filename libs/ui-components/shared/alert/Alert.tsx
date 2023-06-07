import { FC, HTMLAttributes } from 'react';
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import ExclamationTriangleIcon from '@heroicons/react/24/solid/ExclamationTriangleIcon';
import InformationCircleIcon from '@heroicons/react/24/solid/InformationCircleIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';

import classNames from 'classnames';

export type AlertAction = FC<HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>>;

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  action?: AlertAction;
  className?: string;
}

export const Alert: FC<AlertProps> = ({ type, title, action, children, className, ...props }) => {
  const iconMap = {
    success: CheckCircleIcon,
    error: XCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon
  };

  const classNameMap = {
    success: {
      wrapper: 'bg-green-50',
      icon: 'text-green-400',
      title: 'text-green-800',
      content: 'text-green-700',
      action:
        'focus:ring-offset-2 bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600'
    },
    error: {
      wrapper: 'bg-red-50',
      icon: 'text-red-400',
      title: 'text-red-800',
      content: 'text-red-700',
      action: 'focus:ring-offset-2 bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600'
    },
    warning: {
      wrapper: 'bg-yellow-50',
      icon: 'text-yellow-400',
      title: 'text-yellow-800',
      content: 'text-yellow-700',
      action:
        'focus:ring-offset-2 bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600'
    },
    info: {
      wrapper: 'bg-blue-50',
      icon: 'text-blue-400',
      title: 'text-blue-800',
      content: 'text-blue-700',
      action:
        'focus:ring-offset-2 bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600'
    }
  };

  const Icon = iconMap[type];
  const Action = action;

  return (
    <div className={classNames('rounded-md p-4', className, classNameMap[type].wrapper)} {...props}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={classNames('h-5 w-5', classNameMap[type].icon)} aria-hidden="true" />
        </div>
        <div className="ml-3">
          {title && <h3 className={classNames('text-sm font-bold', classNameMap[type].title)}>{title}</h3>}
          {children && (
            <div className={classNames('text-sm', classNameMap[type].content, { 'mt-1': !!title })}>{children}</div>
          )}
        </div>

        {Action && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <Action
                className={classNames(
                  'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2',
                  classNameMap[type].action
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
