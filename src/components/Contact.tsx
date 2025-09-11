
import { Mail, Phone, MapPin, Linkedin, BookOpen, Award, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Institution",
      details: ["Federal School of Surveying", "Oyo, Nigeria"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["rector@fss.edu.ng", "olayinka.dosumu@fss.edu.ng"]
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+234 811 111 2569", "Click to message on WhatsApp"],
      isPhone: true,
      phoneNumber: "2348111112569"
    }
  ];

  const personalProfile = [
    { label: "Origin", value: "Oyo, Nigeria" },
    { label: "Family", value: "Married with children" },
    { label: "Primary Education", value: "Ansarudeen Primary School, Oyo" },
    { label: "Secondary Education", value: "Notable institutions" },
    { label: "Professional Focus", value: "Educational leadership and innovation" }
  ];

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message = encodeURIComponent("Hello Dr. Dosumu, I would like to connect regarding the Federal School of Surveying.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Connect & Learn More
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reach out to learn more about initiatives at the Federal School of Surveying 
            or Dr. Dosumu's vision for surveying education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-amber-300">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                    {info.isPhone && info.phoneNumber ? (
                      <div>
                        <p className="text-gray-300 mb-2">{info.details[0]}</p>
                        <button
                          onClick={() => handleWhatsAppClick(info.phoneNumber!)}
                          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Message on WhatsApp</span>
                        </button>
                      </div>
                    ) : (
                      info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300">{detail}</p>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Links */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-amber-300">Professional Affiliations</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>SURCON Member</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <span>NIS Leader</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Profile */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-amber-300">Personal Profile</h3>
            <div className="bg-slate-800 rounded-xl p-8">
              <div className="space-y-6">
                {personalProfile.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-gray-400 font-medium">{item.label}</span>
                    <span className="text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <h4 className="text-lg font-bold mb-3">Core Belief</h4>
                <p className="text-gray-100 italic">
                  "Deeply committed to staff capacity building, student empowerment, 
                  and institutional excellence. Believes in the power of education to 
                  drive economic growth and sustainable development."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join the Transformation
            </h3>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Be part of the exciting journey as we reshape surveying education 
              and prepare the next generation of geospatial professionals.
            </p>
            <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Learn More About FSS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
