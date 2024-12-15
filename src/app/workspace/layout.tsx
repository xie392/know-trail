import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { SidebarInsetHeader } from "~/components/sidebar/sidebar-inset-header";
import { SidebarLeft } from "~/components/sidebar/sidebar-left";

interface WorkSpaceLayoutProps {
  children: React.ReactNode;
}

export default function WorkSpaceLayout({ children }: WorkSpaceLayoutProps) {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <SidebarInsetHeader />
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
