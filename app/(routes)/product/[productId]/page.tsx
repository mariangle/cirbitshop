import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery';
import Container from '@/components/ui/container';
import Info from '@/components/info';

import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  },
}

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({ 
    categoryId: product?.category?.id
  });

  if (!product) {
    return null;
  }

  return (
    <div>
      <Container>
        <div className="px-4 py-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.productVariants[0].images} />
            <div className="mt-10 px-4 lg:mt-0">
              <Info data={product}/>
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Lignende Produkter" items={suggestedProducts} />
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;