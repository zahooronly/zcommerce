"use client";
import * as z from "zod";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { store } from "@prisma/client";
import { Trash } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SettingsFormProps {
  initialData: store;
}

const formSchema = z.object({
  name: z.string().min(3).max(255),
  //   description: z.string().min(3).max(255),
});

type SettingsFormValues = z.infer<typeof formSchema>;
export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: SettingsFormValues) => {
    console.log(values);
    setLoading(true);
    try {
      //   await updateStoreMutation({
      //     id: initialData.id,
      //     name: values.name,
      //     description: values.description,
      //   });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={"Settings"} description={"Manage Store Preferences"} />
        <Button
          variant="destructive"
          onClick={() => setOpen(true)}
          disabled={loading}
          size="icon"
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Store name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            Save Changes
          </Button>
        </form>
      </Form>
    </>
  );
};
