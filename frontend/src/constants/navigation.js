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

export { NAVIGATION_DATA };
