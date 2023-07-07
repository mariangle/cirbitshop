"use client";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";

import { Product } from "@/common.types";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {

  return ( 
    <div>
      <h1 className="text-2xl font-extrabold text-gray-800">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.productVariants[0].price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-4">
        <div>
          <h3 className="font-semibold text-black">Beskrivelse:</h3>
          <div>
            {data?.description}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Lagerplads:</h3>
          <div>
            {data?.productVariants[0].storage?.value}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Kosmetisk stand:</h3>
          <div>
            {data?.productVariants[0].condition.name}
          </div>
        </div>
        <div className="text-sm"><span className="font-semibold">{data?.productVariants[0].condition.name}: </span>{data?.productVariants[0].condition.description}</div>
        <div className="">
          <h3 className="font-semibold text-black mb-4">Farve: <span>{data?.productVariants[0].color?.name}</span></h3>
          <div className="h-6 w-6 rounded-full border border-gray-300" style={{ backgroundColor: data?.productVariants[0].color?.value }} />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={() => {}} className="flex items-center gap-x-2">
          TILFØJ TIL KURV
        </Button>
      </div>
    </div>
  );
}
 
export default Info;