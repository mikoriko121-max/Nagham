import React from 'react';
import { BookOpen, FileText, Calendar } from 'lucide-react';

interface ResearchProps {
  language: 'en' | 'ar';
}

const Research: React.FC<ResearchProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'Research & Publications',
      publications: [
        {
          title: 'The Science of Astronomical Calendars in Ibn al-Shatir al-Dimashqi\'s Zij (704-777 AH / 1306-1376 CE)',
          journal: 'Aleppo University Research Journal, History of Science among Arabs Series',
          issue: 'Issue 14, 2019',
          type: 'Journal Article'
        },
        {
          title: 'Investigation and Study of Chapter Eight: "On Knowing the Calendar of the Five Wandering Planets" in Ibn al-Shatir\'s Zij - Jupiter\'s Calendar as a Model',
          journal: 'Aleppo University Research Journal, History of Science among Arabs Series',
          issue: '2020',
          type: 'Journal Article'
        }
      ],
      conferences: [
        {
          title: 'The Impact of Ptolemaic Theory on Arab Astronomy: Ibn al-Shatir al-Dimashqi as a Model',
          conference: '37th Conference on History of Science',
          date: 'November 28-29, 2023',
          location: 'Institute of Arab Scientific Heritage'
        },
        {
          title: 'The Skeptical Method of Ibn al-Shatir al-Dimashqi: "Nihayat al-Sul fi Tashih al-Usul" as a Model',
          conference: '35th Conference on History of Science',
          date: 'November 23-25, 2021',
          location: 'Institute of Arab Scientific Heritage'
        }
      ]
    },
    ar: {
      title: 'البحوث والمنشورات',
      publications: [
        {
          title: 'علم التقاويم الفلكيّة في زيج ابن الشاطر الدمشقي (704-777هـ/1306-1376م)',
          journal: 'مجلة بحوث جامعة حلب، سلسلة تاريخ العلوم عند العرب',
          issue: 'العدد 14 لعام 2019',
          type: 'مقال علمي'
        },
        {
          title: 'تحقيق ودراسة الباب الثامن "في معرفة تقويم الكواكب الخمسة السيّارة" في زيج ابن الشاطر "تقويم كوكب المشتري" أنموذجاً',
          journal: 'مجلة بحوث جامعة حلب، سلسلة تاريخ العلوم عند العرب',
          issue: 'لعام 2020',
          type: 'مقال علمي'
        }
      ],
      conferences: [
        {
          title: 'أثر النظرية البطليمية في الفلك العربي ابن الشاطر الدمشقي أنموذجاً',
          conference: 'مؤتمر تاريخ العلم السابع والثلاثين',
          date: '28-29 نوفمبر 2023',
          location: 'معهد التراث العلمي العربي'
        },
        {
          title: 'المنهج الشكي عند ابن الشاطر الدمشقي "كتاب نهاية السول في تصحيح الأصول" أنموذجاً',
          conference: 'مؤتمر تاريخ العلم الخامس والثلاثين',
          date: '23-25 نوفمبر 2021',
          location: 'معهد التراث العلمي العربي'
        }
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Publications */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-amber-500" />
                {language === 'en' ? 'Publications' : 'المنشورات'}
              </h3>
              
              <div className="space-y-6">
                {content[language].publications.map((pub, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {pub.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-800 mb-3 leading-relaxed">
                      {pub.title}
                    </h4>
                    
                    <p className="text-slate-600 mb-2">{pub.journal}</p>
                    <p className="text-sm text-amber-600 font-semibold">{pub.issue}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conferences */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-amber-500" />
                {language === 'en' ? 'Conference Presentations' : 'المؤتمرات'}
              </h3>
              
              <div className="space-y-6">
                {content[language].conferences.map((conf, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <h4 className="text-lg font-bold text-slate-800 mb-3 leading-relaxed">
                      {conf.title}
                    </h4>
                    
                    <div className="space-y-2 text-slate-600">
                      <p>{conf.conference}</p>
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-amber-500" />
                        {conf.date}
                      </div>
                      <p className="text-sm">{conf.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;