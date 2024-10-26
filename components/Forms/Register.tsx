"use client";
import React, { useContext } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";

import { useRouter } from "next/navigation";
import UserContext from "@/providers/UserProvider";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "Your password must be at least 8 characters",
  }),
});

type values = {
  username: string;
  email: string;
  password: string;
}

export default function Register() {
  const { toast } = useToast();
  const router = useRouter();
  const userContent = useContext(UserContext);

  if (!userContent) {
    return
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: values) {
    try {
      const response = await axios.post("/api/signup", values);
      console.log(response);
      if (response.status === 200) {
        toast({
          description: response.data.message,
        });
        userContent?.setUser(response.data.user);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else if (response.status === 201) {
        toast({
          description: response.data.message,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card className="w-[25rem] bg-transparent z-10">
      <CardHeader>
        <CardTitle>Onboarding</CardTitle>
        <CardDescription>Take a step towards your interest</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="vertex_user" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="user@virtex.com" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Register</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Link
          href="/login"
          className="hover:underline font-medium text-sm text-muted-foreground"
        >
          Already have an account? Login
        </Link>
      </CardFooter>
    </Card>
  );
}
