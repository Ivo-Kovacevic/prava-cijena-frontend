export type ProductType = {
  id: string;
  name: string;
  slug: string;
  lowestPrice: number;
  categoryId: string;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  hexColor: string;
  parentCategoryId: string;
  subcategories: CategoryType[];
  labels: LabelType[];
  createdAt: Date;
  updatedAt: Date;
};

export type LabelType = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
};
