import TagGenerator from '@/components/TagGenerator';
import TrendingKeywords from '@/components/TrendingKeywords';
import { Button } from '@/components/ui/button';
import { Hash, Sparkles, TrendingUp, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 rounded-full bg-primary/10 border border-primary/20 animate-glow">
                <Hash className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Tagger SEO
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
              Generator hashtag dan tag SEO yang powerful untuk meningkatkan reach dan engagement konten Anda
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <Button variant="hero" size="lg" className="animate-float text-sm sm:text-base">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                Mulai Generate
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur-sm border-border/50 hover:bg-background/30 text-sm sm:text-base">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                Lihat Trending
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4">
              <div className="p-4 sm:p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-primary/10 border border-primary/20">
                  <Hash className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Generator Tag Cerdas</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Buat hashtag yang relevan berdasarkan kata kunci dan kategori Anda</p>
              </div>
              
              <div className="p-4 sm:p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-accent/10 border border-accent/20">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Kata Kunci Trending</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Tetap update dengan kata kunci dan topik trending terbaru</p>
              </div>
              
              <div className="p-4 sm:p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-primary-glow/10 border border-primary-glow/20">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-glow" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Salin Instan</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Fungsi salin sekali klik untuk pembuatan konten yang mudah</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16 space-y-12 sm:space-y-16">
        <TagGenerator />
        <TrendingKeywords />
      </div>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="text-center text-muted-foreground text-sm sm:text-base">
            <p>&copy; 2024 Tagger SEO. Tingkatkan konten Anda dengan hashtag yang powerful.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;