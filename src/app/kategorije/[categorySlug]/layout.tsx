import { ReactNode, Suspense } from "react";
import CategorySidebar from "@/ui/category/CategorySidebar";
import CategorySidebarSkeleton from "@/ui/skeletons/CategorySidebarSkeleton";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string };
}): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.categorySlug).replace(/-/g, " ");

  return {
    title: `Prava Cijena - ${categoryName[0].toUpperCase() + categoryName.slice(1)}`,
    description: `Pregledaj proizvode iz kategorije ${
      categoryName[0].toUpperCase() + categoryName.slice(1)
    }.`,
    icons: {
      icon: "/images/favicon.ico",
    },
  };
}

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ categorySlug: string }>;
  children: ReactNode;
}) {
  const { categorySlug } = await params;

  return (
    <main className="grid gap-5 px-4 pb-4 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <section className="h-full lg:col-span-1">
        <Suspense fallback={<CategorySidebarSkeleton />}>
          <CategorySidebar categorySlug={categorySlug} />
        </Suspense>
      </section>
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2 xl:col-span-3 xl:grid-cols-3 2xl:col-span-4 2xl:grid-cols-4">
        {children}
      </section>
    </main>
  );
}
