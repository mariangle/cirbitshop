"use client";

import Image from "next/image";
import IconButton from "@/components/ui/icon-button";

import { FaShoppingBasket } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Product } from "@/common.types";
import Currency from "../ui/currency";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data.variants[0]?.id}`);
  };
  
  return ( 
    <div onClick={handleClick} className="group cursor-pointer space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data.variants[0]?.images[0]?.url || ""} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
      </div>
      {/* Colors*/}
      <div className="flex gap-2 items-center justify-center">
        {data.variants.map((variant) => (
          <div key={variant.id}>
            <div className="h-3 w-3 rounded-full border shadow-inner" style={{ backgroundColor: variant?.color?.value }} />
          </div>
        ))}
      </div>
      {/* Description */}
      <div className="text-center">
        <p className="font-semibold">{data.name}</p>
        <Currency value={data?.variants[0]?.price}/>
      </div>
    </div>
  );
}

export default ProductCard;