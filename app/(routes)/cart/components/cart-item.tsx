import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Variant } from "@/common.types";


interface CartItemProps {
  data: Variant;
}

const CartItem: React.FC<CartItemProps> = ({
  data
}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return ( 
    <li className="flex py-6">
      <Link className="relative h-24 w-24 sm:h-36 sm:w-36" href={`/product/${data.id}`}>
        <Image
          fill
          src={data?.images[0]?.url}
          alt=""
          className="object-cover object-center"
        />
      </Link>
      <div className="flex flex-1 justify-between ml-2 sm:ml-4">
        <ul>
          <li className="font-semibold text-black">
            {data?.product?.name} {data?.storage?.value} {data?.color?.name}
          </li>
          <li>            
            <Currency value={data.price} />
          </li>
        </ul>
        <div className="z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
      </div>
    </li>
  );
}
 
export default CartItem;