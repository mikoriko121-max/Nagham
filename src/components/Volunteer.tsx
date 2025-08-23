import React from 'react';
import { Heart, Users, BookOpen, Star } from 'lucide-react';

interface VolunteerProps {
  language: 'en' | 'ar';
}

const Volunteer: React.FC<VolunteerProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'Volunteer Experience & Memberships',
      volunteer: [
        {
          title: 'Syrian Astronomical Society',
          role: 'Volunteer',
          period: 'Since 2018',
          type: 'volunteer'
        },
        {
          title: 'Light Initiative',
          role: 'Volunteer (Book Recording for the Blind)',
          period: 'Since 2018',
          type: 'volunteer'
        },
        {
          title: 'Education and Literacy Association',
          role: 'Volunteer',
          period: 'Since 2020',
          type: 'volunteer'
        }
      ],
      memberships: [
        {
          title: 'Syrian Astronomical Society in Aleppo',
          role: 'Board Member',
          period: '2018-2024',
          type: 'membership'
        },
        {
          title: 'Education and Literacy Association in Aleppo',
          role: 'General Assembly Member',
          period: 'Since 2022',
          type: 'membership'
        }
      ]
    },
    ar: {
      title: 'الخبرات التطوعية والعضويات',
      volunteer: [
        {
          title: 'الجمعية الفلكية السورية',
          role: 'متطوعة',
          period: 'منذ عام 2018',
          type: 'volunteer'
        },
        {
          title: 'مبادرة ضوء',
          role: 'متطوعة (تسجيل الكتب للمكفوفين)',
          period: 'منذ عام 2018',
          type: 'volunteer'
        },
        {
          title: 'جمعية التعليم ومكافحة الأمية',
          role: 'متطوعة',
          period: 'منذ عام 2020',
          type: 'volunteer'
        }
      ],
      memberships: [
        {
          title: 'الجمعية الفلكية السورية في حلب',
          role: 'عضو مجلس إدارة',
          period: '2018-2024',
          type: 'membership'
        },
        {
          title: 'جمعية التعليم ومكافحة الأمية في حلب',
          role: 'عضو هيئة عامة',
          period: 'منذ عام 2022',
          type: 'membership'
        }
      ]
    }
  };

  const getIcon = (type: string) => {
    return type === 'volunteer' ? Heart : Star;
  };

  const getColor = (type: string) => {
    return type === 'volunteer' 
      ? 'from-pink-500 to-rose-500' 
      : 'from-purple-600 to-indigo-700';
  };

  const getBgColor = (type: string) => {
    return type === 'volunteer' 
      ? 'bg-pink-100 text-pink-800' 
      : 'bg-purple-100 text-purple-800';
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-slate-50 to-blue-50 ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Volunteer Experience */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-pink-500" />
                {language === 'en' ? 'Volunteer Experience' : 'الخبرات التطوعية'}
              </h3>
              
              <div className="space-y-6">
                {content[language].volunteer.map((vol, index) => {
                  const IconComponent = getIcon(vol.type);
                  return (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-br ${getColor(vol.type)} p-3 rounded-lg flex-shrink-0`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-slate-800">{vol.title}</h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBgColor(vol.type)}`}>
                              {vol.period}
                            </span>
                          </div>
                          <p className="text-slate-600">{vol.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Memberships */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-500" />
                {language === 'en' ? 'Professional Memberships' : 'العضويات المهنية'}
              </h3>
              
              <div className="space-y-6">
                {content[language].memberships.map((mem, index) => {
                  const IconComponent = getIcon(mem.type);
                  return (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-br ${getColor(mem.type)} p-3 rounded-lg flex-shrink-0`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-slate-800">{mem.title}</h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBgColor(mem.type)}`}>
                              {mem.period}
                            </span>
                          </div>
                          <p className="text-slate-600">{mem.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;