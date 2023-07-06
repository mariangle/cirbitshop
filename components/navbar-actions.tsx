"use client";

import { ShoppingCart, Heart, Search} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="flex-1 flex justify-end items-center gap-4">
      <div onClick={() => router.push('/cart')}>
        <Search
          size={20}
        />
      </div>
      <div onClick={() => router.push('/cart')}>
        <Heart
          size={20}
          color="black"
        />
      </div>
      <div onClick={() => router.push('/cart')}>
        <ShoppingCart
          size={20}
          color="black"
        />
      </div>
    </div>
  );
}
 
export default NavbarActions;