"use client";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { store } from "@prisma/client";
import { Trash } from "lucide-react";
import React from "react";

interface SettingsFormProps {
  initialData: store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={"Settings"} description={"Manage Store Preferences"} />
        <Button variant="destructive" onClick={() => {}} size="icon">
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
