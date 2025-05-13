
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

const StudyGuide = () => {
  const studySteps = [
    {
      id: 1,
      title: "Основы теории",
      description: "Изучите базовые концепции и термины",
      icon: "BookOpen",
      color: "#4ade80",
      percentage: 100,
      details: "Начните с изучения основных терминов, законов и понятий. Создайте глоссарий и системно организуйте новую информацию."
    },
    {
      id: 2,
      title: "Углубленное понимание",
      description: "Разберитесь в сложных механизмах и процессах",
      icon: "Workflow",
      color: "#16a34a",
      percentage: 70,
      details: "Углубитесь в изучение биологических процессов, причинно-следственных связей. Уделите внимание механизмам и схемам."
    },
    {
      id: 3,
      title: "Практическое применение",
      description: "Примените теорию к конкретным задачам и примерам",
      icon: "FlaskConical",
      color: "#22c55e",
      percentage: 40,
      details: "Закрепите знания решением практических задач, работой с графиками и таблицами. Научитесь анализировать биологические данные."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Как эффективно изучать теорию</h2>
          <p className="text-gray-600">
            Освоение биологической теории требует системного подхода. 
            Предлагаем следовать нашему трехступенчатому плану для максимально эффективной подготовки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studySteps.map((step) => (
            <Card key={step.id} className="hover-scale">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center" 
                  style={{ backgroundColor: step.color }}
                >
                  <Icon name={step.icon} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Прогресс усвоения</span>
                  <span className="font-medium">{step.percentage}%</span>
                </div>
                <Progress value={step.percentage} className="h-2 mb-4" />
                <p className="text-gray-700 text-sm mt-4">{step.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm max-w-3xl mx-auto border border-biology-light">
          <h3 className="text-xl font-bold mb-4 text-biology-primary">Советы по изучению теории</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Icon name="ClipboardCheck" className="h-5 w-5 text-biology-primary mt-0.5 flex-shrink-0" />
              <span>Составляйте краткие конспекты, используя схемы и таблицы</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Clock" className="h-5 w-5 text-biology-primary mt-0.5 flex-shrink-0" />
              <span>Разделите материал на небольшие блоки и изучайте их регулярно</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Link" className="h-5 w-5 text-biology-primary mt-0.5 flex-shrink-0" />
              <span>Связывайте новую информацию с уже известной, ищите взаимосвязи</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Brain" className="h-5 w-5 text-biology-primary mt-0.5 flex-shrink-0" />
              <span>Применяйте методы активного запоминания: пересказ, обучение других, визуализация</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudyGuide;
