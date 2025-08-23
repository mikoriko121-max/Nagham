import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface ExperienceProps {
  language: 'en' | 'ar';
}

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'Professional Experience',
      experiences: [
        {
          title: 'Front End Developer - Vue.js',
          company: 'Zenobia Company',
          period: '2023-2024',
          type: 'Technology'
        },
        {
          title: 'Community Initiatives Coordinator',
          company: 'Al-Taaluf Association',
          period: '2023-2024',
          type: 'Management'
        },
        {
          title: 'Remedial Education Project Coordinator',
          company: 'Education and Literacy Association',
          period: '2022-2023',
          type: 'Education'
        },
        {
          title: 'Front End Developer (CSS, HTML, WordPress)',
          company: 'Zenobia Company',
          period: '2020-2023',
          type: 'Technology'
        },
        {
          title: 'Small Astronomer Program Coordinator',
          company: 'Syrian Astronomical Society',
          period: '2020-2023',
          type: 'Education'
        },
        {
          title: 'University Lecturer',
          company: 'University of Aleppo - Faculty of Sciences',
          period: '2014-2017',
          type: 'Academia'
        }
      ]
    },
    ar: {
      title: 'الخبرة المهنية',
      experiences: [
        {
          title: 'مطورة واجهات أمامية - Vue.js',
          company: 'شركة زنوبيا',
          period: '2023-2024',
          type: 'تكنولوجيا'
        },
        {
          title: 'منسق مبادرات مجتمعية',
          company: 'جمعية التآلف',
          period: '2023-2024',
          type: 'إدارة'
        },
        {
          title: 'منسق مشروع التعليم الترميمي',
          company: 'جمعية التعليم ومكافحة الأمية',
          period: '2022-2023',
          type: 'تعليم'
        },
        {
          title: 'مطورة واجهات أمامية (CSS, HTML, WordPress)',
          company: 'شركة زنوبيا',
          period: '2020-2023',
          type: 'تكنولوجيا'
        },
        {
          title: 'منسق برنامج الفلكي الصغير',
          company: 'الجمعية الفلكية السورية',
          period: '2020-2023',
          type: 'تعليم'
        },
        {
          title: 'محاضرة جامعية',
          company: 'جامعة حلب - كلية العلوم',
          period: '2014-2017',
          type: 'أكاديمي'
        }
      ]
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'technology':
      case 'تكنولوجيا':
        return 'bg-blue-100 text-blue-800';
      case 'education':
      case 'تعليم':
        return 'bg-green-100 text-green-800';
      case 'academia':
      case 'أكاديمي':
        return 'bg-purple-100 text-purple-800';
      case 'management':
      case 'إدارة':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className={`py-20 bg-white ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-orange-500"></div>
            
            <div className="space-y-12">
              {content[language].experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative flex items-start space-x-8 group"
                >
                  <div className="relative z-10 bg-gradient-to-br from-amber-500 to-orange-500 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-slate-600 mb-2">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.company}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;