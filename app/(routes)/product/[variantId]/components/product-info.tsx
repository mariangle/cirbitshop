"use client";
import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";
import ProductDetail from "@/app/(routes)/product/[variantId]/components/product-detail";

import { FaRegHeart, FaHeart } from "react-icons/fa"
import { MouseEventHandler } from "react";
import { Variant } from "@/common.types";

import useCart from "@/hooks/use-cart";
import useWishlist from "@/hooks/use-wishlist";

interface InfoProps {
  variant: Variant;
};

const ProductInfo: React.FC<InfoProps> = ({ 
  variant
}) => {
  const cart = useCart();
  const wishlist = useWishlist();
  const wishlistItems = useWishlist((state) => state.items);
  const isInWishlist = wishlistItems.some((item) => item.id === variant.id);

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(variant)
  };

  const onAddToWishlist: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    isInWishlist ? wishlist.removeItem(variant.id) : wishlist.addItem(variant);
  };

  return ( 
    <div className="md:col-span-5 mt-8 md:mt-0">
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
      <div className="mt-4 flex items-center gap-x-2 h-12 text-sm">
        <Button onClick={onAddToCart} className="w-full">
          TILFØJ TIL KURV
        </Button>
        <Button onClick={onAddToWishlist} variant="secondary" className="h-full">
          {isInWishlist ? <FaHeart size={16}/> : <FaRegHeart size={16}/>}
        </Button>
      </div>
      <div className="mt-6">
          <p><span className="font-semibold">Beskrivelse:</span> {variant?.product?.description}</p>
      </div>
    </div>
  );
}
 
export default ProductInfo;