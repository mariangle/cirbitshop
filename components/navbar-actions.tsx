"use client";
import CartSheet from "@/components/cart";
import NavIcon from "@/components/ui/nav-icon";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import Link from "next/link";

import { FaShoppingBasket, FaRegHeart } from "react-icons/fa";

import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import useWishlist from "@/hooks/use-wishlist";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const wishlist = useWishlist();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="flex-1 flex justify-end items-center">
      <Link href={"/wishlist"}>
        <NavIcon items={wishlist.items} icon={<FaRegHeart size={16}/>}/>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <NavIcon items={cart.items} icon={<FaShoppingBasket size={16}/>}/>
          </button>
        </SheetTrigger>
        <CartSheet />
      </Sheet>
    </div>
  );
}
 
export default NavbarActions;