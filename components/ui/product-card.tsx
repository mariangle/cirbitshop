"use client";

import Image from "next/image";
import IconButton from "@/components/ui/icon-button";

import { FaShoppingBasket } from "react-icons/fa";
import { BiExpand } from "react-icons/bi"
import { useRouter } from "next/navigation";
import { Product } from "@/common.types";
import Currency from "./currency";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  
  return ( 
    <div onClick={handleClick} className="group cursor-pointer p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data.productVariants[0]?.images[0]?.url || ""} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={() => {}}
              icon={<BiExpand size={16} />}
              className="bg-grey-light text-gray-400"
            />
            <IconButton 
              onClick={() => {}}
              icon={<FaShoppingBasket size={16} />}
              className="bg-grey-light text-gray-400"
            />
          </div>
        </div>
      </div>
      {/* Colors*/}
      <div className="flex gap-2 items-center justify-center">
        {data.productVariants.map((variant) => (
          <div key={variant.id}>
            <div className="h-3 w-3 rounded-full border" style={{ backgroundColor: variant?.color?.value }} />
          </div>
        ))}
      </div>
      {/* Description */}
      <div className="text-center">
        <p className="font-semibold">{data.name}</p>
        <Currency value={data?.productVariants[0]?.price}/>
      </div>
    </div>
  );
}

export default ProductCard;