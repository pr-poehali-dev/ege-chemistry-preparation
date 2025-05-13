
import { Link } from "react-router-dom";
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-biology-primary p-2 rounded-md">
                <Icon name="Leaf" className="h-5 w-5 text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">
                Биология<span className="text-biology-primary">ЕГЭ</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 text-sm">
              Полный курс теоретической подготовки к ЕГЭ по биологии на основе кодификатора ФИПИ 2025 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-biology-primary">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-biology-primary">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-biology-primary">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-biology-primary">
                <Icon name="Telegram" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-montserrat font-semibold text-lg mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-biology-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/theory" className="text-gray-400 hover:text-biology-primary transition-colors">
                  Теория
                </Link>
              </li>
              <li>
                <Link to="/practice" className="text-gray-400 hover:text-biology-primary transition-colors">
                  Практика
                </Link>
              </li>
              <li>
                <Link to="/structure" className="text-gray-400 hover:text-biology-primary transition-colors">
                  Структура ЕГЭ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-montserrat font-semibold text-lg mb-4">Теоретические блоки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/theory/cell-biology" className="text-gray-400 hover:text-biology-primary transition-colors">
                  Клеточная биология
                </Link>
              </li>
              <li>
                <Link to="/theory/organisms" className="text-gray-400 hover:text-biology-primary transition-colors">
                  Организм как система
                </Link>
              </li>
              <li>
                <Link to="/theory/human" className="text-gray-400 hover:text-biology-primary transition-colors">
                  Человек и его здоровье
                </Link>
              </li>
              <li>
                <Link to="/theory/ecology" className="text-gray-400 hover:text-biology-primary transition-colors">
                  Экология и эволюция
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-montserrat font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Icon name="Mail" className="h-4 w-4 text-biology-primary" />
                <a href="mailto:info@biology-ege.ru" className="hover:text-biology-primary transition-colors">
                  info@biology-ege.ru
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Icon name="Phone" className="h-4 w-4 text-biology-primary" />
                <a href="tel:+71234567890" className="hover:text-biology-primary transition-colors">
                  +7 (123) 456-78-90
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Icon name="MapPin" className="h-4 w-4 text-biology-primary mt-1" />
                <span>Москва, ул. Генетическая, 23</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 БиологияЕГЭ. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-biology-primary transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="hover:text-biology-primary transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
