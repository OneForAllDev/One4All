import PlayerDesktopHeader from "@/components/player-dashboard/desktop-header/PlayerDesktopHeader";
import PlayerDesktopSidebar from "@/components/player-dashboard/desktop-sidebar/PlayerDesktopSidebar";
import PlayerDesktopFooter from "@/components/player-dashboard/desktop-footer/PlayerDesktopFooter";

export default function PlayerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-screen h-screen flex flex-col justify-between">
      <PlayerDesktopHeader />
      <div className="w-full h-full flex">
        <PlayerDesktopSidebar />
        <div className="w-full h-full flex flex-col justify-between">
          {children}
          <PlayerDesktopFooter />
        </div>
      </div>
    </section>
  );
}
