
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: 1,
    title: "Строение атома и основы химии",
    description: "Задания 1-5",
    difficulty: "Базовый",
    icon: "Atom",
    topics: ["Строение электронных оболочек", "Периодическая система", "Химическая связь"],
    color: "#9b87f5"
  },
  {
    id: 2,
    title: "Неорганическая химия",
    description: "Задания 6-10",
    difficulty: "Базовый-Повышенный",
    icon: "Flask",
    topics: ["Характеристика элементов", "Химические свойства", "Реакции ионного обмена"],
    color: "#7E69AB"
  },
  {
    id: 3,
    title: "Органическая химия",
    description: "Задания 11-16",
    difficulty: "Базовый-Повышенный",
    icon: "Pipette",
    topics: ["Углеводороды", "Кислородсодержащие соединения", "Белки и аминокислоты"],
    color: "#6E59A5"
  },
  {
    id: 4,
    title: "Расчётные задачи",
    description: "Задания 20-25",
    difficulty: "Повышенный",
    icon: "Calculator",
    topics: ["Массовая доля", "Молярная концентрация", "Тепловой эффект реакции"],
    color: "#1A1F2C"
  },
  {
    id: 5,
    title: "Химические реакции",
    description: "Задания 17-19",
    difficulty: "Базовый-Повышенный",
    icon: "Workflow",
    topics: ["Окислительно-восстановительные реакции", "Электролиз", "Гидролиз"],
    color: "#D6BCFA"
  },
  {
    id: 6,
    title: "Задачи высокого уровня",
    description: "Задания 26-28",
    difficulty: "Высокий",
    icon: "BrainCircuit",
    topics: ["Комплексные задачи", "Цепочки превращений", "Задачи на установление структуры"],
    color: "#1A1F2C"
  }
];

const TaskCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Тематические разделы</h2>
          <p className="text-gray-600">
            Мы разделили все задания ЕГЭ по химии на логические блоки для более эффективной подготовки. 
            Выберите интересующий вас раздел, чтобы начать решать задания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id} className="transition-transform duration-300 hover:scale-105">
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
                    Перейти к разделу
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

export default TaskCategories;
