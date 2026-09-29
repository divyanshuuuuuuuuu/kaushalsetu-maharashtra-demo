import type { DistrictInfo, DailyMission, CareerPathway, Opportunity, UserProfile } from '../types';

export const MAHARASHTRA_DISTRICTS: DistrictInfo[] = [
  {
    id: 'pune',
    name: 'Pune',
    nameMr: 'पुणे',
    nameHi: 'पुणे',
    division: 'Pune Division',
    topIndustries: ['Automotive & EV Manufacturing', 'IT & Software Engineering', 'Biotech & Precision Eng.'],
    skillDemand: ['EV Battery & Powertrain Assembly', 'Python & SQL Data Analytics', 'CNC & Mechatronics'],
    candidateCount: 42800,
    skillCentersCount: 38,
    gapIndex: 'High',
    description: 'Premier automotive & IT hub of Maharashtra with rapid transition toward Electric Vehicle tech and AI automation.',
    descriptionMr: 'इलेक्ट्रिक वाहन तंत्रज्ञान आणि आयटी क्षेत्रातील महाराष्ट्राचे प्रमुख औद्योगिक केंद्र.',
    descriptionHi: 'इलेक्ट्रिक वाहन प्रौद्योगिकी और आईटी क्षेत्र में महाराष्ट्र का प्रमुख औद्योगिक केंद्र।'
  },
  {
    id: 'mumbai',
    name: 'Mumbai City & Suburban',
    nameMr: 'मुंबई शहर व उपनगर',
    nameHi: 'मुंबई शहर और उपनगर',
    division: 'Konkan Division',
    topIndustries: ['BFSI & Financial Tech', 'Digital Media & Telecom', 'Healthcare & Logistics'],
    skillDemand: ['Financial Analytics', 'Cloud Infrastructure & DevOps', 'Supply Chain Analytics'],
    candidateCount: 61500,
    skillCentersCount: 52,
    gapIndex: 'High',
    description: 'Financial capital requiring high-end data modeling, fintech compliance, and modern digital supply chain managers.',
    descriptionMr: 'आर्थिक राजधानी जिथे डेटा विश्लेषण, फिनटेक आणि डिजिटल सप्लाय चेन मॅनेजमेंटची मोठी मागणी आहे.',
    descriptionHi: 'वित्तीय राजधानी जहाँ डेटा विश्लेषण, फिनटेक और डिजिटल सप्लाई चेन की भारी मांग है।'
  },
  {
    id: 'thane',
    name: 'Thane & Raigad',
    nameMr: 'ठाणे व रायगड',
    nameHi: 'ठाणे और रायगढ़',
    division: 'Konkan Division',
    topIndustries: ['Chemicals & Pharmaceuticals', 'Port Logistics & Shipping', 'Heavy Engineering'],
    skillDemand: ['Industrial Safety & ISO Compliance', 'Warehouse Logistics Tech', 'PLC Automation'],
    candidateCount: 31200,
    skillCentersCount: 29,
    gapIndex: 'Medium',
    description: 'Industrial and maritime corridor experiencing high demand for chemical process safety and automated logistics.',
    descriptionMr: 'रासायनिक उद्योग, सागरी वाहतूक आणि स्वयंचलित लॉजिस्टिक्सचे प्रमुख केंद्र.',
    descriptionHi: 'रासायनिक उद्योग, समुद्री परिवहन और स्वचालित लॉजिस्टिक्स का मुख्य केंद्र।'
  },
  {
    id: 'nagpur',
    name: 'Nagpur',
    nameMr: 'नागपूर',
    nameHi: 'नागपुर',
    division: 'Nagpur Division',
    topIndustries: ['Multi-Modal Logistics (MIHAN)', 'Defense & Aerospace Component Mfg', 'Agri-Tech Processing'],
    skillDemand: ['Avionics Maintenance', 'Cold Chain & Agri Analytics', 'Solar & Green Energy Maintenance'],
    candidateCount: 27900,
    skillCentersCount: 24,
    gapIndex: 'Medium',
    description: 'Central India logistics capital with MIHAN SEZ driving aerospace manufacturing and agri-food processing.',
    descriptionMr: 'मिहान सेझमुळे एरोस्पेस, लॉजिस्टिक्स आणि कृषी प्रक्रिया उद्योगांचा वेगाने विकास.',
    descriptionHi: 'मिहान सेज के कारण एयरोस्पेस, लॉजिस्टिक्स और कृषि प्रसंस्करण का तेजी से विकास।'
  },
  {
    id: 'nashik',
    name: 'Nashik',
    nameMr: 'नाशिक',
    nameHi: 'नासिक',
    division: 'Nashik Division',
    topIndustries: ['Electrical & Power Equipment', 'Agro-Export & Wine Tech', 'Auto Ancillaries'],
    skillDemand: ['Smart Grid & Transformer Maintenance', 'Precision Agro Tech', 'Quality Control & Six Sigma'],
    candidateCount: 22400,
    skillCentersCount: 21,
    gapIndex: 'Medium',
    description: 'Major power component manufacturing cluster expanding into precision agri-exports and smart solar grids.',
    descriptionMr: 'विद्युत उपकरण निर्मिती आणि कृषी-निर्यात क्षेत्रातील नावाजलेले शहर.',
    descriptionHi: 'विद्युत उपकरण निर्माण और कृषि-निर्यात क्षेत्र का प्रमुख शहर।'
  },
  {
    id: 'sambhajinagar',
    name: 'Chhatrapati Sambhajinagar',
    nameMr: 'छत्रपती संभाजीनगर',
    nameHi: 'छत्रपति संभाजीनगर',
    division: 'Marathwada Division',
    topIndustries: ['Industrial City (AURIC / DMIC)', 'Auto Components & Engineering', 'Pharma Packaging'],
    skillDemand: ['Industrial Robotics & CNC', 'Pharma Quality Assurance', 'Tool & Die Design'],
    candidateCount: 19800,
    skillCentersCount: 18,
    gapIndex: 'High',
    description: 'Flagship smart industrial city under DMIC requiring robotics operators, tool makers, and pharma QA specialists.',
    descriptionMr: 'ऑरिक स्मार्ट इंडस्ट्रियल सिटीमुळे रोबोटिक्स आणि ऑटो घटकांची मोठी मागणी.',
    descriptionHi: 'ऑरिक स्मार्ट इंडस्ट्रियल सिटी के कारण रोबोटिक्स और ऑटो घटकों की भारी मांग।'
  },
  {
    id: 'kolhapur',
    name: 'Kolhapur & Sangli',
    nameMr: 'कोल्हापूर व सांगली',
    nameHi: 'कोल्हापुर और सांगली',
    division: 'Pune Division',
    topIndustries: ['Foundry & Engine Casting', 'Sugar & Bio-Ethanol Refineries', 'Textile Machinery'],
    skillDemand: ['Advanced Foundry Tech & Metallurgy', 'Bio-energy Process Eng.', 'Textile Automation'],
    candidateCount: 16500,
    skillCentersCount: 16,
    gapIndex: 'Low',
    description: 'Historical engineering casting and sugar bio-refinery hub rapidly adopting green energy tech.',
    descriptionMr: 'फाउंड्री, इंजिन कास्टिंग आणि बायो-इथेनॉल ऊर्जा क्षेत्रातील प्रमुख हब.',
    descriptionHi: 'फाउंड्री, इंजन कास्टिंग और बायो-एथेनॉल ऊर्जा क्षेत्र का प्रमुख केंद्र।'
  },
  {
    id: 'solapur',
    name: 'Solapur',
    nameMr: 'सोलापूर',
    nameHi: 'सोलापुर',
    division: 'Pune Division',
    topIndustries: ['Textile & Garment Clusters', 'Solar Power Generation', 'Cement & Materials'],
    skillDemand: ['Computerized Weaving & CAD Garments', 'Solar Rooftop Installation', 'Quality Audit'],
    candidateCount: 14200,
    skillCentersCount: 14,
    gapIndex: 'Medium',
    description: 'Renowned textile hub modernizing with automated garment designing and utility-scale solar maintenance.',
    descriptionMr: 'वस्त्रोद्योग आणि सौर ऊर्जा प्रकल्पांचे वेगाने वाढणारे केंद्र.',
    descriptionHi: 'वस्त्र उद्योग और सौर ऊर्जा परियोजनाओं का तेजी से बढ़ता केंद्र।'
  }
];

export const INITIAL_DAILY_MISSION: DailyMission = {
  id: 'mission-01',
  title: 'Data Interpretation & Industrial Demand Analysis',
  titleMr: 'डेटा अर्थनिर्वचन आणि औद्योगिक मागणी विश्लेषण',
  titleHi: 'डेटा व्याख्या एवं औद्योगिक मांग विश्लेषण',
  description: 'Analyze Maharashtra EV vs Traditional Auto manufacturing growth data to determine quarterly talent demand shift.',
  descriptionMr: 'त्रैमासिक कौशल्य मागणीतील बदल ओळखण्यासाठी महाराष्ट्रातील ईव्ही विरुद्ध पारंपारिक ऑटो निर्मिती डेटाचे विश्लेषण करा.',
  descriptionHi: 'तिमाही कौशल मांग में बदलाव की पहचान करने के लिए महाराष्ट्र के ईवी बनाम पारंपरिक ऑटो निर्माण डेटा का विश्लेषण करें।',
  skillCategory: 'Data Analysis & Operations',
  difficulty: 'Intermediate',
  xpReward: 30,
  estimatedMinutes: 5,
  questionText: 'Based on the Maharashtra State Skill Development Q3 report, EV Powertrain technician demand grew from 1,200 to 3,600 positions while Diesel engine roles contracted by 15%. What is the net percentage growth in EV technician demand?',
  questionTextMr: 'महाराष्ट्र राज्य कौशल्य विकास Q3 अहवालानुसार, ईव्ही पॉवरट्रेन तंत्रज्ञांची मागणी १,२०० वरून ३,६०० पदांपर्यंत वाढली, तर डिझेल इंजिनची पदे १५% ने घटली. ईव्ही तंत्रज्ञ मागणीतील निव्वळ टक्केवारी वाढ किती आहे?',
  questionTextHi: 'महाराष्ट्र राज्य कौशल विकास Q3 रिपोर्ट के अनुसार, ईवी पावरट्रेन तकनीशियन की मांग 1,200 से बढ़कर 3,600 पदों तक पहुंच गई, जबकि डीजल इंजन की भूमिकाएं 15% कम हुईं। ईवी तकनीशियन मांग में शुद्ध प्रतिशत वृद्धि कितनी है?',
  chartData: [
    { label: 'Q1 EV Tech', value: 1200 },
    { label: 'Q2 EV Tech', value: 2100 },
    { label: 'Q3 EV Tech', value: 3600 },
    { label: 'Diesel Auto', value: 2400 }
  ],
  options: [
    { id: 'opt1', text: '150% Increase', textMr: '१५०% वाढ', textHi: '150% वृद्धि' },
    { id: 'opt2', text: '200% Increase', textMr: '२००% वाढ', textHi: '200% वृद्धि' },
    { id: 'opt3', text: '300% Increase', textMr: '३००% वाढ', textHi: '300% वृद्धि' },
    { id: 'opt4', text: '85% Increase', textMr: '८५% वाढ', textHi: '85% वृद्धि' }
  ],
  correctAnswer: 'opt2',
  explanation: 'Growth = ((3,600 - 1,200) / 1,200) * 100 = (2,400 / 1,200) * 100 = 200%. This indicates a 3x expansion in Maharashtra EV cluster hiring!',
  explanationMr: 'वाढ = ((३,६०० - १,२००) / १,२००) * १०० = २००%. ही वाढ महाराष्ट्रातील ईव्ही क्लस्टर भरती ३ पटीने वाढल्याचे दर्शवते.',
  explanationHi: 'वृद्धि = ((3,600 - 1,200) / 1,200) * 100 = 200%। यह महाराष्ट्र ईवी क्लस्टर भर्ती में 3 गुना विस्तार दर्शाता है।'
};

export const CAREER_PATHWAYS: CareerPathway[] = [
  {
    id: 'path-data-analytics',
    title: 'Data Analyst & Industrial Operations',
    titleMr: 'डेटा विश्लेषक व औद्योगिक ऑपरेशन्स',
    titleHi: 'डेटा विश्लेषक एवं औद्योगिक ऑपरेशन्स',
    icon: 'BarChart3',
    category: 'IT & Digital Services',
    description: 'Transform raw industrial and logistics data into actionable business intelligence for Maharashtra manufacturing hubs.',
    stages: [
      {
        id: 'stg-1',
        title: 'Excel & Data Fundamentals',
        titleMr: 'एक्सेल आणि डेटा मूलभूत तत्त्वे',
        titleHi: 'एक्सेल और डेटा मूलभूत सिद्धांत',
        status: 'completed',
        skills: ['Advanced Formulas', 'Pivot Tables', 'Data Cleaning'],
        xpRequired: 300,
        description: 'Master spreadsheets, data sanitation, and automated reporting templates.'
      },
      {
        id: 'stg-2',
        title: 'SQL Databases & Querying',
        titleMr: 'SQL डेटाबेस आणि क्वेरी',
        titleHi: 'SQL डेटाबेस और क्वेरी',
        status: 'completed',
        skills: ['PostgreSQL', 'Joins & Aggregations', 'Indexing'],
        xpRequired: 450,
        description: 'Query enterprise databases to extract production metrics and candidate records.'
      },
      {
        id: 'stg-3',
        title: 'Power BI & Visual Dashboards',
        titleMr: 'पावर बीआय आणि व्हिज्युअल डॅशबोर्ड',
        titleHi: 'पावर बीआई और विजुअल डैशबोर्ड',
        status: 'in-progress',
        skills: ['DAX Expressions', 'Interactive Filters', 'Govt KPI Mapping'],
        xpRequired: 600,
        description: 'Build interactive dashboards for district skill monitoring and corporate demand.'
      },
      {
        id: 'stg-4',
        title: 'Industry Applied Capstone Project',
        titleMr: 'उद्योग आधारित प्रात्यक्षिक प्रकल्प',
        titleHi: 'उद्योग आधारित व्यावहारिक परियोजना',
        status: 'locked',
        skills: ['Live Maharashtra Dataset', 'Predictive Modeling'],
        xpRequired: 800,
        description: 'Solve real-world skill shortage telemetry for MIDC industrial parks.'
      },
      {
        id: 'stg-5',
        title: 'Industry Internship Matching',
        titleMr: 'उद्योग इंटर्नशिप जुळणी',
        titleHi: 'उद्योग इंटर्नशिप मैचिंग',
        status: 'locked',
        skills: ['Interview Readiness', 'Verified Skill Badge'],
        xpRequired: 1000,
        description: 'Get matched directly with hiring partners across Pune, Mumbai & Thane.'
      }
    ]
  },
  {
    id: 'path-ev-tech',
    title: 'Electric Vehicle Powertrain Specialist',
    titleMr: 'इलेक्ट्रिक वाहन पॉवरट्रेन तज्ज्ञ',
    titleHi: 'इलेक्ट्रिक वाहन पावरट्रेन विशेषज्ञ',
    icon: 'Zap',
    category: 'Automotive & Advanced Mfg',
    description: 'High-demand engineering track focusing on lithium-ion battery management, motor controllers, and EV diagnostics.',
    stages: [
      {
        id: 'ev-1',
        title: 'Electrical Safety & Battery Basics',
        titleMr: 'विद्युत सुरक्षा आणि बॅटरी तत्त्वे',
        titleHi: 'विद्युत सुरक्षा और बैटरी सिद्धांत',
        status: 'completed',
        skills: ['High Voltage Safety', 'Li-Ion Cell Chemistry'],
        xpRequired: 300,
        description: 'Understand safe protocols for EV assembly lines.'
      },
      {
        id: 'ev-2',
        title: 'BMS & Motor Diagnostics',
        titleMr: 'BMS आणि मोटर निदान',
        titleHi: 'BMS और मोटर निदान',
        status: 'in-progress',
        skills: ['CAN Bus Telemetry', 'BMS Calibration'],
        xpRequired: 500,
        description: 'Diagnose electric motor controller faults using OBD tools.'
      },
      {
        id: 'ev-3',
        title: 'EV Assembly Line Quality Audit',
        titleMr: 'ईव्ही असेंब्ली लाइन गुणवत्ता तपासणी',
        titleHi: 'ईवी असेंबली लाइन गुणवत्ता जांच',
        status: 'locked',
        skills: ['Chassis Integration', 'ISO 26262'],
        xpRequired: 750,
        description: 'Audit production readiness for Pune & Sambhajinagar EV plants.'
      }
    ]
  }
];

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Rajesh Kumar Patil',
  district: 'Pune',
  careerRole: 'Data Analyst & Operations',
  level: 4,
  levelTitle: 'BUILDER',
  currentXp: 1240,
  nextLevelXp: 1500,
  streakDays: 7,
  completedMissions: ['mission-00'],
  skills: [
    { name: 'Excel Fundamentals', percentage: 90, level: 'Advanced' },
    { name: 'SQL & Database Querying', percentage: 70, level: 'Intermediate' },
    { name: 'Power BI Visuals', percentage: 50, level: 'Developing' },
    { name: 'Statistical Interpretation', percentage: 40, level: 'Basic' }
  ]
};

export const SAMPLE_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-101',
    title: 'Junior Data Analyst (Operations)',
    titleMr: 'कनिष्ठ डेटा विश्लेषक',
    company: 'Tata AutoComp Systems Ltd.',
    district: 'Pune (Bhosari MIDC)',
    districtId: 'pune',
    salary: '₹3.6 - ₹4.8 LPA',
    type: 'Job',
    skillsRequired: ['Excel', 'SQL', 'Power BI'],
    matchPercentage: 92,
    demandStatus: 'High Demand',
    deadline: '15 OCT 2026'
  },
  {
    id: 'opp-102',
    title: 'EV Powertrain Quality Inspector',
    titleMr: 'ईव्ही पॉवरट्रेन गुणवत्ता निरीक्षक',
    company: 'Mahindra Electric Mobility',
    district: 'Chhatrapati Sambhajinagar (AURIC)',
    districtId: 'sambhajinagar',
    salary: '₹22,000 / month Stipend',
    type: 'Apprenticeship',
    skillsRequired: ['Li-Ion Safety', 'OBD Diagnostics', 'CAN Bus'],
    matchPercentage: 85,
    demandStatus: 'Critical Shortage',
    deadline: '20 OCT 2026'
  },
  {
    id: 'opp-103',
    title: 'Supply Chain & Inventory Trainee',
    titleMr: 'सप्लाय चेन प्रशिक्षणार्थी',
    company: 'Mahindra Logistics & MIHAN Hub',
    district: 'Nagpur',
    districtId: 'nagpur',
    salary: '₹18,000 / month',
    type: 'Internship',
    skillsRequired: ['Warehouse Management', 'Excel', 'ERP'],
    matchPercentage: 78,
    demandStatus: 'Emerging',
    deadline: '25 OCT 2026'
  },
  {
    id: 'opp-104',
    title: 'Fintech Data Operations Specialist',
    titleMr: 'फिनटेक डेटा ऑपरेशन्स तज्ज्ञ',
    company: 'State Bank Digital Innovation Hub',
    district: 'Mumbai (BKC)',
    districtId: 'mumbai',
    salary: '₹4.2 - ₹5.5 LPA',
    type: 'Job',
    skillsRequired: ['SQL', 'Python', 'Financial Analytics'],
    matchPercentage: 88,
    demandStatus: 'High Demand',
    deadline: '18 OCT 2026'
  },
  {
    id: 'opp-105',
    title: 'Solar Grid Automation Technician',
    titleMr: 'सोलर ग्रिड ऑटोमेशन तंत्रज्ञ',
    company: 'MSEDCL Green Energy Partner',
    district: 'Nashik',
    districtId: 'nashik',
    salary: '₹3.2 - ₹4.0 LPA',
    type: 'Job',
    skillsRequired: ['Smart Metering', 'PLC Basics', 'Electrical Safety'],
    matchPercentage: 80,
    demandStatus: 'Emerging',
    deadline: '30 OCT 2026'
  }
];
