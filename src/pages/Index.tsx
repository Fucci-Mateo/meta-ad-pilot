
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import MetricCard from "@/components/MetricCard";
import AdTable from "@/components/AdTable";
import AdHeader from "@/components/AdHeader";
import { Ad } from "../types/ad";
import { mockAds, calculateMetricSummary } from "../data/mockData";
import {
  BarChart4,
  DollarSign,
  LineChart,
  Target,
  TrendingUp,
  Users,
  ToggleLeft,
  ToggleRight
} from "lucide-react";

const Index = () => {
  const [ads, setAds] = useState<Ad[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate loading data from an API
    setAds(mockAds);
  }, []);
  
  const metrics = calculateMetricSummary(ads);
  
  const handleToggleActive = (adId: string, active: boolean) => {
    setAds(ads.map(ad => 
      ad.id === adId ? { ...ad, active } : ad
    ));
    
    toast({
      title: active ? "Ad Activated" : "Ad Deactivated",
      description: `Ad status has been updated successfully.`,
      duration: 2000,
    });
  };
  
  const handleBudgetChange = (adId: string, budget: number) => {
    setAds(ads.map(ad => 
      ad.id === adId ? { ...ad, budget } : ad
    ));
    
    toast({
      title: "Budget Updated",
      description: `Budget has been updated to $${budget.toLocaleString()}.`,
      duration: 2000,
    });
  };

  return (
    <div className="container mx-auto py-6 space-y-6 px-4 sm:px-6 max-w-7xl">
      <AdHeader />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Spend"
          value={`$${metrics.totalSpent.toLocaleString('en-US', { maximumFractionDigits: 2 })}`}
          icon={<DollarSign />}
          change={{ value: "+12.5% from last month", type: "increase" }}
        />
        <MetricCard
          title="Total Revenue"
          value={`$${metrics.totalRevenue.toLocaleString('en-US', { maximumFractionDigits: 2 })}`}
          icon={<TrendingUp />}
          change={{ value: "+8.2% from last month", type: "increase" }}
        />
        <MetricCard
          title="Average ROAS"
          value={metrics.avgRoas.toFixed(2)}
          icon={<Target />}
          change={{ value: "-0.3 from last month", type: "decrease" }}
        />
        <MetricCard
          title="Active Campaigns"
          value={`${metrics.activeAds} of ${ads.length}`}
          icon={metrics.activeAds > ads.length / 2 ? <ToggleRight /> : <ToggleLeft />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="md:col-span-2 xl:col-span-3 bg-card rounded-lg p-4">
          <h3 className="font-medium mb-2">Revenue vs. Spend</h3>
          <div className="h-64 flex items-center justify-center">
            <LineChart className="h-16 w-16 text-muted-foreground/50" />
            <span className="text-muted-foreground ml-2">Revenue/Spend chart would render here</span>
          </div>
        </div>
        <div className="bg-card rounded-lg p-4">
          <h3 className="font-medium mb-2">Campaign Performance</h3>
          <div className="h-64 flex items-center justify-center">
            <BarChart4 className="h-16 w-16 text-muted-foreground/50" />
            <span className="text-muted-foreground ml-2">Performance chart would render here</span>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-4 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Active Campaigns</h2>
          <p className="text-muted-foreground text-sm">
            {metrics.activeAds} active of {ads.length} total
          </p>
        </div>
        <AdTable 
          ads={ads} 
          onToggleActive={handleToggleActive} 
          onBudgetChange={handleBudgetChange} 
        />
      </div>
    </div>
  );
};

export default Index;
