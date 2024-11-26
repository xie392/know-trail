import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email({
    message: "请输入有效的邮箱地址",
  }),
  password: z.string().min(1, {
    message: "请输入密码",
  }),
});

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
