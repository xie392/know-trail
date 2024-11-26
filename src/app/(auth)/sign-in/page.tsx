"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import {
  AuthCredentialsValidator,
  type TAuthCredentialsValidator,
} from "~/lib/validators/auth-credentials-validator";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toast } from "~/utils/toast";

function SignInPage() {
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
      <div className="w-full max-w-md p-4 shadow-md">
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          登录
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">没有账号？注册</p>
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
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default SignInPage;
