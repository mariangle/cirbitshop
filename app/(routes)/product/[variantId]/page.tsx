import VariantList from './components/variant-list';
import Gallery from '@/components/gallery';
import Container from '@/components/ui/container';
import ProductInfo from './components/product-info';

import getVariant from '@/actions/get-variant';
import getVariants from '@/actions/get-variants';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    variantId: string;
  },
}

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
  const variant = await getVariant(params.variantId);

  const variants = await getVariants({ 
    categoryId: variant?.product?.category?.id
  });

  return (
    <div>
      <Container>
        <div className="px-4 py-10">
          <div className="md:grid md:grid-cols-12 md:items-start gap-x-8">
            <div className="relative md:col-span-7">
              <Gallery images={variant?.images}/>
            </div>
            <ProductInfo variant={variant}/>
          </div>
          <hr className="my-10" />
          <VariantList title="Anbefalet til dig" items={variants} />
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;