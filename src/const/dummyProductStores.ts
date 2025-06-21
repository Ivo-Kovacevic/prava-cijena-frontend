import { StoreType } from "@/@types/api-types";

const dummyProductStores: StoreType[] = [
  {
    id: "b4cd62ba-9424-4283-bdbc-e4a6eb121211",
    name: "Lidl",
    slug: "lidl",
    storeUrl: "https://www.lidl.hr",
    imageUrl: "https://res.cloudinary.com/dqbe0apqn/image/upload/v1743770051/lidl.webp",
    productUrl: null,
    price: 0.99,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "791fb005-3652-492e-8559-c1fa7541b583",
    name: "Konzum",
    slug: "konzum",
    storeUrl: "https://www.konzum.hr",
    imageUrl: "https://res.cloudinary.com/dqbe0apqn/image/upload/v1743770051/konzum.webp",
    productUrl: null,
    price: 1.34,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default dummyProductStores;
