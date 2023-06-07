import React, { HTMLAttributes } from 'react';
import { type Product } from '@medusajs/medusa';
import classNames from 'classnames';
import { Image } from '../shared/images/Image';

export interface ProductThumbnailProps extends HTMLAttributes<HTMLElement> {
  product: Product;
}

export const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ product, className, ...props }) => {
  const thumbnailImage = (product.images[0] && product.images[0].url) || product.thumbnail;
  const hoverImage = product.images[1] && product.images[1].url;

  return (
    <figure
      className={classNames(
        'aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg border border-black border-opacity-5',
        className
      )}
      {...props}
    >
      {hoverImage && (
        <Image
          loading="lazy"
          proxyOptions={{ context: 'small_square' }}
          src={hoverImage}
          alt={product.title}
          className="h-full w-full object-cover object-center opacity-0 transition-all duration-300 group-hover/product-card:scale-105 group-hover/product-card:opacity-100"
        />
      )}
      {thumbnailImage ? (
        <Image
          loading="lazy"
          proxyOptions={{ context: 'small_square' }}
          src={thumbnailImage}
          alt={product.title}
          className={classNames('h-full w-full object-cover object-center transition-all duration-300', {
            'group-hover/product-card:opacity-0': hoverImage,
            'group-hover/product-card:opacity-75': !hoverImage
          })}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center object-cover object-center group-hover/product-card:opacity-75">
          No Image
        </div>
      )}
    </figure>
  );
};
