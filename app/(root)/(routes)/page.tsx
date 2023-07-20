"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { Dialog } from "@radix-ui/react-dialog";
import { title } from "process";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [onOpen, isOpen]);

  return (
    <div className="flex min-h-screen align-middle items-center justify-center text-4xl">
      {/* <UserButton afterSignOutUrl="/" /> */}
      {/* <Modal isOpen title="Title" description="Description" onClose={() => {}}>
        Children
      </Modal> */}
      Root Page
    </div>
  );
}
