import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "~/components/ui/button";
import { Github } from "~/components/ui/icon";
import { cn } from "~/lib/utils";

export function Hero() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="relative mx-auto w-full max-w-screen-xl px-4 before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-40 before:w-full before:max-w-md before:-translate-x-1/4 before:translate-y-1/2 before:bg-gradient-to-br before:from-blue-400 before:to-purple-300 before:blur-[100px] after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-20 after:w-full after:max-w-md after:translate-y-1/2 after:bg-gradient-to-br after:from-cyan-300 after:to-sky-200 after:blur-[100px] md:after:translate-x-1/2">
        <div className="relative z-10 flex w-full items-center">
          <div className="min-w-0 flex-1">
            <h1 className="mb-5 text-3xl font-bold md:text-5xl">
              欢迎来到我的知识库！
            </h1>
            <p className="mb-5 w-full break-all text-lg leading-8 text-zinc-500 md:w-5/6 dark:text-white">
              将零散的知识点点滴滴地汇聚，构建成属于我们自己的知识之书，探寻知识的奥秘，掌握智慧的脉络，书写属于自己的知识宝库！
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="https://github.com/xie392/blog"
                className={cn(buttonVariants(), "gap-x-1.5")}
              >
                <Github calcMode="size-2" />
                Github
              </Link>
            </div>
          </div>
          <div className="hidden min-w-0 flex-1 md:block">
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
