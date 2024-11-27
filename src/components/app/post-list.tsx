import { PostDescription } from "~/components/common/post-description";

export function PostList() {
  return (
    <section className="bg-white py-8 text-zinc-900 sm:py-16">
      <div className="mx-auto flex max-w-screen-xl px-6">
        <div className="grid flex-1 grid-cols-1 gap-6">
          {Array.from({ length: 10 }, (_, i) => (
            <PostDescription key={i} />
          ))}
        </div>
        <div className="w-1/3"></div>
      </div>
    </section>
  );
}
