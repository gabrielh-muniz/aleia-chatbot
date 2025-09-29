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
  { id: 1, title: "Product", url: "#" },
  { id: 2, title: "Features", url: "#" },
  { id: 3, title: "Pricing", url: "#" },
  { id: 4, title: "Company", url: "#" },
  { id: 5, title: "Blog", url: "#" },
  { id: 6, title: "Login", url: "/auth/login" },
];

export { NAVIGATION_DATA, NAVIGATION_LANDING_DATA };
