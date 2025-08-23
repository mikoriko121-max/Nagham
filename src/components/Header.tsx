import React from 'react';
import { Globe, Download, Mail, Phone, Star } from 'lucide-react';
import Picture1 from '../img/Picture1.jpg';
interface HeaderProps {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      name: 'Dr. Nagham Masharqeh',
      title: 'PhD in History of Astronomy',
      subtitle1: 'Software Developer',
      subtitle2: 'Mathematics Educator',
      description: 'Bridging Ancient Astronomical Heritage with Modern Technology',
      downloadCV: 'Download CV',
    },
    ar: {
      name: 'د. نغم مشارقه',
      title: 'دكتوراه في تاريخ الفلك',
      subtitle1: 'مطورة برمجيات',
      subtitle2: 'مدرسة رياضيات',
      description: 'ربط التراث الفلكي القديم بالتكنولوجيا الحديثة',
      downloadCV: 'تحميل السيرة الذاتية',
    }
  };

  return (
    <header className={`relative min-h-screen bg-white overflow-hidden ${isRTL ? 'rtl' : ''}`}>
     
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-500 rounded-full opacity-10 animate-bounce"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">NM</span>
          </div>
          
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </nav>

        {/* Hero Content */}
        <div className={`flex flex-col lg:flex-row items-center justify-between pt-20 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
    <div
  className={`flex-1 space-y-8 mb-12 lg:mb-0`}
  style={isRTL ? { direction: 'rtl' } : {}}
>

           <div className={`space-y-4 `}>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-fadeInUp">
                {content[language].title}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight animate-fadeInUp animation-delay-200" >
                {content[language].name}
              </h1>
              
              <div className="flex flex-wrap gap-3 animate-fadeInUp animation-delay-400">
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
                  {content[language].subtitle1}
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                  {content[language].subtitle2}
                </span>
              </div>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed animate-fadeInUp animation-delay-600">
                {content[language].description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-800">
              <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Download className="w-5 h-5" />
                <span>{content[language].downloadCV}</span>
              </button>
              
              <div className="flex gap-3">
                <a href="mailto:nagham1990m@hotmail.com" className="flex items-center justify-center w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-6 h-6 text-gray-600" />
                </a>
                <a href="tel:+963999025537" className="flex items-center justify-center w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-6 h-6 text-gray-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image/Avatar */}
          <div className="flex-shrink-0 animate-fadeInUp animation-delay-1000">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-8xl font-bold text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={Picture1} alt="NM" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;