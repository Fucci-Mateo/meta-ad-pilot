
import { Input } from "@/components/ui/input";
import { CalendarIcon, SearchIcon, SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <div>
        <h1 className="text-2xl font-bold">Meta Ads Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          Last updated: {new Date().toLocaleString()}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <div className="relative">
          <SearchIcon className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search campaigns..." 
            className="pl-8 h-9 w-[180px]" 
          />
        </div>
        
        <Button variant="outline" size="sm" className="h-9">
          <CalendarIcon className="h-4 w-4 mr-2" />
          Last 30 Days
        </Button>
        
        <Select defaultValue="facebook">
          <SelectTrigger className="w-[130px] h-9">
            <SelectValue placeholder="Platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="all">All Platforms</SelectItem>
          </SelectContent>
        </Select>
        
        <Button size="icon" variant="ghost" className="h-9 w-9">
          <SettingsIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AdHeader;
