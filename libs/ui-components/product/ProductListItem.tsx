import React, { HTMLAttributes } from 'react';
import { type Product } from '@medusajs/medusa';
import classNames from 'classnames';
import { ProductThumbnail } from './ProductThumbnail';

export interface ProductListItemProps extends HTMLAttributes<HTMLElement> {
  product: Product;
}

export const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  className,
  ...props
}) => {
  return (
    <article
      className={classNames(className, 'group/product-card text-left')}
      {...props}
    >
      <ProductThumbnail product={product} />

      <h4 className="mt-4 overflow-hidden text-ellipsis text-sm font-bold">
        {product.title}
      </h4>
    </article>
  );
};
