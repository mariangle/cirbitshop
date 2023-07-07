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
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      brandId: query.brandId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url, { next: { revalidate: 0 }});
  const products: Product[] = await res.json();

  const filteredProducts = products.filter((product) => {
    return product.variants.some((variant) => {
      const colorMatch = !query.colorId || variant.color?.id === query.colorId;
      const storageMatch = !query.storageId || variant.storage?.id === query.storageId;
      const conditionMatch = !query.conditionId || variant.condition?.id === query.conditionId;

      return colorMatch && storageMatch && conditionMatch;
    });
  });

  return filteredProducts;
};

export default getProducts;