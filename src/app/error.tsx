"use client";

import GeneralError from "@/ui/icons/GeneralError";

export default function Error({ className }: { className?: string }) {
  return <GeneralError className={className} />;
}
