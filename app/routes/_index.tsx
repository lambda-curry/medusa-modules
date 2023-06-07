import { json, type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Container } from '@marketplace/ui-components/shared/container/Container';
import ProductGrid from '@marketplace/ui-components/product/ProductGrid';
import * as ProductModule from '@medusajs/product';

export const loader: LoaderFunction = async ({ request }) => {
  const productService = await ProductModule.initialize();

  const { products, count } = productService.list({ limit: 20, offset: 0 });

  return json({ products, count });
};

export default function ProductsIndexRoute() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <Container className="pb-16">
      <ProductGrid products={products} />
    </Container>
  );
}
