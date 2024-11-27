"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  AuthCredentialsValidator,
  type TAuthCredentialsValidator,
} from "~/lib/validators/auth-credentials-validator";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toast } from "~/utils/toast";

export default function SignInPage() {
  const router = useRouter();

  const form = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
    defaultValues: {
      email: "123@qq.com",
      password: "123456",
    },
  });

  const onSubmit = async (data: TAuthCredentialsValidator) => {
    const signInResult = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (signInResult?.error) {
      Toast.error("邮箱或密码错误");
      return;
    }

    if (signInResult?.ok) {
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">登&nbsp;录</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 w-full space-y-5 pb-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>邮箱</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入邮箱" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>密码</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="请输入密码"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                登录
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            没有账号？
            <Link href="#" className="underline">
              注册
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
