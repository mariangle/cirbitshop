import qs from "query-string";
import { Variant } from "@/common.types";

interface Query {
  categoryId?: string;
  colorId?: string;
  brandId?: string;
  storageId?: string;
  conditionId?: string;
}

const URL=`${process.env.NEXT_PUBLIC_API_URL}/product-variants`;

const getVariants = async (query: Query): Promise<Variant[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      storageId: query.storageId,
      conditionId: query.conditionId,
    },
  });

  const res = await fetch(url, { next: { revalidate: 0 }});
  const variants: Variant[] = await res.json();

  const filteredVariants = variants.filter((variant) => {
    const categoryMatch = !query.categoryId || variant.product.category.id === query.categoryId;

    return categoryMatch;
  });

  return filteredVariants;
};

export default getVariants;