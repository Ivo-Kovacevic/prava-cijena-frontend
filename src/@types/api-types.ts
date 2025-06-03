export type ProductType = {
  id: string;
  name: string;
  slug: string;
  lowestPrice: number;
  categoryId: string;
  imageUrl: string | null;
  numberOfStores: number;
  stores: StoreType[];
  createdAt: Date;
  updatedAt: Date;
};

export type StoreType = {
  id: string;
  name: string;
  slug: string;
  storeUrl: string;
  imageUrl: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};

export type StoreLocationType = {
  id: string;
  storeId: string;
  city: string;
  address: string;
  locationProduct: ProductStoreType;
  locationProducts: ProductStoreType[];
  store: StoreType;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
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
  values: ValueType[];
  createdAt: Date;
  updatedAt: Date;
};

export type ValueType = {
  id: string;
  name: string;
  slug: string;
  labelId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductStoreType = {
  id: string;
  productId: string;
  storeId: string;
  store: StoreType;
  productUrl: string;
  latestPrice: number;
  product: ProductType;
  createdAt: Date;
  updatedAt: Date;
};

export type SearchResult = {
  products: ProductType[];
  pagination: PaginationType;
};

export type PaginationType = {
  currentPage: number;
  totalPages: number;
  products: ProductType[];
};

export type UserType = {
  username: string;
  email: string;
};
