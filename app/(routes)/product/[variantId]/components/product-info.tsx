"use client";
import { MouseEventHandler } from "react";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";
import ProductDetail from "@/app/(routes)/product/[variantId]/components/product-detail";

import { Variant } from "@/common.types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  variant: Variant;
};

const ProductInfo: React.FC<InfoProps> = ({ 
  variant
}) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(variant)
  };

  return ( 
    <div className="md:col-span-5">
      <h3 className="text-gray-800">{variant?.product?.brand?.name}</h3>
      <h1 className="text-2xl font-extrabold text-gray-800">{variant?.product.name} {variant?.storage?.value} {variant?.color?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900 mb-4">
          <Currency value={variant?.price} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <ProductDetail 
          storage={variant?.storage} 
          condition={variant?.condition} 
          color={variant?.color}
          />
      </div>
      <div className="mt-4 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center justify-center gap-x-2 w-full">
          Tilføj til kurv
        </Button>
      </div>
      <div className="mt-8">
          <p>{variant?.product?.description}</p>
      </div>
    </div>
  );
}
 
export default ProductInfo;