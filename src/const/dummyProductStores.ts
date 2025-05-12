import { ProductStoreType } from "@/@types/api-types";

const dummyProductStores: ProductStoreType[] = [
  {
    productId: "8cde5df2-2218-4b53-aec7-979ee0433679",
    storeId: "3fd0a5e6-d064-4dcb-a0ae-83a9021dd099",
    productUrl: "#",
    latestPrice: 1.29,
    id: "b4cd62ba-9424-4283-bdbc-e4a6eb121211",
    createdAt: new Date(),
    updatedAt: new Date(),
    store: {
      name: "Lidl",
      slug: "lidl",
      storeUrl: "https://www.lidl.hr",
      imageUrl: "https://res.cloudinary.com/dqbe0apqn/image/upload/v1743770051/lidl.webp",
      id: "3fd0a5e6-d064-4dcb-a0ae-83a9021dd099",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    productId: "8cde5df2-2218-4b53-aec7-979ee0433679",
    storeId: "c25d8a61-eac0-4f5e-a1f5-d9f80b6b2d4e",
    productUrl: "#",
    latestPrice: 1.39,
    id: "791fb005-3652-492e-8559-c1fa7541b583",
    createdAt: new Date(),
    updatedAt: new Date(),
    store: {
      name: "Konzum",
      slug: "konzum",
      storeUrl: "https://www.konzum.hr",
      imageUrl: "https://res.cloudinary.com/dqbe0apqn/image/upload/v1743770051/konzum.webp",
      id: "c25d8a61-eac0-4f5e-a1f5-d9f80b6b2d4e",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
];

export default dummyProductStores;
