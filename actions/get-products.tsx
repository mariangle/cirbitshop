import qs from "query-string";
import { Product } from "@/common.types";


const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  brandId?: string;
  storageId?: string;
  conditionId?: string;
  isFeatured?: boolean;
  isArchived?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      brandId: query.brandId,
      isFeatured: query.isFeatured,
      isArchived: query.isArchived,
    },
  });

  const res = await fetch(url, { next: { revalidate: 0 }});
  const products: Product[] = await res.json();
  
  const productsWithVariants = products.filter((product) => product.variants && product.variants.length > 0);

  return productsWithVariants
};

export default getProducts;