export interface Billboard { 
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    category: Category;
    brand: Brand;
    name: string;
    description: string;
    isFeatured: boolean;
    variants: Variant[];
};

export interface Variant {
  id: string;
  price: string;
  size: Size;
  color: Color;
  storage: Storage;
  condition: Condition;
  images: Image[]
  product: Product;
  createdAt: Date;
}

export interface Storage {
  id: string;
  value: string;
};

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
};

export interface Brand {
    id: string;
    name: string;
};


export interface Condition {
  id: string;
  name: string;
  description: string;
};