import { ReactNode } from "react";
import SignInLayout from "@/ui/SignInLayout";

interface Props {
  children: ReactNode;
}

export default async function Layout({ children }: Props) {
  return <SignInLayout>{children}</SignInLayout>;
}
