import { FaShoppingBasket } from "react-icons/fa"
import { SheetClose } from "@/components/ui/sheet"

const EmptyCart = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col p-4 gap-4">
        <FaShoppingBasket className="w-20 h-20 text-gray-200"/>
        <p className="text-gray-700 text-sm">Du har ingen varer i kurven.</p>
        <SheetClose className="underline text-xs text-black">
            SHOP VIDERE
        </SheetClose>
    </div>
  )
}

export default EmptyCart