"use client";

import React, { useState } from "react";
import { Popover } from "@/components/ui/popover";
import { store } from "@prisma/client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { StethoscopeIcon } from "lucide-react";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof Popover>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: store[];
  className?: string;
}

export default function StoreSwitcher({
  className,
  items = [],
}: StoreSwitcherProps) {
  const storeModel = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => {
    label: item.name;
    value: item.id;
  });

  const currentStore = formattedItems.find(
    (item) => item.value === params.storeid
  );

  const [open, setOpen] = useState(false);
  const onStoreSelect = (store: { lablel: string; value: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <div>
      <p>Store Switcher</p>
    </div>
  );
}

StoreSwitcher;
