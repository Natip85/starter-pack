"use client";
"use no memo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginSchemaType } from "./auth-types";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function AuthForm() {
  const [linkSent, setLinkSent] = useState(false);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (values: LoginSchemaType) => {
    await authClient.signIn.magicLink({
      email: values.email,
      callbackURL: "/",
    });
    setLinkSent(true);
  };

  if (linkSent) {
    return (
      <Card className="mx-auto max-w-[40vw] text-center">
        <CardHeader>
          <CardTitle>📬 Check your email</CardTitle>
          <CardDescription>
            We&apos;ve sent you a magic link to log in. Please check your inbox!
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  return (
    <Card className="mx-auto max-w-[40vw]">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          We&apos;ll keep you updated on any submissions that you make
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input id="email" {...field} placeholder="Email" />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <div>
              <Button type="submit" className="w-full">
                Login with email
              </Button>
            </div>
          </form>
        </Form>
        <div className="relative mt-6 flex items-center">
          <div className="flex-grow border" />
          <span className="px-2">or</span>
          <div className="flex-grow border" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-3">
          <Button
            variant={"outline"}
            size="lg"
            className="w-full"
            onClick={() => authClient.signIn.social({ provider: "google" })}
          >
            Sign in with Google
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
