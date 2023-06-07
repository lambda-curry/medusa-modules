import { EmptyProductListItem } from './EmptyProductListItem';

export const ProductGridSkeleton = ({ length }: { length: number }) => (
  <div className="grid grid-cols-1 gap-y-10 xs:grid-cols-2 gap-x-6 md:!grid-cols-3 xl:!grid-cols-4 xl:gap-x-8">
    {Array.from({ length }, (_, i: number) => (
      <EmptyProductListItem key={i} />
    ))}
  </div>
);
