"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { Color, Storage, Condition } from "@/common.types";

interface SortByProps {
  data?: (Color | Storage | Condition)[];
  name: string;
  valueKey: string;
}

const SortBy: React.FC<SortByProps> = ({
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

    if (valueKey === "sorting") {
      query["sorting"] = id === "lowest" ? "lowest" : "highest";
      if (id === "newest") {
        query[valueKey] = null;
      }
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

  return (
    <select
        onChange={(e) => onClick(e.target.value)}
        className="lg:mb-4"
    >
        <option value="newest" selected={selectedValue === "newest"}>
            Nyeste
        </option>
        <option value="lowest" selected={selectedValue === "lowest"}>
            Laveste Pris
        </option>
        <option value="highest" selected={selectedValue === "highest"}>
            Højeste Pris
        </option>
    </select>
  );
};

export default SortBy;