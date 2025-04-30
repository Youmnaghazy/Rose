import StatsCard from "@/components/dashboard/StatsCard";
import { stats } from "@/constants/dummy";
import TotalRevenueChart from "@/components/dashboard/TotalRevenueChart";
import { InvoiceTable } from "@/components/dashboard/InvoiceTable";
import { PaginationComponent } from "@/components/shared/Pagination";
const DashboardPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  console.log(page);
  return (
    <div className="p-4 space-y-4">
      <div className="grid md:grid-cols-2 gap-3 items-center">
        <div className="grid sm:grid-cols-2 gap-10">
          {stats.map((stat) => (
            <StatsCard key={stat.label} stat={stat} />
          ))}
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-xl">Total Revenue</h2>
          <TotalRevenueChart />
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium text-rose-100">Payment History</h2>
          <p className="text-[#717579]">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <InvoiceTable />
        <PaginationComponent totalPages={10} />
      </div>
    </div>
  );
};
export default DashboardPage;
