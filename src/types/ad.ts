
export interface Ad {
  id: string;
  name: string;
  active: boolean;
  budget: number;
  spent: number;
  revenue: number;
  roas: number;
  cpcc: number;
  ctr: number;
  clicks: number;
  impressions: number;
}

export interface MetricSummary {
  totalSpent: number;
  totalRevenue: number;
  avgRoas: number;
  activeAds: number;
  totalImpressions: number;
  totalClicks: number;
}
