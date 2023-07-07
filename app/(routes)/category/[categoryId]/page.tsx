
import Container from '@/components/ui/container';
import Billboard from '@/components/ui/billboard';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';

import getProducts from "@/actions/get-products";
import getCategory from '@/actions/get-category';
import getColors from '@/actions/get-colors';
import getStorages from '@/actions/get-storages';
import getConditions from '@/actions/get-conditions';

import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';

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
  const products = await getProducts({ 
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
        <Billboard 
          data={category.billboard}
        />      
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
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
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