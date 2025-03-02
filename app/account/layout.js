import SideNavigation from "../_components/SideNavigation";
import SignOutButton from "../_components/SignOutButton";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />

      <div className="py-1">{children}</div>
    </div>
  );
}
