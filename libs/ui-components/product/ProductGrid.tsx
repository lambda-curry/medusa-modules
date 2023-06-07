import type { FC } from 'react';
import { type Product } from '@medusajs/medusa';
import { ProductListItem, ProductListItemProps } from './ProductListItem';
import { ProductGridSkeleton } from './ProductGridSkeleton';
import { type ProductListHeaderProps } from './ProductListHeader';

export interface ProductListProps extends Partial<ProductListHeaderProps> {
  products?: Product[];
  className?: string;
  renderItem?: FC<ProductListItemProps>;
}

export const ProductGrid: FC<ProductListProps> = ({
  products,
  className = 'grid grid-cols-1 gap-y-10 xs:grid-cols-2 gap-x-6 md:!grid-cols-3 xl:!grid-cols-4 xl:gap-x-8',
  renderItem: CustomListItem,
}) => {
  const ListItem = CustomListItem
    ? CustomListItem
    : (listItemProps: ProductListItemProps) => (
        <ProductListItem {...listItemProps} />
      );

  if (!products) return <ProductGridSkeleton length={5} />;

  return (
    <>
      <div className={className}>
        {products?.map(product => (
          <ListItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
