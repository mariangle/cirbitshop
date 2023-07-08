"use client"

import { Storage, Condition, Color } from "@/common.types";
import { ReactNode } from "react";

interface ProductDetailProps {
  storage: Storage;
  condition: Condition;
  color: Color;
}

interface ProductDetailItemProps {
  title: string;
  value: ReactNode;
  description?: string;
}

const ProductDetailItem: React.FC<ProductDetailItemProps> = ({ title, value, description }) => (
  <div className="flex flex-col mb-2">
    <h4 className="mb-1 font-semibold">{title}</h4>
    <div className="py-2 px-3 border w-fit rounded-md mb-2">{value}</div>
    {description && <p className="text-sm"><span className="font-semibold">{value}:</span> {description}</p>}
  </div>
);

const ColorCircle: React.FC<{ color: string }> = ({ color }) => (
  <div className="h-6 w-6 rounded-full border border-gray-300" style={{ backgroundColor: color }} />
);

const ProductDetail: React.FC<ProductDetailProps> = ({ storage, condition, color }) => {
  return (
    <div>
      <ProductDetailItem title="Lagerplads" value={storage.value} />
      <ProductDetailItem title="Kosmetisk stand" value={condition.name} description={condition.description} />
      <ProductDetailItem title="Farve" value={<ColorCircle color={color?.value} />} />
    </div>
  );
};

export default ProductDetail;