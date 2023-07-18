"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModel = () => {
  const storeModel = useStoreModal();
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
