
import { Award, Users, BookOpen, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "First Female Rector",
      description: "Breaking barriers as the first woman to lead the Federal School of Surveying, Oyo"
    },
    {
      icon: Users,
      title: "Alumni Leadership",
      description: "A proud alumna who returned to transform her alma mater"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Ph.D. from Lancaster University as first Nigerian Schlumberger Foundation scholar"
    },
    {
      icon: Target,
      title: "Visionary Leader",
      description: "Championing the upgrade to a degree-awarding institution"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            About Dr. Dosumu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A distinguished academic leader whose journey from student to Rector exemplifies 
            dedication, excellence, and transformative vision in surveying education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Transformational Leadership
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Since assuming the role of Rector on December 3, 2018, Dr. Dosumu has spearheaded 
                unprecedented institutional growth. Her tenure has been marked by infrastructure 
                development, curriculum modernization, and a relentless pursuit of academic excellence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Born in Oyo and deeply rooted in the community, she brings a unique perspective 
                that combines global academic experience with local understanding, driving initiatives 
                that serve both the institution and the broader Nigerian society.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                <div className="text-gray-600">Years as Rector</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Seat Lecture Theater</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600">Modern Programs</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1st</div>
                <div className="text-gray-600">Female Rector</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
