// import Link from "next/link";
// import Image from "next/image";

// import { auth } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import { Hero } from "~/components/app/hero";
import { PostList } from "~/components/app/post-list";

export default async function AppPage() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await auth();
  // if (session?.user) {
  //   void api.post.getLatest.prefetch();
  // }
  // console.log("session", session);

  return (
    <HydrateClient>
      <Hero />
      <PostList />
    </HydrateClient>
  );
}
