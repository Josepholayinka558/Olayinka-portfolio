
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      year: "2010",
      degree: "Ph.D.",
      institution: "Lancaster University, UK",
      details: "First Nigerian Schlumberger Foundation Scholar",
      distinction: "Groundbreaking Research",
      color: "from-purple-500 to-indigo-600"
    },
    {
      year: "2001",
      degree: "M.Sc.",
      institution: "University of Lagos",
      details: "Distinction",
      distinction: "Outstanding Performance",
      color: "from-blue-500 to-cyan-600"
    },
    {
      year: "1998",
      degree: "B.Eng.",
      institution: "University of Lagos",
      details: "First Class Honours",
      distinction: "Academic Excellence",
      color: "from-green-500 to-teal-600"
    },
    {
      year: "1995",
      degree: "HND",
      institution: "Federal School of Surveying, Oyo",
      details: "Distinction",
      distinction: "Foundation of Excellence",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Academic Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A remarkable educational trajectory marked by consistent excellence and 
            groundbreaking achievements across multiple prestigious institutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-orange-400 hidden lg:block"></div>

          {educationData.map((edu, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} border-4 border-white shadow-lg`}></div>
              </div>

              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color}`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{edu.year}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mb-3">{edu.institution}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="font-semibold text-amber-600">{edu.details}</span>
                  </div>
                  
                  <p className="text-gray-600 italic">{edu.distinction}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Registration */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Professional Registration</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">SURCON</div>
              <div className="text-blue-200">Registration No. 1340</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">NIS</div>
              <div className="text-blue-200">Active Member & Committee Leader</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
