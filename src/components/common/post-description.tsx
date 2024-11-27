export function PostDescription() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg sm:flex-row-reverse">
      <div className="relative h-40 w-full overflow-hidden rounded-md bg-zinc-100 sm:w-40 md:w-60">
        {/* <img
                alt="article-thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-center"
                sizes="100vw"
                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-1.6c6a65a0.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-1.6c6a65a0.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-1.6c6a65a0.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-1.6c6a65a0.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-1.6c6a65a0.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-1.6c6a65a0.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-1.6c6a65a0.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-1.6c6a65a0.jpg&amp;w=3840&amp;q=75 3840w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-1.6c6a65a0.jpg&amp;w=3840&amp;q=75"
                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
              /> */}
      </div>
      <div className="flex min-w-0 flex-1 flex-col px-2 sm:flex-col-reverse">
        <div className="mb-2 flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-zinc-100">
            {/* image of author */}
          </div>
          <div>
            <div className="text-xs uppercase text-zinc-500">2024.12.22</div>
            <p className="text-sm">
              by <span className="font-medium">谢9</span>
            </p>
          </div>
        </div>
        <div className="grow"></div>
        <div>
          <h3 className="mb-2 line-clamp-1 text-xl font-bold">
            Revitalize Your Health with Green Fruits adn Veggies Revitalize Your
            Health with Green Fruits adn Veggies Revitalize Your Health with
            Green Fruits adn Veggies
          </h3>
          <p className="line-clamp-2 text-base text-zinc-400">
            Lorem ipsum dolor sit amet consectetur. Nisi blandit arcu egestas
            odio eget at. Orci venenatis ultrices. Lorem ipsum dolor sit amet
            consectetur. Nisi blandit arcu egestas odio eget at. Orci venenatis
            ultrices. Lorem ipsum dolor sit amet consectetur. Nisi blandit arcu
            egestas odio eget at. Orci venenatis ultrices.
          </p>
        </div>
      </div>
    </div>
  );
}
