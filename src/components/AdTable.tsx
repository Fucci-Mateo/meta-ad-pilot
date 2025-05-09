
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Ad } from "../types/ad";

interface AdTableProps {
  ads: Ad[];
  onToggleActive: (adId: string, active: boolean) => void;
  onBudgetChange: (adId: string, budget: number) => void;
}

const AdTable = ({ ads, onToggleActive, onBudgetChange }: AdTableProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const startEditing = (ad: Ad) => {
    setEditingId(ad.id);
    setEditValue(ad.budget.toString());
  };

  const saveEditing = (adId: string) => {
    const newBudget = parseFloat(editValue);
    if (!isNaN(newBudget)) {
      onBudgetChange(adId, newBudget);
    }
    setEditingId(null);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatNumber = (value: number, decimals = 2) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  };

  return (
    <div className="w-full overflow-auto">
      <table className="ads-table">
        <thead>
          <tr>
            <th className="w-[80px]">Status</th>
            <th>Ad Name</th>
            <th className="w-[120px]">Budget</th>
            <th className="w-[100px]">Spent</th>
            <th className="w-[100px]">Revenue</th>
            <th className="w-[80px]">ROAS</th>
            <th className="w-[80px]">CPCC</th>
            <th className="w-[80px]">CTR</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad) => (
            <tr key={ad.id}>
              <td>
                <Switch
                  checked={ad.active}
                  onCheckedChange={(checked) => onToggleActive(ad.id, checked)}
                />
              </td>
              <td className={cn(!ad.active && "text-muted-foreground")}>{ad.name}</td>
              <td>
                {editingId === ad.id ? (
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => saveEditing(ad.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEditing(ad.id);
                      if (e.key === "Escape") setEditingId(null);
                    }}
                    className="h-7 py-1"
                    autoFocus
                  />
                ) : (
                  <span
                    className="cursor-pointer hover:text-primary"
                    onClick={() => startEditing(ad)}
                  >
                    {formatCurrency(ad.budget)}
                  </span>
                )}
              </td>
              <td className="text-blue-400">{formatCurrency(ad.spent)}</td>
              <td>{formatCurrency(ad.revenue)}</td>
              <td
                className={cn(
                  ad.roas > 3 ? "text-green-500" : 
                  ad.roas > 1 ? "text-blue-400" : "text-red-500"
                )}
              >
                {formatNumber(ad.roas)}
              </td>
              <td>{formatCurrency(ad.cpcc)}</td>
              <td
                className={cn(
                  ad.ctr > 2 ? "text-green-500" : "text-blue-400"
                )}
              >
                {formatNumber(ad.ctr)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdTable;
