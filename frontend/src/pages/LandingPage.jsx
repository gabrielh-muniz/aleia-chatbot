import { Button } from "@/components/ui/button";
import { Bot, Menu } from "lucide-react";
import { NAVIGATION_LANDING_DATA } from "@/constants/navigation";

function LandingPage() {
  return (
    <div className="bg-white w-full overflow-hidden">
      {/* Navbar */}
      <div className="container flex justify-between items-center mx-auto py-4">
        {/* Logo section */}
        <div className="flex gap-1 items-center font-bold text-xl uppercase">
          <Bot />
          <span>
            Ale<span className="text-blue-400">ia</span>
          </span>
        </div>
        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-6">
          {NAVIGATION_LANDING_DATA.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-gray-600 hover:text-blue-400"
            >
              {item.title}
            </a>
          ))}
          <Button>Get Started</Button>
        </div>
        {/* Hamburguer menu */}
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
