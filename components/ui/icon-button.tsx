import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className
}) => {
  return ( 
    <button 
      onClick={onClick} 
      className={cn(
        'rounded-full flex items-center justify-center p-2 hover:scale-105',
        className
      )}
    >
      {icon}
    </button>
   );
}

export default IconButton;