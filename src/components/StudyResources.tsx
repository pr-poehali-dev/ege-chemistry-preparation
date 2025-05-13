
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const resources = [
  {
    id: 1,
    title: "Банк заданий ФИПИ",
    description: "Официальный источник заданий и методических материалов",
    link: "https://fipi.ru",
    icon: "FileText"
  },
  {
    id: 2,
    title: "Интерактивный атлас",
    description: "Анатомические и биологические схемы с пояснениями",
    link: "#",
    icon: "Map"
  },
  {
    id: 3,
    title: "Видеолекции по биологии",
    description: "Подробные объяснения сложных тем от опытных преподавателей",
    link: "#",
    icon: "Video"
  },
  {
    id: 4,
    title: "Таблицы и схемы",
    description: "Систематизированные материалы для визуального запоминания",
    link: "#",
    icon: "Table2"
  }
];

const StudyResources = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Полезные ресурсы для изучения</h2>
          <p className="text-gray-600">
            Дополнительные материалы, которые помогут вам глубже понять теоретические аспекты биологии
            и подготовиться к сдаче ЕГЭ на высокий балл.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-biology-primary/10 flex items-center justify-center mb-4">
                  <Icon name={resource.icon} className="h-6 w-6 text-biology-primary" />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-biology-primary text-biology-primary hover:bg-biology-primary/10"
                  onClick={() => window.open(resource.link, "_blank")}
                >
                  Открыть ресурс
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-biology-light/50 rounded-lg shadow p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-2 text-biology-primary">Хотите больше материалов?</h3>
              <p className="text-gray-600 mb-4">
                Подпишитесь на нашу рассылку, чтобы получать актуальные теоретические материалы, 
                схемы и таблицы для подготовки к ЕГЭ по биологии.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button className="bg-biology-primary hover:bg-biology-secondary">
                  Подписаться
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-biology-primary/20 rounded-full flex items-center justify-center">
                <Icon name="Mail" className="h-16 w-16 text-biology-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyResources;
