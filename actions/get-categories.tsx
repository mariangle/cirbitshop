import { Category } from "@/common.types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { next: { revalidate: 0 }});
  console.log(URL)
  
  return res.json();
};

export default getCategories;
