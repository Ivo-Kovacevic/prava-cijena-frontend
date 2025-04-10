export type ProductType = {
    id: string,
    name: string,
    slug: string,
    lowestPrice: number,
    categoryId: string,
    imageUrl: string,
    createdAt: Date,
    updatedAt: Date
}

export type CategoryType = {
    id: string,
    name: string,
    slug: string,
    imageUrl: string,
    parentCategoryId: string,
    subcategories: CategoryType[],
    createdAt: Date,
    updatedAt: Date
}