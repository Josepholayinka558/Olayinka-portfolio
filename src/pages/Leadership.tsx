import { Building, Users, BookOpen, Lightbulb, Trophy, Target, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Leadership = () => {
  const achievements = [
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Led the construction of a modern 1,000-seat lecture theater and virtual library",
      impact: "Enhanced learning capacity and digital resources"
    },
    {
      icon: BookOpen,
      title: "Curriculum Modernization",
      description: "Introduced cutting-edge programs in cartography, GIS, photogrammetry, and remote sensing",
      impact: "Preparing students for the digital surveying era"
    },
    {
      icon: Lightbulb,
      title: "AI Integration Initiative",
      description: "Pioneered the integration of artificial intelligence in surveying education",
      impact: "Positioning FSS at the forefront of technological advancement"
    },
    {
      icon: Trophy,
      title: "Institutional Upgrade",
      description: "Championed the transformation of FSS into a degree-awarding institution",
      impact: "Elevating the school's academic status and recognition"
    },
    {
      icon: Users,
      title: "Staff Development",
      description: "Implemented comprehensive capacity building programs for faculty and staff",
      impact: "Strengthening institutional expertise and capabilities"
    },
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Developed long-term strategic plans for sustainable growth and excellence",
      impact: "Ensuring continued institutional advancement"
    }
  ];

  const positions = [
    {
      title: "Rector",
      institution: "Federal School of Surveying, Oyo",
      period: "December 2018 - Present",
      highlight: "First Female Rector"
    },
    {
      title: "Senior Lecturer",
      institution: "University of Lagos",
      period: "Previous Role",
      highlight: "Academic Excellence"
    },
    {
      title: "Adjunct Professor",
      institution: "University of Ilorin",
      period: "Concurrent Position",
      highlight: "Multi-institutional Impact"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Leadership & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming surveying education through innovative leadership, 
            strategic vision, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Leadership Positions */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-amber-300">Leadership Positions</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300">
                <h4 className="text-xl font-bold text-amber-300 mb-2">{position.title}</h4>
                <p className="text-gray-300 mb-2">{position.institution}</p>
                <p className="text-gray-400 text-sm mb-3">{position.period}</p>
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block">
                  {position.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-amber-300">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">{achievement.title}</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">{achievement.description}</p>
                <div className="border-t border-gray-600 pt-4">
                  <p className="text-amber-300 font-semibold text-sm">{achievement.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Button */}
        <div className="mt-20 text-center">
          <Link to="/admin">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <Settings className="w-5 h-5" />
              Admin Dashboard
            </button>
          </Link>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-200 italic leading-relaxed mb-6">
              "Surveying and geoinformatics are catalysts for self-employment, economic growth, 
              sustainable development, and national security. Our mission is to empower students 
              with the knowledge and skills to drive these transformations."
            </blockquote>
            <cite className="text-amber-300 font-semibold">Dr. Olayinka Nihinlola Dosumu</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
