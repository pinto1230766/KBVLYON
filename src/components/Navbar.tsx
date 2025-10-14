import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from './language-switcher';

const Navbar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.preaching'), href: '/preaching' },
    { name: t('navigation.grammar'), href: '/grammar-dictionary' },
    { name: t('navigation.dictionary'), href: '/dictionary' },
    { name: t('navigation.lessons'), href: '/lessons' },
    { name: t('navigation.scores'), href: '/scores' },
    { name: t('navigation.bibleStudies'), href: '/bible-studies' },
    { name: t('navigation.notes'), href: '/notes' },
    { name: t('navigation.about'), href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 safe-area-padding-top mobile-safe-top">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 100 100" className="h-8 w-8 text-white">
              <path d="M20,80 L20,20 L50,50 L20,80 M50,50 L80,20 L80,80 L50,50" fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinejoin="miter"/>
            </svg>
          </div>
          <span className="hidden text-base font-bold tracking-tight text-foreground sm:inline-block">
            <span className="block text-sm leading-tight">KVB 1</span>
            <span className="block text-xs font-normal opacity-70">PF.ORG</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-foreground/70 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${location.pathname === item.href ? 'bg-primary/10 text-foreground' : 'hover:text-foreground'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-6 flex flex-col space-y-4 text-base">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`transition-colors hover:text-foreground ${location.pathname === item.href ? 'text-foreground font-medium' : 'text-foreground/70'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
