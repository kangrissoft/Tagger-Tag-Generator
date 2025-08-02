import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Copy, Sparkles, Hash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const categories = [
  'Media Sosial',
  'Teknologi',
  'Bisnis',
  'Gaya Hidup',
  'Travel',
  'Kuliner',
  'Fashion',
  'Kesehatan',
  'Edukasi',
  'Hiburan'
];

const TagGenerator = () => {
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateTags = async () => {
    if (!keyword.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const baseTags = keyword.split(' ').map(word => word.toLowerCase());
      const categoryTags = selectedCategory ? [selectedCategory.toLowerCase().replace(' ', '')] : [];
      
      // Generate related tags based on keyword and category
      const relatedTags = [
        ...baseTags.map(tag => `#${tag}`),
        ...categoryTags.map(tag => `#${tag}`),
        `#${keyword.replace(/\s+/g, '').toLowerCase()}`,
        `#trending`,
        `#viral`,
        `#${new Date().getFullYear()}`,
        `#konten`,
        `#kreatif`,
        `#indonesia`,
        `#seo`
      ];
      
      // Remove duplicates and limit to 12 tags
      const uniqueTags = [...new Set(relatedTags)].slice(0, 12);
      setGeneratedTags(uniqueTags);
      setIsGenerating(false);
    }, 1500);
  };

  const copyTags = () => {
    const tagsText = generatedTags.join(' ');
    navigator.clipboard.writeText(tagsText);
    toast({
      title: "Tag Berhasil Disalin!",
      description: "Semua tag telah disalin ke clipboard Anda.",
    });
  };

  const copyTag = (tag: string) => {
    navigator.clipboard.writeText(tag);
    toast({
      title: "Tag Disalin!",
      description: `${tag} telah disalin ke clipboard Anda.`,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 px-4">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Hash className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Generator Tag SEO
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm sm:text-base">
            Buat hashtag dan tag yang relevan untuk konten Anda
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="keyword" className="text-sm font-medium">Kata Kunci</Label>
              <Input
                id="keyword"
                placeholder="Masukkan kata kunci utama..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="bg-background/50 border-border/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium">Kategori (Opsional)</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-background/50 border-border/50">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            onClick={generateTags}
            disabled={!keyword.trim() || isGenerating}
            className="w-full text-sm sm:text-base"
            variant="hero"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                Membuat Tag...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Buat Tag
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedTags.length > 0 && (
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
            <div>
              <CardTitle className="text-lg sm:text-xl">Tag yang Dihasilkan</CardTitle>
              <CardDescription className="text-sm">
                {generatedTags.length} tag dibuat • Klik untuk menyalin tag individual
              </CardDescription>
            </div>
            <Button onClick={copyTags} variant="accent" size="sm" className="text-xs sm:text-sm">
              <Copy className="w-4 h-4" />
              Salin Semua
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {generatedTags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                  onClick={() => copyTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TagGenerator;