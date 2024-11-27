export function SiteFooter() {
  return (
    <footer className="bg-white py-8 text-zinc-900">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-4 px-4">
        <div>
          <div className="flex select-none items-center">
            <div className="mr-2"></div>
            <div className="__className_0de8f1 text-xl">Tailsc</div>
          </div>
        </div>
        <p className="mx-auto max-w-2xl text-center text-base text-zinc-500">
          Get started over 100+ UI components, sections and pages built with
          Tailwind CSS.
        </p>
        <ul className="flex min-w-0 flex-1 items-center justify-center gap-8">
          <li>
            <a className="text-zinc-900 hover:text-blue-500" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-zinc-900 hover:text-blue-500" href="#">
              Product
            </a>
          </li>
          <li>
            <a className="text-zinc-900 hover:text-blue-500" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="text-zinc-900 hover:text-blue-500" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-zinc-900 hover:text-blue-500" href="#">
              Contact
            </a>
          </li>
        </ul>
        <div className="text-center text-sm text-zinc-500">
          © 2024 Tailsc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
