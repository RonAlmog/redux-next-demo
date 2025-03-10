"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { setName } from "@/store/user";

export default function User() {
  const dispatch = useDispatch();

  const userSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    phone: z.string().nonempty(),
  });
  type FormValues = z.infer<typeof userSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    console.log({ values });
    dispatch(
      setName({
        name: values.name,
        email: values.email,
        phone: values.phone,
      })
    );
  };

  return (
    <div>
      <h1>User</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 pt-4 mx-auto w-72"
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
}
