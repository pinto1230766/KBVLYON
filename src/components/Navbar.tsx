import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from './language-switcher';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t('navbar.home'), href: '/' },
    { name: 'Gramática', href: '/grammar-dictionary' },
    { name: 'Dicionário', href: '/dictionary' },
    { name: 'Lições', href: '/lessons' },
    { name: t('navbar.preaching'), href: '/preaching' },
    { name: t('navbar.bibleStudies'), href: '/bible-studies' },
    { name: t('navbar.notes'), href: '/notes' },
    { name: t('navbar.about'), href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">K</div>
          <span className="hidden text-base font-semibold tracking-wide text-foreground sm:inline-block">KBVLYON</span>
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
