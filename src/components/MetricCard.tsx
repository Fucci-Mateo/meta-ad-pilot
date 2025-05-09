
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    type: "increase" | "decrease" | "neutral";
  };
  icon: React.ReactNode;
  className?: string;
}

const MetricCard = ({ title, value, change, icon, className }: MetricCardProps) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p
            className={cn(
              "text-xs",
              change.type === "increase" && "text-green-500",
              change.type === "decrease" && "text-red-500"
            )}
          >
            {change.type === "increase" && "↑ "}
            {change.type === "decrease" && "↓ "}
            {change.value}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
