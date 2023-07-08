
import Container from '@/components/ui/container';
import Billboard from '@/components/ui/billboard';
import ProductCard from '@/components/product/product-card';
import NoResults from '@/components/ui/no-results';
import VariantCard from '@/app/(routes)/product/[variantId]/components/variant-card';

import getProducts from "@/actions/get-products";
import getCategory from '@/actions/get-category';
import getColors from '@/actions/get-colors';
import getStorages from '@/actions/get-storages';
import getConditions from '@/actions/get-conditions';

import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';
import getVariants from '@/actions/get-variants';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: {
    colorId: string;
    storageId: string;
    conditionId: string;
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ 
  params, 
  searchParams 
}) => {
  const variants = await getVariants({ 
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    storageId: searchParams.storageId,
    conditionId: searchParams.conditionId
  });
  const colors = await getColors();
  const storages = await getStorages();
  const conditions = await getConditions();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters colors={colors} storages={storages} conditions={conditions}/>
            <div className="hidden lg:block">
              <Filter
                valueKey="conditionId" 
                name="Stand" 
                data={conditions}
              />
              <Filter 
                valueKey="colorId" 
                name="Farve" 
                data={colors}
              />
              <Filter 
                valueKey="storageId" 
                name="Lagerplads" 
                data={storages}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {variants.length === 0 && <NoResults />}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {variants.map((variant) => (
                  <VariantCard key={variant.id} variant={variant} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;