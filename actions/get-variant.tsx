import { Variant } from "@/common.types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/product-variants`;

const getVariant = async (id: string): Promise<Variant> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getVariant;