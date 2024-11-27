import { PostDescription } from "~/components/common/post-description";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function PostList() {
  return (
    <section className="py-8 text-zinc-900 sm:py-16">
      <div className="mx-auto flex max-w-screen-xl gap-x-5 px-6">
        <div className="grid flex-1 grid-cols-1 gap-6">
          {Array.from({ length: 10 }, (_, i) => (
            <PostDescription key={i} />
          ))}
        </div>
        <div className="w-1/3 flex-shrink-0">
          <Card className="mx-auto w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl">登&nbsp;录</CardTitle>
            </CardHeader>
            <CardContent>1111</CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
