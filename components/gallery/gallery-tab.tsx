import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/common.types";

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {
  return ( 
    <Tab
      className="relative flex aspect-square cursor-pointer items-center justify-center bg-white"
    >
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden">
            <NextImage 
              src={image.url} 
              alt="" 
              className={cn(
                'object-cover object-center',
                selected ? 'opacity-100' : 'opacity-50',
              )}
            />
          </span>
        </div>
      )}
    </Tab>
  );
}
 
export default GalleryTab;