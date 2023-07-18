"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import { Dialog } from "@radix-ui/react-dialog";
import { title } from "process";

export default function Home() {
  return (
    <div className="flex min-h-screen align-middle items-center justify-center text-4xl">
      {/* <UserButton afterSignOutUrl="/" /> */}
      <Modal isOpen title="Title" description="Description" onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
}
