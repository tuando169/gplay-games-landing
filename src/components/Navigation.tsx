import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.games'), href: "/games" },
    { label: t('nav.careers'), href: "/careers" },
    { label: t('nav.support'), href: "/support" },
    { label: t('nav.about'), href: "/about" },
  ];

  const handleLanguageChange = (value: 'en' | 'vi') => {
    setLanguage(value);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-background text-3xl font-black tracking-tight hover:opacity-80 transition-opacity">
            GPLAY
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-background/80 hover:text-background font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[140px] bg-background/10 border-background/20 text-background hover:bg-background/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-[100]">
                <SelectItem value="vi" className="cursor-pointer">
                  🇻🇳 Tiếng Việt
                </SelectItem>
                <SelectItem value="en" className="cursor-pointer">
                  🇬🇧 English
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[120px] bg-background/10 border-background/20 text-background hover:bg-background/20 text-sm h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-[100]">
                <SelectItem value="vi" className="cursor-pointer text-sm">
                  🇻🇳 Việt
                </SelectItem>
                <SelectItem value="en" className="cursor-pointer text-sm">
                  🇬🇧 EN
                </SelectItem>
              </SelectContent>
            </Select>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-background p-2 hover:bg-background/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-background/10 animate-fade-up">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-background/80 hover:text-background font-medium py-3 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
