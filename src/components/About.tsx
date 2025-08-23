import React from 'react';
import { BookOpen, Code, Star, Users } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'ar';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'About Me',
      description: 'I am a unique blend of academic researcher and technology professional, with a PhD in History of Astronomy and extensive experience in software development. My work bridges the gap between ancient astronomical heritage and modern technological applications.',
      highlights: [
        { icon: BookOpen, title: 'PhD in Astronomy History', desc: 'Specialized in Ibn al-Shatir\'s astronomical work', color: 'bg-blue-500' },
        { icon: Code, title: 'Software Developer', desc: 'Frontend development with modern frameworks', color: 'bg-purple-500' },
        { icon: Star, title: 'Mathematics Educator', desc: 'University lecturer and educational coordinator', color: 'bg-green-500' },
        { icon: Users, title: 'Community Leader', desc: 'Board member of Syrian Astronomical Society', color: 'bg-pink-500' },
      ]
    },
    ar: {
      title: 'نبذة عني',
      description: 'أنا مزيج فريد من الباحثة الأكاديمية ومحترفة التكنولوجيا، حاصلة على دكتوراه في تاريخ الفلك وخبرة واسعة في تطوير البرمجيات. عملي يربط بين التراث الفلكي القديم والتطبيقات التكنولوجية الحديثة.',
      highlights: [
        { icon: BookOpen, title: 'دكتوراه في تاريخ الفلك', desc: 'متخصصة في أعمال ابن الشاطر الفلكية', color: 'bg-blue-500' },
        { icon: Code, title: 'مطورة برمجيات', desc: 'تطوير الواجهات الأمامية بأحدث التقنيات', color: 'bg-purple-500' },
        { icon: Star, title: 'مدرسة رياضيات', desc: 'محاضرة جامعية ومنسقة تعليمية', color: 'bg-green-500' },
        { icon: Users, title: 'قائدة مجتمعية', desc: 'عضو مجلس إدارة الجمعية الفلكية السورية', color: 'bg-pink-500' },
      ]
    }
  };

  return (
    <section className={`py-24 bg-white ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            {content[language].title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 animate-fadeInUp animation-delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-relaxed text-center animate-fadeInUp animation-delay-400">
            {content[language].description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[language].highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp border border-gray-100"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;