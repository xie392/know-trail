// import { SiteFooter } from "~/components/layout/site-footer";
import SiteHeader from "~/components/layout/site-header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="border-border/40 dark:border-border">
      <div className="border-border/40 dark:border-border mx-auto w-full min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
        <SiteHeader />
        <main className="flex-1 px-5">{children}</main>
        {/* <SiteFooter /> */}
      </div>
    </div>
  );
}
