"use client";

import { ShoppingCart, Search} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
      <div>
        <Search
          size={20}
        />
      </div>
      <div onClick={() => router.push('/cart')}>
        <ShoppingCart
          size={20}
        />
      </div>
    </div>
  );
}
 
export default NavbarActions;