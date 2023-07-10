"use client"

import {
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import EmptyCart from "@/components/cart/empty-cart"

import useCart from "@/hooks/use-cart"
import CartItem from "@/components/cart/cart-item"
import Summary from "@/components/cart/summary"

const Cart = () => {
    const cart = useCart();

    const onClearCart = () => {
        cart.removeAll();
    }
    

  return (
    <SheetContent className="p-0 pb-8">
        <SheetHeader className="p-4 border-b m-0 flex items-center">
            <SheetTitle>DIN KURV</SheetTitle>
        </SheetHeader>
        {cart.items.length === 0 ?  <EmptyCart /> : 
              <div className="h-full flex flex-col justify-between">
                <ul className="p-4 grid gap-4 overflow-y-auto">
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                  <span
                    onClick={onClearCart}
                    className='underline text-gray-700 text-sm cursor-pointer'
                  >
                    Fjern varer
                  </span>
                </ul>
                <Summary />
              </div>
              }
    </SheetContent>
  )
}

export default Cart