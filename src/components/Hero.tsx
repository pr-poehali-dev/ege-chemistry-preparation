
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-white -z-10" />
      
      {/* Biological elements for decoration */}
      <div className="absolute opacity-5 text-[400px] font-bold text-biology-primary -right-20 -top-20 -z-10">
        DNA
      </div>
      <div className="absolute opacity-5 text-[200px] font-bold text-biology-secondary bottom-10 left-10 -z-10">
        RNA
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat">
              Теория для <span className="text-biology-primary">ЕГЭ по Биологии</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-prose">
              Полный теоретический материал для подготовки к ЕГЭ 2025 на основе кодификатора ФИПИ. 
              Изучайте структурированную информацию по каждому разделу биологии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-biology-primary hover:bg-biology-secondary text-white"
                asChild
              >
                <Link to="/theory">Начать изучение</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-biology-primary text-biology-primary hover:bg-biology-primary/10"
              >
                <Link to="/structure">Структура экзамена</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-xs text-white">А</div>
                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-xs text-white">Т</div>
                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-xs text-white">Г</div>
                <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white flex items-center justify-center text-xs text-white">Ц</div>
              </div>
              <span className="text-sm text-gray-600">Более 7000 учеников освоили биологию с нами</span>
            </div>
          </div>
          
          <div className="relative animate-fade-in order-first md:order-last">
            <div className="w-full h-[400px] bg-gradient-to-tr from-biology-light to-biology-primary rounded-lg shadow-xl flex items-center justify-center overflow-hidden">
              <div className="relative w-[280px] h-[280px]">
                {/* Stylized DNA helix */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-5xl font-bold text-biology-primary">ДНК</span>
                </div>
                <div className="absolute w-full h-full rounded-full border-4 border-white/30 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-full h-full rounded-full border-4 border-white/30 animate-[spin_15s_linear_infinite_reverse]" style={{width: '90%', height: '90%', top: '5%', left: '5%'}} />
                <div className="absolute w-full h-full rounded-full border-4 border-white/30 animate-[spin_25s_linear_infinite]" style={{width: '70%', height: '70%', top: '15%', left: '15%'}} />
                
                {/* DNA base pairs */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-lg" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-400 rounded-full shadow-lg" />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
