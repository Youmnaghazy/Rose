import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardHeader />
      <div className="grid lg:grid-cols-[250px_1fr]">
        <div className="lg:block hidden">
          <Sidebar />
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};
export default AdminLayout;
