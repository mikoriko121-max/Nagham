import React from 'react';
import { Award, MapPin, Calendar } from 'lucide-react';

interface TrainingProps {
  language: 'en' | 'ar';
}

const Training: React.FC<TrainingProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'Training & Certifications',
      trainings: [
        { title: 'Astronomical Skills Course', provider: 'Arab Union for Space and Astronomy Sciences', location: 'Jordan - Remote', year: '2023' },
        { title: 'Project Proposal Writing and Project Lifecycle Management for NGOs', provider: 'CEP - NGO Empowerment Program UNDP', location: 'Damascus', year: '2023' },
        { title: 'C4D Workshop', provider: 'Education and Literacy Association', location: 'Aleppo', year: '2022' },
        { title: 'Development Project Management Principles', provider: 'Sanad Development Foundation', location: 'Aleppo', year: '2021' },
        { title: 'Values Course', provider: 'Education and Literacy Association', location: 'Aleppo', year: '2021' },
        { title: 'Active Learning', provider: 'Education and Literacy Association', location: 'Aleppo', year: '2020' },
        { title: 'Train of Trainers (TOT)', provider: 'Tawasul Center', location: 'Aleppo', year: '2020' },
        { title: 'Fundamentals and Principles in Astronomy', provider: 'Syrian Astronomical Society', location: 'Aleppo', year: '2019' },
        { title: 'Voluntary Work and Volunteer Management', provider: 'Charitable Associations Management', location: 'Aleppo', year: '2019' },
        { title: 'C# & SQL', provider: 'CPC', location: 'Aleppo', year: '2017' },
        { title: 'C#', provider: 'CPC', location: 'Aleppo', year: '2016' },
        { title: 'Arabic Calligraphy and Heritage Fundamentals', provider: 'Institute of Arab Scientific Heritage', location: 'Aleppo', year: '2016' }
      ]
    },
    ar: {
      title: 'التدريب والشهادات',
      trainings: [
        { title: 'دورة المهارات الفلكية', provider: 'الاتحاد العربي لعلوم الفضاء والفلك', location: 'الأردن - عن بعد', year: '2023' },
        { title: 'كتابة مقترحات المشاريع وإدارة دورة حياة المشروع للمنظمات الأهلية', provider: 'CEP - برنامج تمكين المنظمات الأهلية UNDP', location: 'دمشق', year: '2023' },
        { title: 'ورشة C4D', provider: 'جمعية التعليم ومكافحة الأمية', location: 'حلب', year: '2022' },
        { title: 'مبادئ إدارة المشاريع التنموية', provider: 'مؤسسة سند التنموية', location: 'حلب', year: '2021' },
        { title: 'دورة قيم', provider: 'جمعية التعليم ومكافحة الأمية', location: 'حلب', year: '2021' },
        { title: 'التعلم النشط', provider: 'جمعية التعليم ومكافحة الأمية', location: 'حلب', year: '2020' },
        { title: 'دورة تدريب المُدربين TOT', provider: 'مركز تواصل', location: 'حلب', year: '2020' },
        { title: 'أساسيات ومبادئ في علم الفلك', provider: 'الجمعيّة الفلكيّة السورية', location: 'حلب', year: '2019' },
        { title: 'إدارة العمل التطوعي والمتطوعين', provider: 'إدارة الجمعيات الخيرية', location: 'حلب', year: '2019' },
        { title: 'C# & SQL', provider: 'CPC', location: 'حلب', year: '2017' },
        { title: 'C#', provider: 'CPC', location: 'حلب', year: '2016' },
        { title: 'أصول الخط العربي والتراث', provider: 'معهد التراث العلمي العربي', location: 'حلب', year: '2016' }
      ]
    }
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content[language].trainings.map((training, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                      {training.year}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">
                  {training.title}
                </h3>
                
                <div className="space-y-2 text-sm text-slate-600">
                  <p className="font-medium">{training.provider}</p>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-amber-500" />
                    {training.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;