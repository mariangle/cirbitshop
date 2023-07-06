import { Condition } from "@/common.types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/conditions`;

const getConditons = async (): Promise<Condition[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getConditons;