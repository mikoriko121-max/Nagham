
const bf = ({ language }) => {
  const n = language === "ar" ? {
    title: "نبذة عني",
    content: "أنا نغم مشريقة، حاصلة على شهادة دكتوراه في تاريخ العلوم الأساسية (تخصص تاريخ الفلك) من جامعة حلب. لدي خبرة أكاديمية واسعة كمحاضرة في الرياضيات، بالإضافة إلى خبرة في تطوير البرمجيات كمطوّرة Front-End و Full-Stack. كما أعمل في مجال التعليم المجتمعي والمبادرات التطوعية، وأتمتع بمهارات متعددة في التصميم والتحرير والبحث العلمي."
  } : {
    title: "About Me",
    content: "I am Nagham Mashariqa, holding a Ph.D. in History of Basic Sciences (specializing in the history of astronomy) from the University of Aleppo. I have extensive academic experience as a mathematics lecturer, alongside professional experience as a Front-End and Full-Stack Developer. I am also actively engaged in community education initiatives and volunteer work, with additional skills in design, video editing, and scientific research."
  };
  return a.jsxs("section", { className: "about section", children: [a.jsx("h2", { className: "section-title", children: n.title }), a.jsx("p", { className: "section-text", children: n.content })] });
};

const ep = ({ language }) => {
  const n = language === "ar" ? [{
    degree: "دكتوراه في تاريخ العلوم الأساسية (تخصص تاريخ الفلك)",
    institution: "جامعة حلب - معهد تاريخ العلوم العربية",
    year: "2025",
    gpa: "86.4",
    thesis: "زيج ابن الشاطر لأبي الحسن ابن الشاطر: تحقيق ودراسة من الفصل الأول إلى الفصل الثالث والثلاثين"
  }, {
    degree: "ماجستير في تاريخ العلوم الأساسية (تخصص تاريخ الفلك)",
    institution: "جامعة حلب - معهد تاريخ العلوم العربية",
    year: "2020",
    gpa: "92.23",
    thesis: "زيج ابن الشاطر لأبي الحسن ابن الشاطر: تحقيق ودراسة من الفصل الأول إلى الفصل الثالث والثلاثين"
  }, {
    degree: "بكالوريوس في هندسة نظم المعلومات (تخصص تطوير تطبيقات البرمجيات)",
    institution: "الجامعة الافتراضية السورية",
    year: "2019",
    gpa: "72.57"
  }, {
    degree: "بكالوريوس في الرياضيات (تخصص التحليل الرياضي)",
    institution: "جامعة حلب",
    year: "2013",
    gpa: "78.36"
  }] : [{
    degree: "Ph.D. in History of Basic Sciences (specializing in the history of astronomy)",
    institution: "University of Aleppo - Institute for the History of Arabic Science",
    year: "2025",
    gpa: "86.4",
    thesis: "Zij Ibn al-Shatir by Ala al-Din Abu al-Hasan Ibn al-Shatir: Editing and Study from Chapter 1 to Chapter 33"
  }, {
    degree: "Master of the History of Basic Sciences (specializing in the history of astronomy)",
    institution: "University of Aleppo - Institute for the History of Arabic Science",
    year: "2020",
    gpa: "92.23",
    thesis: "Zij Ibn al-Shatir by Ala al-Din Abu al-Hasan Ibn al-Shatir: Editing and Study from Chapter 1 to Chapter 33"
  }, {
    degree: "Bachelor's in Information Systems Engineering (specializing in software application development)",
    institution: "Syrian Virtual University",
    year: "2019",
    gpa: "72.57"
  }, {
    degree: "Bachelor's in Mathematics (major in Mathematical Analysis)",
    institution: "University of Aleppo",
    year: "2013",
    gpa: "78.36"
  }];
  return a.jsxs("section", { className: "education section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "التحصيل العلمي" : "Education" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.degree }), a.jsx("p", { className: "timeline-text", children: e.institution }), a.jsx("span", { className: "timeline-date", children: e.year }), e.gpa && a.jsx("p", { children: `GPA: ${e.gpa}` }), e.thesis && a.jsx("p", { children: e.thesis })] }, t)) })] });
};

const tp = ({ language }) => {
  const n = language === "ar" ? [{
    role: "مدير برامج",
    org: "جمعية محو الأمية والتربية",
    period: "يناير 2025 - الحاضر"
  }, {
    role: "منسقة مبادرات ونشاطات مجتمعية",
    org: "جمعية محو الأمية والتربية",
    period: "أغسطس 2024 - ديسمبر 2024"
  }, {
    role: "منسقة مبادرات مجتمعية",
    org: "جمعية التآلف",
    period: "سبتمبر 2023 - أغسطس 2024"
  }, {
    role: "مطوّرة Front-End (Vue.js)",
    org: "شركة زنوبيا",
    period: "2023–2024"
  }, {
    role: "منسقة مشروع التعليم العلاجي",
    org: "جمعية محو الأمية والتربية",
    period: "2022–2023"
  }, {
    role: "مراقب ميداني",
    org: "جمعية محو الأمية والتربية (مشروع حياة)",
    period: "2022"
  }, {
    role: "مشرفة تربوية",
    org: "جمعية محو الأمية والتربية (مشروع حياة)",
    period: "2020"
  }, {
    role: "مشرفة فنية للرياضيات والعلوم العامة",
    org: "جمعية محو الأمية والتربية (مشروع حياة)",
    period: "2020"
  }, {
    role: "منسقة برنامج الفلكي الصغير",
    org: "الجمعية الفلكية السورية",
    period: "2020–2023"
  }, {
    role: "ميسّرة جلسات التوعية الأبوية",
    org: "جمعية محو الأمية (حملة العودة إلى المدرسة)",
    period: "2021"
  }, {
    role: "مطوّرة Front-End (CSS, HTML, WordPress)",
    org: "شركة زنوبيا",
    period: "2020–2023"
  }, {
    role: "مدرسة",
    org: "مدرسة المنارة الخاصة",
    period: "2014–2021"
  }, {
    role: "مدرسة",
    org: "معهد الرويال للتحليل العددي (طلاب قسم الكيمياء)",
    period: "2016–2017"
  }, {
    role: "مدرسة",
    org: "مدرسة الجيل العربي (تدريب طلاب أولمبياد الرياضيات)",
    period: "2014–2021"
  }, {
    role: "محاضرة",
    org: "جامعة حلب - كلية الهندسة الميكانيكية (رياضيات 3)",
    period: "2016–2017"
  }, {
    role: "محاضرة",
    org: "جامعة حلب - كلية العلوم (تحليل 1، تحليل دالي 2، برمجة 2)",
    period: "2014–2015"
  }] : [{
    role: "Program Manager",
    org: "Education and Illiteracy Eradication Association",
    period: "Jan 2025 – Present"
  }, {
    role: "Community Initiatives and Activities Coordinator",
    org: "Education and Illiteracy Eradication Association",
    period: "Aug 2024 – Dec 2024"
  }, {
    role: "Community Initiatives Coordinator",
    org: "Al-Ta'aluf Association",
    period: "Sep 2023 – Aug 2024"
  }, {
    role: "Front-End Developer (Vue.js)",
    org: "Zenobia Company",
    period: "2023–2024"
  }, {
    role: "Remedial Education Project Coordinator",
    org: "Education and Illiteracy Eradication Association",
    period: "2022–2023"
  }, {
    role: "Field Monitor",
    org: "Education and Illiteracy Eradication Association (Hayat Project)",
    period: "2022"
  }, {
    role: "Educational Supervisor",
    org: "Education and Illiteracy Eradication Association (Hayat Project)",
    period: "2020"
  }, {
    role: "Technical Supervisor of Mathematics and General Sciences",
    org: "Education and Illiteracy Eradication Association (Hayat Project)",
    period: "2020"
  }, {
    role: "Coordinator of the Young Astronomer Program",
    org: "Syrian Astronomical Society",
    period: "2020–2023"
  }, {
    role: "Facilitator of Parental Awareness Sessions",
    org: "Education and Illiteracy Eradication Association (Back-to-School Campaign)",
    period: "2021"
  }, {
    role: "Front-End Developer (CSS, HTML, WordPress)",
    org: "Zenobia Company",
    period: "2020–2023"
  }, {
    role: "Teacher",
    org: "Al-Manara Private School",
    period: "2014–2021"
  }, {
    role: "Teacher",
    org: "Royal Institute of Numerical Analysis (Chemistry Department students)",
    period: "2016–2017"
  }, {
    role: "Teacher",
    org: "Arab Generation School (Scientific Olympiad in Mathematics)",
    period: "2014–2021"
  }, {
    role: "Lecturer",
    org: "University of Aleppo – Faculty of Mechanical Engineering (Mathematics 3)",
    period: "2016–2017"
  }, {
    role: "Lecturer",
    org: "University of Aleppo – Faculty of Science (Analysis 1, Functional Analysis 2, Programming 2)",
    period: "2014–2015"
  }];
  return a.jsxs("section", { className: "experience section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "الخبرة المهنية" : "Professional Experience" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.role }), a.jsx("p", { className: "timeline-text", children: e.org }), a.jsx("span", { className: "timeline-date", children: e.period })] }, t)) })] });
};

const np = ({ language }) => {
  const n = language === "ar" ? [{
    title: "التواريخ الفلكية في زيجه ابن الشاطر الدمشقي (704–777ه / 1306–1376م)",
    journal: "مجلة جامعة حلب للبحوث، سلسلة تاريخ العلوم عند العرب، العدد 14",
    year: "2019"
  }, {
    title: "تحقيق ودراسة الفصل الثامن \"في معرفة تواريخ الكواكب الخمسة السيارة\" في زيجه ابن الشاطر، تواريخ المشتري أنموذجًا",
    journal: "مجلة جامعة حلب للبحوث، سلسلة تاريخ العلوم عند العرب",
    year: "2020"
  }] : [{
    title: "Astronomical Calendars in the Zijj of Ibn al-Shatir al-Dimashqi (704–777 AH / 1306–1376 AD)",
    journal: "Research Journal of the University of Aleppo, Series on the History of Science among the Arabs, No. 14",
    year: "2019"
  }, {
    title: "Investigation and study of Chapter Eight, 'On Knowing the Calendar of the Five Moving Planets' in Zij Ibn Al-Shater, 'The Calendar of Jupiter' as a Model",
    journal: "Research Journal of the University of Aleppo, Series of the History of Science among the Arabs",
    year: "2020"
  }];
  return a.jsxs("section", { className: "publications section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "الأبحاث المنشورة" : "Published Research" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.title }), a.jsx("p", { children: e.journal }), a.jsx("span", { className: "timeline-date", children: e.year })] }, t)) })] });
};

const ip = ({ language }) => {
  const n = language === "ar" ? [{
    title: "المنهج الشكي عند ابن الشاطر الدمشقي، كتاب نهاية النفس في تصح الأصول أنموذجًا",
    event: "المؤتمر الخامس والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "23–25 نوفمبر 2021"
  }, {
    title: "المصطلح الفلكي واستخدامه في الخطاب الصوفي عند السهروردي الحلبي",
    event: "مؤتمر اليونسكو للاحتفال بالذكرى 850 لحياة السهروردي",
    date: "16 أكتوبر 2019"
  }, {
    title: "فلكيو عصر كمال الدين الفارسي (ت 719ه / 1319م)",
    event: "المؤتمر الرابع والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "23–25 أبريل 2019"
  }, {
    title: "الإسهام العلمي للبيروني في التواريخ الفلكية",
    event: "المؤتمر الثالث والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "8–10 مايو 2018"
  }, {
    title: "مختصرات زيجه ابن الشاطر، مخطوطة تحفة الناظر لكم الريشي أنموذجًا",
    event: "المؤتمر الثاني والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "16–18 مايو 2017"
  }, {
    title: "مخطوطة رسالة في الأسطرلاب لابن الشاطر الدمشقي (704–777ه)، دراسة علمية مقارنة",
    event: "المؤتمر الحادي والثلاثون لتاريخ العلوم، جامعة حلب",
    date: "10–12 مايو 2016"
  }] : [{
    title: "The Skeptical Approach of Ibn al-Shater al-Dimashqi, 'The Book of the End of the Soul in Taseh al-Usul' as a model",
    event: "35th Conference on the History of Science, University of Aleppo",
    date: "Nov 23–25, 2021"
  }, {
    title: "Astronomical Term and Employment in the Sufi Discourse of Suhrawardi of Halabi",
    event: "UNESCO Celebration Conference for the 850th Anniversary of Suhrawardi’s Life",
    date: "Oct 16, 2019"
  }, {
    title: "Astronomers in the era of Kamal al-Din al-Farsi (d. 719 AH / 1319 AD)",
    event: "34th Conference on the History of Science, University of Aleppo",
    date: "Apr 23–25, 2019"
  }, {
    title: "Al-Biruni’s Scientific Contribution to Astronomical Calendars",
    event: "33rd Conference on the History of Science, University of Aleppo",
    date: "May 8–10, 2018"
  }, {
    title: "Abbreviations of Zij Ibn al-Shater, The Manuscript of Tuhfat al-Nazir for Kom al-Rishi as a 'model'",
    event: "32nd Conference on the History of Science, University of Aleppo",
    date: "May 16–18, 2017"
  }, {
    title: "Manuscript of a treatise on the astrolabe by Ibn al-Shater al-Dimashqi (704–777 AH), a comparative scientific study",
    event: "31st Conference on the History of Science, University of Aleppo",
    date: "May 10–12, 2016"
  }];
  return a.jsxs("section", { className: "conferences section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "المشاركات في المؤتمرات" : "Conferences" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.title }), a.jsx("p", { children: e.event }), a.jsx("span", { className: "timeline-date", children: e.date })] }, t)) })] });
};

const lp = ({ language }) => {
  const n = language === "ar" ? [{
    course: "دورة فلكية",
    center: "الاتحاد العربي لعلوم الفضاء والفلك",
    place: "أونلاين - الأردن",
    year: "2023"
  }, {
    course: "ورشة عمل C4D",
    center: "جمعية محو الأمية والتربية",
    place: "حلب",
    year: "2021"
  }, {
    course: "مبادئ إدارة مشاريع التنمية",
    center: "مؤسسة سناد للتنمية",
    place: "حلب",
    year: "2021"
  }, {
    course: "القيم الأخلاقية",
    center: "جمعية محو الأمية والتربية",
    place: "حلب",
    year: "2020"
  }, {
    course: "تدريب المدربين (TOT)",
    center: "مركز تواصل",
    place: "حلب",
    year: "2020"
  }, {
    course: "التعلم النشط",
    center: "جمعية محو الأمية والتربية",
    place: "حلب",
    year: "2020"
  }, {
    course: "أسس ومفاهيم في الفلك",
    center: "الجمعية الفلكية السورية",
    place: "حلب",
    year: "2019"
  }, {
    course: "إدارة العمل التطوعي والمتطوعين",
    center: "إدارة الجمعيات الخيرية",
    place: "حلب",
    year: "2019"
  }, {
    course: "أصول الخط العربي والتراث",
    center: "معهد تاريخ العلوم العربية",
    place: "حلب",
    year: "2016"
  }, {
    course: "C# & SQL",
    center: "CPC",
    place: "حلب",
    year: "2017"
  }, {
    course: "C#",
    center: "CPC",
    place: "حلب",
    year: "2016"
  }] : [{
    course: "Astronomy Course",
    center: "Arab Union for Space Sciences and Astronomy",
    place: "Online - Jordan",
    year: "2023"
  }, {
    course: "C4D Workshop",
    center: "Education and Illiteracy Eradication Association",
    place: "Aleppo",
    year: "2021"
  }, {
    course: "Principles of Managing Development Projects",
    center: "Sanad Development Foundation",
    place: "Aleppo",
    year: "2021"
  }, {
    course: "Moral Values Course",
    center: "Education and Illiteracy Eradication Association",
    place: "Aleppo",
    year: "2020"
  }, {
    course: "Train the Trainers (TOT)",
    center: "Tawasol Center",
    place: "Aleppo",
    year: "2020"
  }, {
    course: "Active Learning",
    center: "Education and Illiteracy Eradication Association",
    place: "Aleppo",
    year: "2020"
  }, {
    course: "Fundamentals and Principles in Astronomy",
    center: "Syrian Astronomical Society",
    place: "Aleppo",
    year: "2019"
  }, {
    course: "Management of Volunteer Work and Volunteers",
    center: "Charity Management",
    place: "Aleppo",
    year: "2019"
  }, {
    course: "The Origins of Arabic Calligraphy and Heritage",
    center: "Institute for the History of Arabic Science",
    place: "Aleppo",
    year: "2016"
  }, {
    course: "C# & SQL",
    center: "CPC",
    place: "Aleppo",
    year: "2017"
  }, {
    course: "C#",
    center: "CPC",
    place: "Aleppo",
    year: "2016"
  }];
  return a.jsxs("section", { className: "training section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "الدورات التدريبية" : "Training Courses" }), a.jsx("ul", { className: "timeline", children: n.map((e, t) => a.jsxs("li", { className: "timeline-item", children: [a.jsx("h3", { children: e.course }), a.jsx("p", { children: `${e.center} — ${e.place}` }), a.jsx("span", { className: "timeline-date", children: e.year })] }, t)) })] });
};

const op = ({ language }) => {
  const n = language === "ar" ? {
    volunteering: [
      "متطوعة في الجمعية الفلكية السورية منذ 2018",
      "متطوعة في مبادرة الضوء (تسجيل كتب للمكفوفين) منذ 2018",
      "متطوعة في جمعية محو الأمية والتربية منذ 2020"
    ],
    memberships: [
      "عضو مجلس إدارة الجمعية الفلكية السورية في حلب منذ 2018",
      "عضو هيئة عامة في جمعية محو الأمية والتربية في حلب منذ 2022"
    ]
  } : {
    volunteering: [
      "Volunteer at the Syrian Astronomical Society since 2018",
      "Volunteer in the Light Initiative (recording books for the blind) since 2018",
      "Volunteer at the Education and Illiteracy Eradication Association since 2020"
    ],
    memberships: [
      "Member of the Board of Directors of the Syrian Astronomical Society in Aleppo since 2018",
      "Member of a public body in the Education and Illiteracy Eradication Association in Aleppo since 2022"
    ]
  };
  return a.jsxs("section", { className: "volunteer section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "التطوع والعضويات" : "Volunteering & Memberships" }), a.jsxs("div", { className: "two-columns", children: [a.jsxs("div", { children: [a.jsx("h3", { children: language === "ar" ? "التطوع" : "Volunteering" }), a.jsx("ul", { children: n.volunteering.map((e, t) => a.jsx("li", { children: e }, t)) })] }), a.jsxs("div", { children: [a.jsx("h3", { children: language === "ar" ? "العضويات" : "Memberships" }), a.jsx("ul", { children: n.memberships.map((e, t) => a.jsx("li", { children: e }, t)) })] })] })] });
};

const rp = ({ language }) => {
  const n = language === "ar" ? {
    languages: [{ name: "العربية", level: "اللغة الأم" }, { name: "الإنجليزية", level: "متقدم" }],
    technical: ["React.js", "Vue.js", "Node.js", "ASP.NET Razor Pages", "HTML/CSS", "JavaScript", "WordPress"],
    other: ["Photoshop (مستوى متوسط)", "Adobe Premiere (مستوى متوسط)"]
  } : {
    languages: [{ name: "Arabic", level: "Native" }, { name: "English", level: "Advanced" }],
    technical: ["React.js", "Vue.js", "Node.js", "ASP.NET Razor Pages", "HTML/CSS", "JavaScript", "WordPress"],
    other: ["Photoshop (Intermediate)", "Adobe Premiere (Intermediate)"]
  };
  return a.jsxs("section", { className: "skills section", children: [a.jsx("h2", { className: "section-title", children: language === "ar" ? "المهارات" : "Skills" }), a.jsxs("div", { className: "two-columns", children: [a.jsxs("div", { children: [a.jsx("h3", { children: language === "ar" ? "اللغات" : "Languages" }), a.jsx("ul", { children: n.languages.map((e, t) => a.jsx("li", { children: `${e.name} — ${e.level}` }, t)) })] }), a.jsxs("div", { children: [a.jsx("h3", { children: language === "ar" ? "المهارات التقنية" : "Technical Skills" }), a.jsx("ul", { children: n.technical.map((e, t) => a.jsx("li", { children: e }, t)) }), a.jsx("h3", { children: language === "ar" ? "مهارات أخرى" : "Other Skills" }), a.jsx("ul", { children: n.other.map((e, t) => a.jsx("li", { children: e }, t)) })] })] })] });
};

const App = () => {
  const [language, setLanguage] = a.useState("ar");
  return a.jsxs("div", { dir: language === "ar" ? "rtl" : "ltr", className: "app", children: [a.jsxs("header", { className: "header", children: [a.jsx("h1", { children: "Nagham Mashariqa" }), a.jsx("p", { children: language === "ar" ? "دكتوراه في تاريخ الفلك | مطوّرة برمجيات | محاضرة رياضيات" : "PhD in History of Astronomy | Software Developer | Mathematics Lecturer" }), a.jsxs("div", { className: "language-toggle", children: [a.jsx("button", { onClick: () => setLanguage("ar"), children: "العربية" }), a.jsx("button", { onClick: () => setLanguage("en"), children: "English" })] })] }), a.jsx(bf, { language }), a.jsx(ep, { language }), a.jsx(tp, { language }), a.jsx(np, { language }), a.jsx(ip, { language }), a.jsx(lp, { language }), a.jsx(op, { language }), a.jsx(rp, { language })] });
};

const root = document.getElementById("root");
root && Nt.createRoot(root).render(a.jsx(App, {}));

