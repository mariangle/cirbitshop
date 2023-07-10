"use client";

import axios from "axios";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { SheetClose } from "@/components/ui/sheet"

const Summary = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      variantIds: items.map((item) => item.id)
    });

    window.location = response.data.url;
  }

  return ( 
    <div className="p-4 mb-6">
      <div className="flex items-center justify-between py-4 font-semibold">
        <div className="text-base font-medium text-gray-900">TOTAL</div>
       <Currency value={totalPrice} />
      </div>
      <div className="grid gap-2">
        <SheetClose>
          <Button onClick={() => router.push("/cart")} className="w-full bg-gray-100 text-gray-700">
              SE KURV
          </Button>
        </SheetClose>
        <Button onClick={onCheckout} disabled={items.length === 0} className="w-full">
            GÅ TIL KASSEN
        </Button>
      </div>
    </div>
  );
}
 
export default Summary;