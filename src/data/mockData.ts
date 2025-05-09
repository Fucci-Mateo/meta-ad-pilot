
import { Ad, MetricSummary } from "../types/ad";

export const mockAds: Ad[] = [
  {
    id: "1",
    name: "Summer Collection Campaign",
    active: true,
    budget: 10000,
    spent: 8520.01,
    revenue: 29820.50,
    roas: 3.50,
    cpcc: 14.20,
    ctr: 2.8,
    clicks: 600,
    impressions: 21428
  },
  {
    id: "2",
    name: "Holiday Special Promotion",
    active: true,
    budget: 8500,
    spent: 7787.18,
    revenue: 23361.54,
    roas: 3.00,
    cpcc: 14.60,
    ctr: 2.9,
    clicks: 533,
    impressions: 18379
  },
  {
    id: "3",
    name: "New Customer Acquisition",
    active: true,
    budget: 6000,
    spent: 5879.23,
    revenue: 17931.65,
    roas: 3.05,
    cpcc: 11.57,
    ctr: 3.1,
    clicks: 508,
    impressions: 16387
  },
  {
    id: "4",
    name: "Loyalty Program Retargeting",
    active: true,
    budget: 5000,
    spent: 4113.08,
    revenue: 7979.37,
    roas: 1.94,
    cpcc: 15.58,
    ctr: 2.5,
    clicks: 264,
    impressions: 10560
  },
  {
    id: "5",
    name: "Brand Awareness Campaign",
    active: true,
    budget: 3000,
    spent: 1903.16,
    revenue: 4282.11,
    roas: 2.25,
    cpcc: 14.64,
    ctr: 2.5,
    clicks: 130,
    impressions: 5200
  },
  {
    id: "6",
    name: "Post-Purchase Feedback",
    active: true,
    budget: 1500,
    spent: 801.77,
    revenue: 2354.38,
    roas: 2.93,
    cpcc: 16.70,
    ctr: 2.7,
    clicks: 48,
    impressions: 1778
  },
  {
    id: "7",
    name: "Winter Collection Preview",
    active: false,
    budget: 2500,
    spent: 297.98,
    revenue: 453.77,
    roas: 1.52,
    cpcc: 18.62,
    ctr: 2.2,
    clicks: 16,
    impressions: 727
  },
  {
    id: "8",
    name: "Flash Sale Promotion",
    active: true,
    budget: 2000,
    spent: 178.39,
    revenue: 562.93,
    roas: 3.15,
    cpcc: 14.87,
    ctr: 2.9,
    clicks: 12,
    impressions: 414
  },
  {
    id: "9",
    name: "Email Subscriber Retargeting",
    active: true,
    budget: 1000,
    spent: 312.88,
    revenue: 532.16,
    roas: 1.70,
    cpcc: 28.44,
    ctr: 1.5,
    clicks: 11,
    impressions: 733
  },
  {
    id: "10",
    name: "Abandoned Cart Recovery",
    active: false,
    budget: 800,
    spent: 374.91,
    revenue: 0,
    roas: 0,
    cpcc: 53.56,
    ctr: 1.2,
    clicks: 7,
    impressions: 583
  }
];

export const calculateMetricSummary = (ads: Ad[]): MetricSummary => {
  const activeAds = ads.filter(ad => ad.active);
  
  const totalSpent = ads.reduce((sum, ad) => sum + ad.spent, 0);
  const totalRevenue = ads.reduce((sum, ad) => sum + ad.revenue, 0);
  
  const totalImpressions = ads.reduce((sum, ad) => sum + ad.impressions, 0);
  const totalClicks = ads.reduce((sum, ad) => sum + ad.clicks, 0);
  
  const avgRoas = totalRevenue / totalSpent;
  
  return {
    totalSpent,
    totalRevenue,
    avgRoas,
    activeAds: activeAds.length,
    totalImpressions,
    totalClicks
  };
};
