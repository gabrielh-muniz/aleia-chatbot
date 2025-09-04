import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { percent } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const data = [
  {
    title: "Total Revenue",
    value: "$1,250.00",
    percent: "+12.5%",
    stat: "Trending up this month",
    footer: "Visitors for the last 6 months",
    icon: TrendingUp,
  },
  {
    title: "New Costumers",
    value: "324",
    percent: "+6.2%",
    stat: "Up from last week",
    footer: "Average 45 new costumers",
    icon: TrendingUp,
  },
  {
    title: "Active Accounts",
    value: "1,024",
    percent: "-2.4%",
    stat: "Down from last week",
    footer: "Average 1,100 active accounts",
    icon: TrendingDown,
  },
];

function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {data.map((item, index) => (
        <Card key={index} className="bg-gradient-to-t from-primary/5 to-card">
          <CardHeader>
            <CardDescription>{item.title}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {item.value}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                {item.icon && <item.icon />}
                {item.percent}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {item.stat} {item.icon && <item.icon className="size-4" />}
            </div>
            <div className="text-muted-foreground">{item.footer}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default SectionCards;
