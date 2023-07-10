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
}

const ProductDetailItem: React.FC<ProductDetailItemProps> = ({ title, value }) => (
  <div className="mb-4">
    <div className="flex gap-1">
      <h4 className="font-semibold">{title}:</h4>
      <div>{value}</div>
    </div>
  </div>
);

const ColorCircle: React.FC<{ color: string }> = ({ color }) => (
  <div className="h-6 w-6 rounded-full border border-gray-300" style={{ backgroundColor: color }} />
);

const ProductDetail: React.FC<ProductDetailProps> = ({ storage, condition, color }) => {
  return (
    <div>
      <ProductDetailItem title="Lagerplads" value={storage.value} />
      <ProductDetailItem title="Kosmetisk stand" value={condition.name} />
      <ProductDetailItem title="Farve" value={<ColorCircle color={color?.value} />} />
    </div>
  );
};

export default ProductDetail;