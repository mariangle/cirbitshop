"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Storage, Condition } from "@/common.types";

interface FilterProps {
  data: (Color | Storage | Condition)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const isStorageFilter = (filter: Color | Storage | Condition): filter is Storage => {
    return valueKey === "storageId";
  };

  return (
    <Accordion type="multiple">
      <AccordionItem value={name}>
        <AccordionTrigger>{name}</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-wrap gap-2">
              {data.map((filter) => (
                <div key={filter.id} className="flex items-center">
                  <Button
                    className={cn(
                      "text-sm text-gray-800 p-2 bg-white border border-gray-200 rounded-md",
                      selectedValue === filter.id && "bg-primary text-white"
                    )}
                    onClick={() => onClick(filter.id)}
                  >
                    {isStorageFilter(filter) ? filter.value : filter.name}
                  </Button>
                </div>
              ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;