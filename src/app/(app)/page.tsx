import { HydrateClient } from "~/trpc/server";
import { Hero } from "~/components/app/hero";

export default async function AppPage() {
  return (
    <HydrateClient>
      <Hero />
    </HydrateClient>
  );
}
