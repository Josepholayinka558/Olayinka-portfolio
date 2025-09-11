
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="leadership">
          <Leadership />
        </section>
        <section id="vision">
          <Vision />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
