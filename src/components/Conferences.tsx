import React from 'react';
import { Presentation, MapPin, Calendar, Users } from 'lucide-react';

interface ConferencesProps {
  language: 'en' | 'ar';
}

const Conferences: React.FC<ConferencesProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'Conference Presentations',
      conferences: [
        {
          title: 'The Impact of Ptolemaic Theory on Arab Astronomy: Ibn al-Shatir al-Dimashqi as a Model',
          conference: '37th Conference on History of Science',
          date: 'November 28-29, 2023',
          location: 'Institute of Arab Scientific Heritage',
          year: '2023'
        },
        {
          title: 'The Skeptical Method of Ibn al-Shatir al-Dimashqi: "Nihayat al-Sul fi Tashih al-Usul" as a Model',
          conference: '35th Conference on History of Science',
          date: 'November 23-25, 2021',
          location: 'Institute of Arab Scientific Heritage',
          year: '2021'
        },
        {
          title: 'Astronomers in the Era of Kamal al-Din al-Farisi (d. 719 AH / 1319 CE)',
          conference: '34th Conference on History of Science',
          date: 'April 23-25, 2019',
          location: 'Institute of Arab Scientific Heritage',
          year: '2019'
        },
        {
          title: 'Al-Biruni\'s Scientific Contribution to Astronomical Calendars',
          conference: '33rd Conference on History of Science',
          date: 'May 8-10, 2018',
          location: 'Institute of Arab Scientific Heritage',
          year: '2018'
        },
        {
          title: 'Summaries of Ibn al-Shatir\'s Zij: Al-Kawm al-Rishi\'s "Tuhfat al-Nazir" Manuscript as a Model',
          conference: '32nd Conference on History of Science',
          date: 'May 16-18, 2017',
          location: 'Institute of Arab Scientific Heritage',
          year: '2017'
        }
      ]
    },
    ar: {
      title: 'المشاركات في المؤتمرات',
      conferences: [
        {
          title: 'أثر النظرية البطليمية في الفلك العربي ابن الشاطر الدمشقي أنموذجاً',
          conference: 'مؤتمر تاريخ العلم السابع والثلاثين',
          date: '28-29 نوفمبر 2023',
          location: 'معهد التراث العلمي العربي',
          year: '2023'
        },
        {
          title: 'المنهج الشكي عند ابن الشاطر الدمشقي "كتاب نهاية السول في تصحيح الأصول" أنموذجاً',
          conference: 'مؤتمر تاريخ العلم الخامس والثلاثين',
          date: '23-25 نوفمبر 2021',
          location: 'معهد التراث العلمي العربي',
          year: '2021'
        },
        {
          title: 'علماء الفلك في عصر كمال الدين الفارسي (ت719هـ/ 1319م)',
          conference: 'مؤتمر تاريخ العلم الرابع والثلاثين',
          date: '23-25 أبريل 2019',
          location: 'معهد التراث العلمي العربي',
          year: '2019'
        },
        {
          title: 'مساهمة البيروني العلميّة في علم التقاويم الفلكيّة',
          conference: 'مؤتمر تاريخ العلم الثالث والثلاثين',
          date: '8-10 مايو 2018',
          location: 'معهد التراث العلمي العربي',
          year: '2018'
        },
        {
          title: 'مختصرات زيج ابن الشاطر، مخطوط تحفة الناظر للكوم الريشي "أنموذجاً"',
          conference: 'مؤتمر تاريخ العلم الثاني والثلاثين',
          date: '16-18 مايو 2017',
          location: 'معهد التراث العلمي العربي',
          year: '2017'
        }
      ]
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
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-orange-500 hidden md:block"></div>
            
            <div className="space-y-8">
              {content[language].conferences.map((conf, index) => (
                <div 
                  key={index}
                  className="relative flex items-start space-x-8 group"
                >
                  <div className="relative z-10 bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                    <Presentation className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {conf.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-4 leading-relaxed">
                      {conf.title}
                    </h3>
                    
                    <div className="space-y-3 text-slate-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="font-medium">{conf.conference}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-green-500" />
                        <span>{conf.date}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        <span>{conf.location}</span>
                      </div>
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

export default Conferences;