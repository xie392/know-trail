import { Card, CardContent } from "~/components/ui/card";

export function PostDescription() {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-col gap-4 rounded-lg px-4 pt-8 transition-shadow sm:flex-row-reverse">
          <div className="relative h-36 w-full overflow-hidden rounded-md bg-zinc-100 sm:w-40 md:w-60">
            {/* image */}
          </div>
          <div className="flex min-w-0 flex-1 flex-col px-2 sm:flex-col-reverse">
            <div className="mb-2 flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-zinc-100">
                {/* image of author */}
              </div>
              <div>
                <div className="text-xs uppercase text-zinc-500">
                  2024.12.22
                </div>
                <p className="text-sm">
                  by <span className="font-medium">谢9</span>
                </p>
              </div>
            </div>
            <div className="grow"></div>
            <div>
              <h3 className="mb-2 line-clamp-1 text-xl font-bold">
                Revitalize Your Health with Green Fruits adn Veggies Revitalize
                Your Health with Green Fruits adn Veggies Revitalize Your Health
                with Green Fruits adn Veggies
              </h3>
              <p className="line-clamp-2 text-base text-zinc-400">
                Lorem ipsum dolor sit amet consectetur. Nisi blandit arcu
                egestas odio eget at. Orci venenatis ultrices. Lorem ipsum dolor
                sit amet consectetur. Nisi blandit arcu egestas odio eget at.
                Orci venenatis ultrices. Lorem ipsum dolor sit amet consectetur.
                Nisi blandit arcu egestas odio eget at. Orci venenatis ultrices.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
