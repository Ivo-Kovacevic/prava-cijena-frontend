import { UUID } from "crypto"

export type Product = {
    id: string,
    name: string,
    slug: string,
    categoryId: string,
    imageUrl: string,
    createdAt: Date,
    updatedAt: Date
}