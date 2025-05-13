
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: "cell-biology",
    title: "Клеточная биология",
    description: "Клетка как биологическая система",
    difficulty: "Базовый-Повышенный",
    icon: "Grid3x3",
    topics: ["Строение клетки", "Деление клетки", "Метаболизм", "Фотосинтез"],
    color: "#4ade80"
  },
  {
    id: "organisms",
    title: "Организм как биологическая система",
    description: "Размножение и индивидуальное развитие",
    difficulty: "Базовый-Повышенный",
    icon: "Rabbit",
    topics: ["Размножение", "Онтогенез", "Генетика", "Селекция"],
    color: "#16a34a"
  },
  {
    id: "human",
    title: "Человек и его здоровье",
    description: "Строение и функционирование организма человека",
    difficulty: "Базовый-Повышенный",
    icon: "Heart",
    topics: ["Ткани и органы", "Нервная система", "Кровообращение", "Пищеварение"],
    color: "#22c55e"
  },
  {
    id: "diversity",
    title: "Многообразие организмов",
    description: "Систематика и эволюция живого мира",
    difficulty: "Базовый-Повышенный",
    icon: "Trees",
    topics: ["Бактерии и грибы", "Растения", "Животные", "Вирусы"],
    color: "#4ade80"
  },
  {
    id: "evolution",
    title: "Эволюция живой природы",
    description: "Происхождение и развитие жизни на Земле",
    difficulty: "Повышенный",
    icon: "MountainSnow",
    topics: ["Эволюционное учение", "Микроэволюция", "Макроэволюция", "Антропогенез"],
    color: "#166534"
  },
  {
    id: "ecology",
    title: "Экосистемы и присущие им закономерности",
    description: "Взаимоотношения организма и среды",
    difficulty: "Повышенный",
    icon: "Globe",
    topics: ["Экологические факторы", "Популяции", "Экосистемы", "Биосфера"],
    color: "#16a34a"
  }
];

const TheoryCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Основные разделы теории</h2>
          <p className="text-gray-600">
            Мы разделили теоретический материал на логические блоки в соответствии с кодификатором ЕГЭ по биологии. 
            Выберите интересующий вас раздел, чтобы начать изучение.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link to={`/theory/${category.id}`} key={category.id} className="transition-transform duration-300 hover:scale-105">
              <Card className="h-full border-t-4" style={{ borderTopColor: category.color }}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: category.color }}
                    >
                      <Icon name={category.icon} className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.topics.map((topic, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Badge 
                    className="font-normal" 
                    variant={
                      category.difficulty === "Базовый" ? "outline" : 
                      category.difficulty === "Повышенный" ? "secondary" : 
                      "default"
                    }
                  >
                    {category.difficulty}
                  </Badge>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Icon name="ArrowRight" className="h-4 w-4" />
                    Изучить раздел
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheoryCategories;
