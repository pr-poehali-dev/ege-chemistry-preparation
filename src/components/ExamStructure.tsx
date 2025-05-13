
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

const ExamStructure = () => {
  const examParts = [
    {
      id: 1,
      title: "Тестовая часть",
      description: "Задания 1-19",
      icon: "CheckSquare",
      color: "#9b87f5",
      percentage: 55,
      details: "Задания с кратким ответом: анализ химического вещества, строение атома, химические связи и др."
    },
    {
      id: 2,
      title: "Расчетные задачи",
      description: "Задания 20-25",
      icon: "Calculator",
      color: "#7E69AB",
      percentage: 25,
      details: "Задачи на растворы, тепловой эффект реакции, электролиз, химическое равновесие и др."
    },
    {
      id: 3,
      title: "Задания высокого уровня",
      description: "Задания 26-28",
      icon: "BrainCircuit",
      color: "#1A1F2C",
      percentage: 20,
      details: "Задачи на органические и неорганические вещества, окислительно-восстановительные реакции."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Структура ЕГЭ по химии 2025</h2>
          <p className="text-gray-600">
            Экзамен длится 3 часа 30 минут (210 минут) и содержит 28 заданий, разделенных на три части. 
            Максимальный первичный балл за выполнение всей работы – 56.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examParts.map((part) => (
            <Card key={part.id} className="hover-scale">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center" 
                  style={{ backgroundColor: part.color }}
                >
                  <Icon name={part.icon} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>{part.title}</CardTitle>
                  <CardDescription>{part.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Доля от общего балла</span>
                  <span className="font-medium">{part.percentage}%</span>
                </div>
                <Progress value={part.percentage} className="h-2 mb-4" />
                <p className="text-gray-700 text-sm mt-4">{part.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm max-w-3xl mx-auto border border-chemistry-light">
          <h3 className="text-xl font-bold mb-4 text-chemistry-primary">Важно знать</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Icon name="Info" className="h-5 w-5 text-chemistry-primary mt-0.5 flex-shrink-0" />
              <span>Разрешается использовать непрограммируемый калькулятор</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="ListChecks" className="h-5 w-5 text-chemistry-primary mt-0.5 flex-shrink-0" />
              <span>Периодическая система химических элементов Д.И. Менделеева выдается в составе КИМ</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="FileSpreadsheet" className="h-5 w-5 text-chemistry-primary mt-0.5 flex-shrink-0" />
              <span>Таблица растворимости и ряд напряжений металлов также выдаются вместе с вариантом</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Clock" className="h-5 w-5 text-chemistry-primary mt-0.5 flex-shrink-0" />
              <span>Рекомендуемое время выполнения: тестовая часть – 60-90 минут, расчетная часть – 60-90 минут, задания высокого уровня – 40-60 минут</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExamStructure;
