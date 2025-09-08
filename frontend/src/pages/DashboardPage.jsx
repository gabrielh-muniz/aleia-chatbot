import SectionCards from "@/components/SectionCards";
import ChartSection from "@/components/ChartSection";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-3 md:gap-4 md:p-4">
      <SectionCards />
      <div className="">
        <ChartSection />
      </div>
    </div>
  );
}

export default DashboardPage;
