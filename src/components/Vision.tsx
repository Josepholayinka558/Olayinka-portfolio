
import { Rocket, Globe, Users, Zap, Target, TrendingUp } from "lucide-react";

const Vision = () => {
  const visionPoints = [
    {
      icon: Rocket,
      title: "Innovation Leadership",
      description: "Positioning FSS as a pioneer in modern surveying education and technology integration"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Aligning curriculum with international best practices while addressing local needs"
    },
    {
      icon: Users,
      title: "Student Empowerment",
      description: "Developing confident, skilled professionals ready for the digital surveying landscape"
    },
    {
      icon: Zap,
      title: "Technological Integration",
      description: "Embracing AI, GIS, and emerging technologies in surveying education"
    }
  ];

  const impactAreas = [
    {
      title: "Economic Growth",
      description: "Fostering entrepreneurship and self-employment through practical surveying skills",
      metric: "Increased graduate employment rate"
    },
    {
      title: "National Security",
      description: "Contributing to national mapping and geospatial intelligence capabilities",
      metric: "Enhanced territorial mapping"
    },
    {
      title: "Sustainable Development",
      description: "Supporting environmental monitoring and urban planning initiatives",
      metric: "Environmental impact projects"
    },
    {
      title: "Professional Excellence",
      description: "Raising the standard of surveying practice across Nigeria",
      metric: "Industry recognition"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Vision & Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving transformational change in surveying education with a clear vision 
            for excellence, innovation, and societal impact.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white mb-20">
          <div className="text-center">
            <Target className="w-16 h-16 mx-auto mb-6 text-amber-300" />
            <h3 className="text-3xl font-bold mb-6">Institutional Vision</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To transform the Federal School of Surveying into a world-class degree-awarding 
              institution that produces globally competitive surveyors and geoinformation scientists, 
              while contributing to Nigeria's sustainable development through cutting-edge research 
              and innovation.
            </p>
          </div>
        </div>

        {/* Vision Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {visionPoints.map((point, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Areas */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Areas of Impact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">{area.title}</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">{area.description}</p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 font-semibold text-sm">{area.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-200 italic leading-relaxed mb-6">
              "Education is not just about transferring knowledge; it's about igniting passion, 
              fostering innovation, and empowering individuals to transform their communities 
              and contribute to national development."
            </blockquote>
            <cite className="text-amber-300 font-semibold">Dr. Olayinka Nihinlola Dosumu</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
