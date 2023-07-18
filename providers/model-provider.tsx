"use client";
// Global imports
import { useEffect, useState } from "react";

// Local imports
import { StoreModel } from "@/components/models/store-model";
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <StoreModel />;
};
