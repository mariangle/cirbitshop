"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton  from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Color, Storage, Condition } from "@/common.types";

import Filter from "./filter";

interface MobileFiltersProps {
  colors: Color[],
  storages: Storage[],
  conditions: Condition[],
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  colors,
  storages,
  conditions
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden bg-transparent text-black p-0"
      >
        Filters
        <SlidersHorizontal size={20} />
      </Button>
      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter
                valueKey="conditionId" 
                name="Stand" 
                data={conditions}
              />
              <Filter 
                valueKey="colorId" 
                name="Farve" 
                data={colors}
              />
              <Filter 
                valueKey="storageId" 
                name="Lagerplads" 
                data={storages}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;