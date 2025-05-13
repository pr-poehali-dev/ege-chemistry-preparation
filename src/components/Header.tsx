
import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-biology-primary p-2 rounded-md">
            <Icon name="Leaf" className="h-6 w-6 text-white" />
          </div>
          <span className="font-montserrat font-bold text-xl">
            Биология<span className="text-biology-primary">ЕГЭ</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-biology-primary transition-colors">
            Главная
          </Link>
          <Link to="/theory" className="text-sm font-medium hover:text-biology-primary transition-colors">
            Теория
          </Link>
          <Link to="/practice" className="text-sm font-medium hover:text-biology-primary transition-colors">
            Практика
          </Link>
          <Link to="/structure" className="text-sm font-medium hover:text-biology-primary transition-colors">
            Структура ЕГЭ
          </Link>
          <Link to="/resources" className="text-sm font-medium hover:text-biology-primary transition-colors">
            Ресурсы
          </Link>
        </nav>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-lg font-medium hover:text-biology-primary transition-colors">
                Главная
              </Link>
              <Link to="/theory" className="text-lg font-medium hover:text-biology-primary transition-colors">
                Теория
              </Link>
              <Link to="/practice" className="text-lg font-medium hover:text-biology-primary transition-colors">
                Практика
              </Link>
              <Link to="/structure" className="text-lg font-medium hover:text-biology-primary transition-colors">
                Структура ЕГЭ
              </Link>
              <Link to="/resources" className="text-lg font-medium hover:text-biology-primary transition-colors">
                Ресурсы
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
