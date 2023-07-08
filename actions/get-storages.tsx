import { Storage } from "@/common.types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/storages`;

const getStorages = async (): Promise<Storage[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getStorages;