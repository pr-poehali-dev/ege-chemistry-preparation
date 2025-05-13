
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TheoryCategories from "@/components/TheoryCategories";
import StudyGuide from "@/components/StudyGuide";
import StudyResources from "@/components/StudyResources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TheoryCategories />
        <StudyGuide />
        <StudyResources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
