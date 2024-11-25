"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "123@qq.com",
    password: "123456",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signInResult = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    console.log("signInResult", signInResult);
    if (signInResult?.error) {
      console.log("signInResult.error", signInResult.error);
      return;
    }

    if (signInResult?.ok) {
      // router.refresh();
      await new Promise((resolve) => setTimeout(resolve, 500));
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
        <form onSubmit={onSubmit} className="mt-5 w-full space-y-5 pb-2">
          <input
            placeholder="请输入邮箱"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            placeholder="请输入密码"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button className="w-full" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
