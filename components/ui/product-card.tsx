"use client";

import Image from "next/image";
import IconButton from "@/components/ui/icon-button";

import { FaShoppingBasket } from "react-icons/fa";
import { BiExpand } from "react-icons/bi"
import { useRouter } from "next/navigation";
import { Product } from "@/common.types";
import Currency from "./currency";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const cart = useCart();
  const router = useRouter();
  const previewModal = usePreviewModal();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data)
  };
  
  return ( 
    <div onClick={handleClick} className="group cursor-pointer p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data.variants[0]?.images[0]?.url || ""} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview}
              icon={<BiExpand size={16} />}
              className="bg-grey-light text-gray-400"
            />
            <IconButton 
              onClick={onAddToCart}
              icon={<FaShoppingBasket size={16} />}
              className="bg-grey-light text-gray-400"
            />
          </div>
        </div>
      </div>
      {/* Colors*/}
      <div className="flex gap-2 items-center justify-center">
        {data.variants.map((variant) => (
          <div key={variant.id}>
            <div className="h-3 w-3 rounded-full border" style={{ backgroundColor: variant?.color?.value }} />
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