import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "~/components/ui/button";
import { Github } from "~/components/ui/icon";
import { cn } from "~/lib/utils";
import { Sparkles } from "lucide-react";
import { auth } from "~/server/auth";

export async function Hero() {
  const seesion = await auth();
  console.log("seesion", seesion);

  return (
    <section className="py-24">
      <div className="relative mx-auto w-full max-w-screen-xl before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-40 before:w-full before:max-w-md before:-translate-x-1/4 before:translate-y-1/2 before:bg-gradient-to-br before:from-blue-400 before:to-purple-300 before:blur-[100px] after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-20 after:w-full after:max-w-md after:translate-y-1/2 after:bg-gradient-to-br after:from-cyan-300 after:to-sky-200 after:blur-[100px] md:after:translate-x-1/2">
        <div className="relative z-10 flex w-full flex-col items-center lg:flex-row">
          <div className="mb-10 min-w-0 flex-1 lg:mb-0">
            <h1 className="mb-5 text-3xl font-bold md:text-5xl">
              构建自己的知识体系！
            </h1>
            <p className="mb-5 w-full break-all text-base leading-8 text-zinc-500 dark:text-white md:w-5/6">
              在这里，您可以记录下自己的点滴思考、知识积累，也可以与他人分享交流。让我们一起构建成属于我们自己的知识之书！
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href={seesion ? "/workspace" : "/sign-in"}
                className={cn(buttonVariants(), "w-full gap-x-1.5 sm:w-24")}
              >
                <Sparkles calcMode="size-2" />
                开始
              </Link>
              <Link
                href="https://github.com/xie392/blog"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full gap-x-1.5 sm:w-24",
                )}
              >
                <Github calcMode="size-2" />
                Github
              </Link>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <Image
              alt="Astronaut in the air"
              loading="lazy"
              width="520"
              height="424"
              decoding="async"
              data-nimg="1"
              className="mx-auto object-contain"
              src="/images/home/banner.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
