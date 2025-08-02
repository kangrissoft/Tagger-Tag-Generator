import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Flame, Zap } from 'lucide-react';

const trendingKeywords = [
  { keyword: 'Revolusi AI', trend: '+245%', category: 'Teknologi' },
  { keyword: 'Hidup Berkelanjutan', trend: '+189%', category: 'Gaya Hidup' },
  { keyword: 'Kerja Remote', trend: '+156%', category: 'Bisnis' },
  { keyword: 'Digital Marketing', trend: '+134%', category: 'Bisnis' },
  { keyword: 'Trading Crypto', trend: '+127%', category: 'Keuangan' },
  { keyword: 'Kesehatan Mental', trend: '+98%', category: 'Kesehatan' },
  { keyword: 'Social Commerce', trend: '+87%', category: 'E-commerce' },
  { keyword: 'Perubahan Iklim', trend: '+76%', category: 'Lingkungan' },
];

const TrendingKeywords = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl font-bold bg-gradient-accent bg-clip-text text-transparent flex items-center gap-2">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
          Kata Kunci Trending
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Kata kunci populer dengan engagement tinggi minggu ini
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingKeywords.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-border/30 hover:bg-background/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {index < 3 ? (
                    <Flame className="w-4 h-4 text-accent animate-pulse" />
                  ) : (
                    <Zap className="w-4 h-4 text-primary" />
                  )}
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                    {item.keyword}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                  {item.category}
                </Badge>
                <Badge variant="secondary" className="text-xs font-bold text-accent">
                  {item.trend}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingKeywords;