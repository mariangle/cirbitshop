import { Variant } from "@/common.types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/product-variants`;

const getRecentProducts = async (): Promise<Variant[]> => {
    const res = await fetch(URL, { next: { revalidate: 0 }});
    const variants: Variant[] = await res.json();
  
    const sortedVariants = variants.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });

    const recentVariants = sortedVariants.slice(0, 4);

    return recentVariants;
  };
  
  export default getRecentProducts;