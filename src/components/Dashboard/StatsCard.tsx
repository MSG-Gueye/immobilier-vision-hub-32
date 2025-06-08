
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

const StatsCard = ({ title, value, icon: Icon, trend, trendUp }: StatsCardProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <p className="text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              {value}
            </p>
            {trend && (
              <p className={`text-sm font-medium ${trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
                {trend}
              </p>
            )}
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
