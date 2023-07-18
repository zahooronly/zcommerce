"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const StoreSchema = z.object({
  name: z.string().min(3).max(255),
});

export const StoreModel = () => {
  const storeModel = useStoreModal();
  const form = useForm<z.infer<typeof StoreSchema>>({
    resolver: zodResolver(StoreSchema),
  });
  return (
    <Modal
      title="Create Store"
      description="Add a new Store to manage your products."
      isOpen={storeModel.isOpen}
      onClose={storeModel.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
function zodResolver(
  StoreSchema: z.ZodObject<
    { name: z.ZodString },
    "strip",
    z.ZodTypeAny,
    { name: string },
    { name: string }
  >
): import("react-hook-form").Resolver<{ name: string }, any> | undefined {
  throw new Error("Function not implemented.");
}
