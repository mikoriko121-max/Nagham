import React from 'react';
import { Code, Palette, BookOpen, Globe, Users, Zap } from 'lucide-react';

interface SkillsProps {
  language: 'en' | 'ar';
}

const Skills: React.FC<SkillsProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'Skills & Expertise',
      categories: [
        {
          icon: Code,
          title: 'Programming & Development',
          skills: ['Vue.js', 'CSS/HTML', 'WordPress', 'C# & SQL', 'Frontend Development'],
          color: 'bg-blue-500'
        },
        {
          icon: Palette,
          title: 'Design & Media',
          skills: ['Photoshop (Intermediate)', 'Canva (Advanced)', 'Adobe Premiere (Intermediate)'],
          color: 'bg-purple-500'
        },
        {
          icon: BookOpen,
          title: 'Academic Research',
          skills: ['History of Astronomy', 'Mathematical Analysis', 'Arabic Scientific Heritage', 'Academic Writing'],
          color: 'bg-green-500'
        },
        {
          icon: Globe,
          title: 'Languages',
          skills: ['Arabic (Native)', 'English (Advanced)'],
          color: 'bg-pink-500'
        },
        {
          icon: Users,
          title: 'Teaching & Training',
          skills: ['University Lecturing', 'Digital Learning Techniques', 'Project Management', 'Volunteer Management'],
          color: 'bg-indigo-500'
        },
        {
          icon: Zap,
          title: 'Specialized Knowledge',
          skills: ['Astronomical Calendars', 'Ibn al-Shatir Studies', 'Digital Education', 'Community Initiatives'],
          color: 'bg-orange-500'
        }
      ]
    },
    ar: {
      title: 'المهارات والخبرات',
      categories: [
        {
          icon: Code,
          title: 'البرمجة والتطوير',
          skills: ['Vue.js', 'CSS/HTML', 'WordPress', 'C# & SQL', 'تطوير الواجهات الأمامية'],
          color: 'bg-blue-500'
        },
        {
          icon: Palette,
          title: 'التصميم والوسائط',
          skills: ['فوتوشوب (متوسط)', 'كانفا (متقدم)', 'أدوب بريمر (متوسط)'],
          color: 'bg-purple-500'
        },
        {
          icon: BookOpen,
          title: 'البحث الأكاديمي',
          skills: ['تاريخ الفلك', 'التحليل الرياضي', 'التراث العلمي العربي', 'الكتابة الأكاديمية'],
          color: 'bg-green-500'
        },
        {
          icon: Globe,
          title: 'اللغات',
          skills: ['العربية (الأم)', 'الإنجليزية (متقدم)'],
          color: 'bg-pink-500'
        },
        {
          icon: Users,
          title: 'التدريس والتدريب',
          skills: ['المحاضرات الجامعية', 'تقنيات التعلم الرقمي', 'إدارة المشاريع', 'إدارة المتطوعين'],
          color: 'bg-indigo-500'
        },
        {
          icon: Zap,
          title: 'المعرفة المتخصصة',
          skills: ['التقاويم الفلكية', 'دراسات ابن الشاطر', 'التعليم الرقمي', 'المبادرات المجتمعية'],
          color: 'bg-orange-500'
        }
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

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[language].categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp border border-gray-100"
                  style={{ animationDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`${category.color} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-gray-50 px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                      >
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;