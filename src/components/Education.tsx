import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface EducationProps {
  language: 'en' | 'ar';
}

const Education: React.FC<EducationProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'Education',
      degrees: [
        {
          level: 'PhD',
          field: 'History of Basic Sciences (History of Astronomy)',
          institution: 'University of Aleppo - Institute of Arab Scientific Heritage',
          year: '2025',
          grade: '86.4 (Excellent)',
          thesis: 'Ibn al-Shatir\'s Zij - Investigation and Study of Chapters 34-100',
          color: 'bg-purple-500'
        },
        {
          level: 'Master\'s',
          field: 'History of Basic Sciences (History of Astronomy)',
          institution: 'University of Aleppo - Institute of Arab Scientific Heritage',
          year: '2020',
          grade: '92.23 (Excellent)',
          thesis: 'Ibn al-Shatir\'s Zij - Investigation and Study of Chapters 1-33',
          color: 'bg-blue-500'
        },
        {
          level: 'Bachelor\'s',
          field: 'Informatics Engineering (Software Development)',
          institution: 'Syrian Virtual University',
          year: '2019',
          grade: '72.57 (Very Good)',
          thesis: '',
          color: 'bg-green-500'
        },
        {
          level: 'Bachelor\'s',
          field: 'Mathematics (Mathematical Analysis)',
          institution: 'University of Aleppo',
          year: '2013',
          grade: '78.36 (Very Good)',
          thesis: '',
          color: 'bg-pink-500'
        }
      ]
    },
    ar: {
      title: 'التحصيل العلمي',
      degrees: [
        {
          level: 'دكتوراه',
          field: 'تاريخ العلوم الأساسية (اختصاص تاريخ الفلك)',
          institution: 'جامعة حلب - معهد التراث العلمي العربي',
          year: '2025',
          grade: '86.4 (امتياز)',
          thesis: 'زيج ابن الشاطر - تحقيق ودراسة الأبواب من الرابع والثلاثين حتى المئة',
          color: 'bg-purple-500'
        },
        {
          level: 'ماجستير',
          field: 'تاريخ العلوم الأساسية (اختصاص تاريخ الفلك)',
          institution: 'جامعة حلب - معهد التراث العلمي العربي',
          year: '2020',
          grade: '92.23 (امتياز)',
          thesis: 'زيج ابن الشاطر - تحقيق ودراسة الأبواب من الأول حتى الثالث والثلاثون',
          color: 'bg-blue-500'
        },
        {
          level: 'إجازة',
          field: 'الهندسة المعلوماتية (اختصاص تطوير التطبيقات البرمجية)',
          institution: 'الجامعة الافتراضية السورية',
          year: '2019',
          grade: '72.57 (جيد جداً)',
          thesis: '',
          color: 'bg-green-500'
        },
        {
          level: 'إجازة',
          field: 'الرياضيات (اختصاص تحليل رياضي)',
          institution: 'جامعة حلب',
          year: '2013',
          grade: '78.36 (جيد جداً)',
          thesis: '',
          color: 'bg-pink-500'
        }
      ]
    }
  };

  return (
    <section className={`py-24 bg-gray-50 ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            {content[language].title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 animate-fadeInUp animation-delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {content[language].degrees.map((degree, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp border border-gray-100"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`${degree.color} p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{degree.level}</h3>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          <Calendar className="w-4 h-4 mr-1" />
                          {degree.year}
                        </span>
                        <span className="flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          <Award className="w-4 h-4 mr-1" />
                          {degree.grade}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-800 font-semibold mb-2">{degree.field}</p>
                    <p className="text-gray-600 mb-3">{degree.institution}</p>
                    
                    {degree.thesis && (
                      <div className="bg-gray-50 p-4 rounded-xl mt-4">
                        <p className="text-sm text-gray-700"><strong>Thesis:</strong> {degree.thesis}</p>
                      </div>
                    )}
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

export default Education;