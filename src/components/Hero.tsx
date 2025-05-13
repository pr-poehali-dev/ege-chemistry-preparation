
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-white -z-10" />
      
      {/* Chemical formula elements for decoration */}
      <div className="absolute opacity-5 text-[400px] font-bold text-chemistry-primary -right-20 -top-20 -z-10">
        H
      </div>
      <div className="absolute opacity-5 text-[200px] font-bold text-chemistry-primary bottom-10 left-10 -z-10">
        O
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat">
              Готовимся к ЕГЭ <span className="text-chemistry-primary">по Химии 2025</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-prose">
              Полный курс подготовки на основе банка заданий ФИПИ. Разбираем структуру экзамена, 
              решаем сложные задачи и готовимся к успешной сдаче ЕГЭ вместе!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-chemistry-primary hover:bg-chemistry-secondary text-white"
                asChild
              >
                <Link to="/tasks">Начать подготовку</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-chemistry-primary text-chemistry-primary hover:bg-chemistry-primary/10"
              >
                <Link to="/structure">Структура экзамена</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-xs text-white">К</div>
                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-xs text-white">В</div>
                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-xs text-white">С</div>
              </div>
              <span className="text-sm text-gray-600">Более 5000 учеников уже с нами</span>
            </div>
          </div>
          <div className="relative animate-fade-in order-first md:order-last">
            <div className="w-full h-[400px] bg-gradient-to-tr from-chemistry-light to-chemistry-primary rounded-lg shadow-xl flex items-center justify-center overflow-hidden">
              <div className="relative w-[280px] h-[280px]">
                {/* Stylized chemical elements diagram */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-5xl font-bold text-chemistry-primary">H₂O</span>
                </div>
                <div className="absolute w-full h-full rounded-full border-4 border-white/30 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-full h-full rounded-full border-4 border-white/30 animate-[spin_15s_linear_infinite_reverse]" style={{width: '90%', height: '90%', top: '5%', left: '5%'}} />
                <div className="absolute w-full h-full rounded-full border-4 border-white/30 animate-[spin_25s_linear_infinite]" style={{width: '70%', height: '70%', top: '15%', left: '15%'}} />
                
                {/* Electron-like dots */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
