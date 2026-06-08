export type Language = 'en' | 'np';

export interface Course {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  target?: string;
  highlights: string[];
}

export interface TranslationSchema {
  nav: {
    home: string;
    programs: string;
    facilities: string;
    about: string;
    contact: string;
    ctevtAffiliated: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    experienceBadge: string;
    experienceText: string;
  };
  programs: {
    title: string;
    subtitle: string;
    durationLabel: string;
    priceLabel: string;
    targetLabel: string;
    enrollBtn: string;
    priceValueFixed: string;
  };
  facilities: {
    title: string;
    subtitle: string;
    hostelTitle: string;
    hostelDesc: string;
    skillTitle: string;
    skillDesc: string;
    ctevtTitle: string;
    ctevtDesc: string;
    trainerTitle: string;
    trainerDesc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formProgram: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    directionBtn: string;
  };
  footer: {
    aboutText: string;
    copyright: string;
    quickLinks: string;
    affiliation: string;
  };
  courses: Course[];
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      programs: "Programs & Courses",
      facilities: "Key Facilities",
      about: "About Us",
      contact: "Contact & Location",
      ctevtAffiliated: "CTEVT Affiliated",
    },
    hero: {
      badge: "Affiliated with CTEVT & National Skill Certification",
      title: "Shape Your Future with Job-Ready Practical Skills",
      subtitle: "Join Swarojagar Training Center in Itahari. We provide high-quality, government-recognized vocational training designed for career success in Nepal and abroad.",
      ctaPrimary: "Explore Training Programs",
      ctaSecondary: "Get Free Consultation",
      experienceBadge: "100% Practical",
      experienceText: "Hands-on learning with guaranteed job-oriented skills.",
    },
    programs: {
      title: "Our Featured Vocational Programs",
      subtitle: "Expert-led practical courses certified by CTEVT, designed to help you start your own business or secure outstanding employment globally.",
      durationLabel: "Duration",
      priceLabel: "Special Course Fee",
      targetLabel: "Target Careers & Countries",
      enrollBtn: "Enquire & Book Seat",
      priceValueFixed: "Affordable / Installment available",
    },
    facilities: {
      title: "Why Choose Swarojagar Training Center?",
      subtitle: "We go beyond classrooms to provide fully supportive training environments equipped with modern workshops and comfortable amenities.",
      hostelTitle: "Hostel Accommodations",
      hostelDesc: "Clean, budget-friendly residential hostel facility on-site for remote students arriving from Dharan, Inaruwa, Khotang, Bhojpur, Dhankuta, and beyond.",
      skillTitle: "Guaranteed Skill Learning",
      skillDesc: "Our rigorous curriculum guarantees you will master real-world, self-sustaining skills. Work independently or start a commercial startup right after graduating.",
      ctevtTitle: "CTEVT Standard Integration",
      ctevtDesc: "Our courses are strictly structured on the CTEVT directives, ensuring local government validation and global credential conversion.",
      trainerTitle: "Industry Expert Trainers",
      trainerDesc: "Learn directly from high-credential trade veterans with decades of training expertise in industrial setups and overseas corporate operations.",
    },
    contact: {
      title: "Contact & Location Information",
      subtitle: "Visit our campus at Pragati Chowk, Itahari, or get in touch with our career counselors today.",
      addressLabel: "Physical Address",
      addressValue: "Itahari-06, Pragati Chowk, Sunsari, Koshi Province, Nepal",
      phoneLabel: "Phone / Mobile Numbers",
      emailLabel: "Email Address",
      hoursLabel: "Admission Office Hours",
      hoursValue: "Sunday - Friday: 6:00 AM - 6:00 PM",
      formTitle: "Book a Seat / Request Callback",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Mobile / Phone Number",
      formProgram: "Select Desired Training Program",
      formMessage: "Additional Messages / Queries",
      formSubmit: "Send Enrollment Request",
      formSuccess: "Thank you! Your enrollment request has been submitted. Our counselor will contact you soon.",
      directionBtn: "Open in Google Maps",
    },
    footer: {
      aboutText: "Swarojagar Training Center is Nepal's leading vocational hub in Sunsari, committed to empowering youths through self-sustaining skills and robust entrepreneurial careers, satisfying modern industrial demands worldwide.",
      copyright: "Swarojagar Training Center. All Rights Reserved. CTEVT Affiliated Vocational Institute.",
      quickLinks: "Quick Navigation",
      affiliation: "Government Recognition",
    },
    courses: [
      {
        id: "ac-repair",
        title: "Refrigerator & AC Repairing (एसी र फ्रिज मर्मत)",
        duration: "10-Day Crash Course / 3 Months Regular",
        price: "Rs. 7,000 onwards",
        description: "Comprehensive practical and theoretical technical training for domestic, commercial, and industrial air conditioning & refrigeration troubleshooting.",
        target: "Highly recommended for students heading to Japan, Korea, Australia, Canada, USA, & Gulf Countries.",
        highlights: ["In-depth component testing", "Gas charging & leakage sealing", "Compressor electrical wiring", "CTEVT-certified syllabus guidelines"]
      },
      {
        id: "computer",
        title: "Computer IT & Software Training",
        duration: "3-Month Job-Ready Course",
        price: "Affordable Pricing",
        description: "Registered Computer Training School providing foundational office software suite, graphic designing, database, accounting, and IT career preparation.",
        target: "Perfect for local administration roles, IT assistants, and self-publishing ventures.",
        highlights: ["Hands-on lab for each student", "Office Packages & Smart Accounting ERPs", "Basic Web Concepts", "Freelance work guidelines"]
      },
      {
        id: "tailoring",
        title: "Tailoring & Dressmaking (सिलाई कटाई)",
        duration: "3 to 6 Months Course",
        price: "Flexible Schedule Options",
        description: "Professional garment styling, measuring, advanced machine operating, cutting, and stitching for contemporary Nepali and Western designs.",
        target: "Tailored to help passionate individuals launch their private boutique or local tailoring shops.",
        highlights: ["Feminine & Masculine garments cutting", "Modern wedding dress designing", "Boutique setup guide & support", "Fabric identification techniques"]
      },
      {
        id: "cook",
        title: "Professional Culinary & Cook Training",
        duration: "1 to 3 Months Intensive",
        price: "Rs. 15,000",
        description: "Culinary arts covering Continental, Chinese, Indian, Italian, and authentic Nepali cuisines. High focus on commercial kitchen hygiene and quick cooking methods.",
        target: "Best for aspiring chefs entering local hotels, motels, cruise ships, or global restaurants.",
        highlights: ["Safety and advanced knife skills", "Menu costing and planning", "Live physical kitchen practice", "Plating and food presentation"]
      },
      {
        id: "wiring",
        title: "Industrial Wiring & Electrical Work",
        duration: "2 Months Practical",
        price: "Contact for Pricing",
        description: "Hands-on safety-first training focusing on industrial electrical control panels, household single/three-phase wiring, and electrical drawing setups.",
        target: "Excellent for technical jobs in industrial factories, construction firms, and overseas projects.",
        highlights: ["Three-phase system wiring", "Relay and switchboard logic", "Diagnostic multimeter usage", "Safety-first earthing techniques"]
      }
    ]
  },
  np: {
    nav: {
      home: "गृह पृष्ठ",
      programs: "तालिम तथा तालिकाहरू",
      facilities: "विशेष सुविधाहरू",
      about: "हाम्रो बारेमा",
      contact: "सम्पर्क र ठेगाना",
      ctevtAffiliated: "CTEVT सम्बन्धन प्राप्त",
    },
    hero: {
      badge: "CTEVT सम्बन्धन र नेपाल सरकारबाट मान्यता प्राप्त राष्ट्रिय सीप केन्द्र",
      title: "सुनौलो भविष्यका लागि रोजगारीमूलक प्रयोगात्मक सीप सिकौं",
      subtitle: "इटहरी-०६ मा अवस्थित स्वरोजगार ट्रेनिङ सेन्टरमा यहाँहरूलाई स्वागत छ। हामी स्वदेश तथा विदेशमा उत्कृष्ट रोजगारी तथा स्वरोजगारीका अवसरहरू दिलाउन अत्याधुनिक प्रयोगात्मक तालिमहरू प्रदान गर्दछौं।",
      ctaPrimary: "तालिम कार्यक्रमहरू हेर्नुहोस्",
      ctaSecondary: "निःशुल्क परामर्श लिनुहोस्",
      experienceBadge: "१००% प्रयोगात्मक",
      experienceText: "ग्यारेन्टीका साथ आत्मनिर्भर बनाउने व्यावहारिक ज्ञान र सीप।",
    },
    programs: {
      title: "हाम्रा मुख्य तालिम कार्यक्रमहरू",
      subtitle: "सिटिइभिटी (CTEVT) को मापदण्ड अनुसार स्वीकृत प्रयोगात्मक कोर्षहरू, जसले तपाईंलाई आफ्नै व्यवसाय सुरु गर्न वा विश्वस्तरमा उच्च पारिश्रमिकको काम पाउन सक्षम बनाउँछ।",
      durationLabel: "अवधि",
      priceLabel: "विशेष तालिम शुल्क",
      targetLabel: "वैदेशिक रोजगारी वा करियर लक्ष्य",
      enrollBtn: "सिट बुक / सोधपुछ गर्नुहोस्",
      priceValueFixed: "सुलभ शुल्क / किस्ताबन्दीको व्यवस्था",
    },
    facilities: {
      title: "स्वरोजगार ट्रेनिङ सेन्टर किन रोज्ने?",
      subtitle: "हामी केवल कक्षाकोठामा मात्र सीमित नरहेर, विद्यार्थीहरूका लागि आवश्यक सम्पूर्ण पूर्वाधार तथा वातावरण सुनिश्चित गर्दछौं।",
      hostelTitle: "होस्टल तथा बस्ने व्यवस्था",
      hostelDesc: "इटहरी बाहिरका जिल्लाहरू (जस्तै धरान, इनरुवा, खोटाङ, भोजपुर, धनकुटा आदि) बाट आउनुहुने विद्यार्थीहरूको लागि न्यूनतम शुल्कमा बस्न र खानका लागि होस्टलको राम्रो सुविधा छ।",
      skillTitle: "ग्यारेन्टी युक्त सीप सिकाइ",
      skillDesc: "हाम्रो पाठ्यक्रम प्रयोगात्मक अभ्यासमा आधारित छ जसले तपाईंलाई कोर्ष सकिएलगत्तै आफ्नै स्वरोजगार व्यवसाय वा उद्योग सुरु गर्न सक्षम बनाउँछ।",
      ctevtTitle: "CTEVT पाठ्य-संरचना",
      ctevtDesc: "नेपाल सरकारको प्राविधिक शिक्षा तथा व्यावसायिक तालिम परिषद् (CTEVT) सँग आबद्ध पाठ्यक्रम अनुसार परीक्षा तथा प्रमाणपत्रको व्यवस्था।",
      trainerTitle: "लामो अनुभवप्राप्त प्रशिक्षकहरू",
      trainerDesc: "खाडी मुलुक, जापान, कोरिया तथा स्वदेशी ठूला उद्योगहरूमा काम गरेका दक्ष र अनुभवी इन्जिनियर तथा प्रशिक्षकहरूबाट प्रत्यक्ष सिक्ने मौका।",
    },
    contact: {
      title: "सम्पर्क तथा ठेगाना विवरण",
      subtitle: "इटहरी-०६, प्रगति चोकमा अवस्थित हाम्रो कार्यालयमा आउनुहोस् वा आजै फोन गरी आफ्नो छनौटको सिट सुरक्षित गर्नुहोस्।",
      addressLabel: "कार्यालयको ठेगाना",
      addressValue: "इटहरी-०६, प्रगति चोक, सुनसरी, कोशी प्रदेश, नेपाल",
      phoneLabel: "सम्पर्क फोन / मोबाइल नम्बरहरू",
      emailLabel: "इमेल ठेगाना",
      hoursLabel: "कार्यालय समय",
      hoursValue: "आइतबार देखि शुक्रबार: बिहान ६:०० बजे देखि बेलुका ६:०० बजे सम्म",
      formTitle: "सिट सुरक्षित गर्न वा परामर्शका लागि फर्म भर्नुहोस्",
      formName: "पूरा नाम",
      formEmail: "इमेल ठेगाना",
      formPhone: "मोबाइल नम्बर",
      formProgram: "इच्छुक तालिम रोज्नुहोस्",
      formMessage: "थप जिज्ञासा वा सन्देश",
      formSubmit: "आवेदन बुझाउनुहोस्",
      formSuccess: "धन्यवाद! तपाईंको विवरण सफलतापूर्वक दर्ता भएको छ। हाम्रो परामर्शदाताले छिट्टै तपाईंलाई संपर्क गर्नुहुनेछ।",
      directionBtn: "गुगल म्यापमा स्थान हेर्नुहोस्",
    },
    footer: {
      aboutText: "स्वरोजगार ट्रेनिङ सेन्टर सुनसरी कोशी प्रदेशकै उत्कृष्ट प्राविधिक सीप केन्द्र हो। हामी देशका युवाहरूलाई सीपमूलक बनाई स्वरोजगारी र आत्मनिर्भरता तर्फ अग्रसर गराउन सधैं कटिबद्ध छौं।",
      copyright: "स्वरोजगार ट्रेनिङ सेन्टर। सम्पूर्ण अधिकार सुरक्षित। CTEVT मान्यता प्राप्त प्राविधिक शिक्षालय।",
      quickLinks: "द्रुत नेभिगेसन",
      affiliation: "सरकारी मान्यता",
    },
    courses: [
      {
        id: "ac-repair",
        title: " refrigerator & AC Repairing (एसी र फ्रिज मर्मत)",
        duration: "१०-दिने अति सघन क्र्यास कोर्स / ३ महिने नियमित कक्षा",
        price: "रू. ७,००० बाट सुरु",
        description: "घर, व्यवसाय तथा औद्योगिक फ्रिजिङ्ग र एयर कन्डिसनको समस्या पहिल्याउने, ग्यास चार्ज गर्ने, वायरिङ मर्मत गर्ने सम्पूर्ण प्रयोगात्मक कोर्ष।",
        target: "विशेषगरी जापान, कोरिया, अष्ट्रेलिया, क्यानडा, अमेरिका र खाडी मुलुकहरूमा वैदेशिक रोजगारमा जान चाहनेहरूका लागि अत्यन्तै उपयुक्त।",
        highlights: ["प्रत्येक पाटपुर्जाको परीक्षण", "ग्यास चार्ज र लिकेज मर्मत", "कम्प्रेसर र बिजुली वायरिङ", "CTEVT मापदण्ड पाठ्यक्रम"]
      },
      {
        id: "computer",
        title: "कम्प्युटर र सूचना प्रविधि तालिम (Computer & IT Training)",
        duration: "३ महिने रोजगारमुखी कार्यक्रम",
        price: "सुलभ दरमा",
        description: "आधारभूत कम्प्युटर, अफिस प्याकेज, एकाउन्टिङ्ग सफ्टवेयर, ग्राफिक्स डिजाइनिङ र स्वरोजगार सम्बन्धी प्रयोगात्मक तालिम।",
        target: "स्थानीय सरकारी तथा गैरसरकारी कार्यालय, बैंक, सहकारी तथा अनलाइन काम गर्न इच्छुक सबैका लागि।",
        highlights: ["प्रत्येक विद्यार्थीलाई छुट्टै कम्प्युटरको व्यवस्था", "स्मार्ट एकाउन्टिङ सफ्टवेयर", "डिजिटल साक्षरता र डिजाइन", "फ्रीलांसिङ सम्बन्धी जानकारी"]
      },
      {
        id: "tailoring",
        title: "सिलाई कटाई तथा फेसन बुटिक डिजाइन (Tailoring & Dressmaking)",
        duration: "३ देखि ६ महिना",
        price: "उत्कृष्ट सिकाई प्याकेज",
        description: "कपडाको नाप लिन, आधुनिक र परम्परागत नेपाली तथा पश्चिमा पहिरनहरूको कटिङ्ग, फिनिसिङ र आकर्षक सिलाई अभ्यास।",
        target: "आफ्नै बुटिक, टेलरिङ्ग सेन्टर वा गार्मेन्ट व्यवसाय सञ्चालन गर्न चाहने साहसी महिला तथा पुरुषहरूका लागि।",
        highlights: ["महिला र पुरुषका पोशाक कटिङ्ग र सिलाई", "आधुनिक बुडिंग र फेसन प्रवृत्ति", "पसल सञ्चालन र स्टार्टअप सम्बन्धी सहयोग", "डिजाइनर मेसिन चलाउने प्रविधि"]
      },
      {
        id: "cook",
        title: "व्यावसायिक कुक तथा पाककला तालिम (Culinary & Cook)",
        duration: "१ देखि ३ महिने घनीभूत अभ्यास",
        price: "रू. १५,०००",
        description: "कन्टिनेन्टल, चाइनिज, इन्डियन, इटालियन र अर्गानिक नेपाली स्वादका विभिन्न परिकार बनाउने व्यावसायिक कला र किचन म्यानेजमेन्ट।",
        target: "स्वदेशी तथा विदेशी होटेल, रेस्टुरेन्ट, क्याफे, क्रुज र रिसोर्टहरूमा सेफ बन्ने लक्ष्य भएकाहरूका लागि।",
        highlights: ["चाकु चलाउने कला र सुरक्षा", "सामग्री व्यवस्थापन र स्वच्छता", "लाइभ फिजिकल किचनमा प्रयोगात्मक अभ्यास", "खाना सजाउने विशेष कला"]
      },
      {
        id: "wiring",
        title: "इन्डस्ट्रियल वायरिङ तथा हाउस वायरिङ (Electrical Work)",
        duration: "२ महिने प्रयोगात्मक कोर्स",
        price: "परामर्श कार्यालयमा",
        description: "सिंगल फेज र थ्री-फेज हाउस वायरिङ, इन्डस्ट्रियल कन्ट्रोल प्यानल, सर्किट ड्रइङ र विद्युतीय सुरक्षा सम्बन्धी उत्कृष्ट कक्षाहरू।",
        target: "उद्योग, हाइड्रोपावर, निर्माण कम्पनी तथा विदेशमा इलेक्ट्रिक टेक्निसियन बन्न चाहनेहरूका लागि।",
        highlights: ["थ्री-फेज वितरण र सुरक्षित वायरिङ", "सुरक्षा र अर्थिङ सम्बन्धी विशेष कोर्ष", "मल्टिमिटर र उपकरणको प्रयोग", "रिले तथा कन्ट्रोल प्यानल सिकाई"]
      }
    ]
  }
};
