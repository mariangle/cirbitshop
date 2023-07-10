"use client";

import Image from "next/image";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";

import { FaShoppingBasket, FaRegHeart, FaHeart } from "react-icons/fa";

import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { Variant } from "@/common.types";

import useCart from "@/hooks/use-cart";
import useWishlist from "@/hooks/use-wishlist";

interface VariantCardProps {
  variant: Variant;
}

const VariantCard: React.FC<VariantCardProps> = ({ variant }) => {
  const cart = useCart();
  const wishlist = useWishlist();
  const router = useRouter();
  const wishlistItems = useWishlist((state) => state.items);
  const isInWishlist = wishlistItems.some((item) => item.id === variant.id);

  const handleClick = () => {
    router.push(`/product/${variant?.id}`);
  };

  const onAddToWishlist: MouseEventHandler<HTMLButtonElement> = (event) => {
    isInWishlist ? wishlist.removeItem(variant.id) : wishlist.addItem(variant);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(variant);
  };

  return (
    <div className="group cursor-pointer space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={variant.images[0]?.url || ""}
          alt="product image"
          fill
          onClick={handleClick}
          className="aspect-square object-cover"
        />
        <div className="absolute top-2 right-2 z-20">
          <IconButton
            onClick={onAddToWishlist}
            icon={isInWishlist ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
            className="bg-white"
          />
        </div>
        <div className="hidden group-hover:block absolute inset-0">
          <Image
            src={variant.images[1]?.url || variant.images[0]?.url}
            alt="product image"
            layout="fill"
            onClick={handleClick}
            className="aspect-square object-cover"
          />
            <div className="opacity-0 group-hover:opacity-100 transition absolute right-5 top-2 px-6">
              <IconButton
                onClick={onAddToCart}
                icon={<FaShoppingBasket size={16} />}
                className="bg-white"
              />
            </div>
        </div>
      </div>
      <div className="text-center" onClick={handleClick}>
        <p className="font-semibold">
          {`${variant.product.name} ${variant.storage.value} ${variant.color.name}`}
        </p>
        <Currency value={variant.price} />
      </div>
    </div>
  );
};

export default VariantCard;