import { Variant } from "@/common.types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/product-variants`;

const getProductVariant = async (id: string, colorId: string, storageId: string, conditionId: string ): Promise<Variant> => {
  const res = await fetch(`${URL}/${id}?storageId=${storageId}?conditionId=${conditionId}?colorId=${colorId}`);

  return res.json();
};

export default getProductVariant;