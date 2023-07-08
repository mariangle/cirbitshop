"use client";

import Image from "next/image";
import IconButton from "@/components/ui/icon-button";

import { FaShoppingBasket } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Variant } from "@/common.types";
import Currency from "../../../../../components/ui/currency";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

interface VariantCardProps {
  variant: Variant
}

const VariantCard: React.FC<VariantCardProps> = ({
    variant
}) => {
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${variant?.id}`);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(variant)
  };
  
  return ( 
    <div onClick={handleClick} className="group cursor-pointer space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={variant.images[0]?.url || ""} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full h-full px-6">
          <div className="flex-center w-full h-full">
            <IconButton 
              onClick={onAddToCart}
              icon={<FaShoppingBasket size={16} />}
              className="bg-grey-light text-gray-400"
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="text-center">
        <p className="font-semibold">{variant.product.name} {variant.storage.value} {variant.color.name}</p>
        <Currency value={variant.price}/>
      </div>
    </div>
  );
}

export default VariantCard;