
import Container from '@/components/ui/container';

import NoResults from '@/components/ui/no-results';
import VariantCard from '@/components/product/variant-card';
import getColors from '@/actions/get-colors';
import getStorages from '@/actions/get-storages';
import getConditions from '@/actions/get-conditions';

import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';
import getVariants from '@/actions/get-variants';
import getCategory from '@/actions/get-category';

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
    <div className="bg-white min-h-[60vh]">
      <div className='h-24 md:h-32 border-b grid content-center text-center'>
        <h1 className='text-lg md:text-2xl font-semibold'>{category.name.toLocaleUpperCase()}</h1>
      </div>
      <Container>
        <div className="py-12">
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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