
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExamStructure from "@/components/ExamStructure";
import TaskCategories from "@/components/TaskCategories";
import UsefulResources from "@/components/UsefulResources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ExamStructure />
        <TaskCategories />
        <UsefulResources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
