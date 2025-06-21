import { toBool } from "@/lib/helpers";

export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
export const IS_PRODUCTION = toBool(process.env.NEXT_IS_PRODUCTION as string);
