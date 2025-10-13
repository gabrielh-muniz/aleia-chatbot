import { LayoutDashboard, Calendar, MessageCircle, Users } from "lucide-react";

const NAVIGATION_DATA = {
  navMain: [
    {
      title: "Platform",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          icon: LayoutDashboard,
        },
        {
          title: "Appointments",
          url: "#",
          icon: Calendar,
        },
        {
          title: "Chats",
          url: "#",
          icon: MessageCircle,
        },
        {
          title: "Patients",
          url: "#",
          icon: Users,
        },
      ],
    },
  ],
};

const NAVIGATION_LANDING_DATA = [
  { id: 1, title: "Product", url: "#product" },
  { id: 2, title: "Features", url: "#features" },
  { id: 3, title: "Why ALEIA", url: "#why-aleia" },
];

export { NAVIGATION_DATA, NAVIGATION_LANDING_DATA };
