"use client";

import { useEffect, useState } from 'react';

import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';

import Summary from './components/summary'
import CartItem from './components/cart-item';

export const revalidate = 0;

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onClearCart = () => {
    cart.removeAll();
  }

  return (
    <div className="min-h-[60vh]">
      <Container>
        <div className="py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-black">Kurv</h1>
          <div className="mt-4 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 ?  <p className="text-neutral-500">Ingen varer i kurven.</p> : 
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
                <button
                  onClick={onClearCart}
                  className='underline text-gray-700 text-sm'
                >
                  Fjern varer
                </button>
              </ul>
              }
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
};

export default CartPage;