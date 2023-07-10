"use client"

import NoResults from "@/components/ui/no-results";
import VariantCard from "../../../../components/product/variant-card";

import useWishlist from "@/hooks/use-wishlist";

const Wishlist = () => {
    const items = useWishlist((state) => state.items);

    return (
    <div className="mt-6 lg:col-span-4 lg:mt-0">
    {items.length === 0 && (
      <p className="text-gray-700">Du har ingen varer i ønskelisten.</p>
    )}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((variant) => (
        <VariantCard key={variant.id} variant={variant} />
      ))}
    </div>
</div>
  )
}

export default Wishlist