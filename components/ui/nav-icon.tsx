import { Variant } from "@/common.types";

interface CartIconProps {
    items: Variant[];
    icon: React.ReactElement;
}

const CartIcon: React.FC<CartIconProps> = ({ items, icon }) => {
    return (
      <div className="cursor-pointer relative grid content-center">
        <div className="relative inline-block p-2">
          {icon}
          {items.length > 0 && (
            <div className="absolute top-0 right-0 rounded-full bg-primary border-b-white text-white text-xs w-4 h-4 flex items-center justify-center">
              {items.length}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CartIcon;