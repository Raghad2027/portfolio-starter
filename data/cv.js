// ─────────────────────────────────────────────────────────────
//  THE WHOLE CV LIVES HERE.
//  Every page reads from this file. No CV text is written inside
//  a component, so updating the CV never means touching the design.
//
//  "lens" on an item says which reader it matters most to
//  ("engineering", "design", "research"). The "Read this as" switch uses it
//  to highlight, never to hide.
//
//  Text that changes between languages is written as { en, ar }.
//  Text that stays the same (product names, citations, IDs) is a
//  plain string. lib/i18n.js picks the right one with tr().
// ─────────────────────────────────────────────────────────────

export const cv = {
  name: { en: "Yara Saud Al-Mansouri", ar: "يارا سعود المنصوري" },
  shortName: { en: "Yara Al-Mansouri", ar: "يارا المنصوري" },
  suffix: { en: "PhD", ar: "دكتوراه" },
  titles: [
    { en: "Principal Product Engineer", ar: "مهندسة منتجات رئيسية", lens: "engineering" },
    { en: "Design Technology Lead", ar: "قائدة تقنيات التصميم", lens: "design" },
    { en: "HCI Researcher", ar: "باحثة في تفاعل الإنسان مع الحاسوب", lens: "research" },
  ],
  location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },

  summary: {
    en: "Product engineer and designer with 16 years of professional experience building digital products in Saudi Arabia and the United Kingdom, across health tech, fintech, education and mobility. Leads teams from first research to launch while still designing and writing code every week. Has led a team of up to 64 people, shipped more than 40 products used by over 9 million people, co-founded two startups (one acquired) and earned a PhD in Human-Computer Interaction focused on Arabic interfaces.",
    ar: "مهندسة منتجات ومصممة بخبرة مهنية تمتد 16 عامًا في بناء المنتجات الرقمية في المملكة العربية السعودية والمملكة المتحدة، في مجالات التقنية الصحية والتقنية المالية والتعليم والتنقل. تقود الفرق من أول بحث حتى الإطلاق، وما زالت تصمم وتكتب الشيفرة كل أسبوع. قادت فريقًا وصل إلى 64 شخصًا، وأطلقت أكثر من 40 منتجًا يستخدمها أكثر من 9 ملايين شخص، وشاركت في تأسيس شركتين ناشئتين (استُحوذ على إحداهما)، وحصلت على الدكتوراه في تفاعل الإنسان مع الحاسوب مع تركيز على الواجهات العربية.",
  },

  contact: {
    email: "yara.almansouri@mail.example",
    phone: "+966 55 000 0000",
  },

  // Profile links, exactly as listed on the CV.
  links: [
    { label: { en: "Portfolio", ar: "الموقع الشخصي" }, handle: "yara.example", url: "https://yara.example" },
    {
      label: { en: "LinkedIn", ar: "لينكدإن" },
      handle: "linkedin.example/in/yaramansouri",
      url: "https://linkedin.example/in/yaramansouri",
    },
    {
      label: { en: "GitHub", ar: "غيت هب" },
      handle: "github.example/yara-mansouri",
      url: "https://github.example/yara-mansouri",
    },
    { label: { en: "Dribbble", ar: "دريبل" }, handle: "dribbble.example/yaram", url: "https://dribbble.example/yaram" },
    { label: { en: "Behance", ar: "بيهانس" }, handle: "behance.example/yaram", url: "https://behance.example/yaram" },
    { label: { en: "Medium", ar: "ميديم" }, handle: "medium.example/@yaram", url: "https://medium.example/@yaram" },
    {
      label: { en: "Google Scholar", ar: "الباحث العلمي من غوغل" },
      handle: "scholar.example/yaram",
      url: "https://scholar.example/yaram",
    },
    {
      label: { en: "YouTube", ar: "يوتيوب" },
      handle: "youtube.example/@YaraBuilds",
      url: "https://youtube.example/@YaraBuilds",
    },
  ],

  // The PDF sits in /public. Leave "" to hide the Download CV button.
  cvFile: "Yara_Al-Mansouri_CV.pdf",

  // ── Career highlights ─────────────────────────────────────
  highlights: [
    {
      value: "16",
      lens: ["engineering", "design", "research"],
      text: { en: "years of professional experience (since Jul 2010)", ar: "عامًا من الخبرة المهنية (منذ يوليو 2010)" },
    },
    {
      value: "40+",
      lens: ["engineering", "design"],
      text: { en: "products shipped, reaching 9 million+ people", ar: "منتجًا أُطلق، وصلت إلى أكثر من 9 ملايين شخص" },
    },
    { value: "64", lens: ["engineering"], text: { en: "people led across 7 squads", ar: "شخصًا قادتهم ضمن 7 فرق" } },
    {
      value: "2",
      lens: ["engineering"],
      text: {
        en: "startups co-founded: 1 acquired, 1 closed",
        ar: "شركتان ناشئتان شاركت في تأسيسهما: استُحوذ على واحدة وأُغلقت الأخرى",
      },
    },
    {
      value: "2",
      lens: ["research"],
      text: { en: "patents: 1 granted, 1 pending", ar: "براءتا اختراع: واحدة ممنوحة وواحدة قيد الدراسة" },
    },
    {
      value: "9 + 31",
      lens: ["research"],
      text: { en: "9 publications and 31 talks and keynotes", ar: "9 منشورات علمية و31 محاضرة وكلمة رئيسية" },
    },
    {
      value: "1,400+",
      lens: ["research"],
      text: { en: "university students taught", ar: "طالبًا وطالبة جامعيين درّستهم" },
    },
    {
      value: "19",
      lens: ["engineering"],
      text: { en: "certifications earned, 1 in progress", ar: "شهادة مهنية مكتسبة، وواحدة قيد الإنجاز" },
    },
  ],

  // ── Core skills ───────────────────────────────────────────
  // level: "expert" | "advanced" | "intermediate"
  skills: [
    {
      group: { en: "Product Design", ar: "تصميم المنتجات" },
      lens: ["design"],
      level: "expert",
      years: 18,
      items: [
        "Figma",
        { en: "design systems", ar: "أنظمة التصميم" },
        { en: "prototyping", ar: "النماذج الأولية" },
        { en: "motion design", ar: "تصميم الحركة" },
        { en: "information architecture", ar: "هندسة المعلومات" },
      ],
    },
    {
      group: { en: "Front-End Engineering", ar: "هندسة الواجهات الأمامية" },
      lens: ["engineering"],
      level: "expert",
      years: 16,
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Tailwind CSS", "Web Components"],
    },
    {
      group: { en: "User Research", ar: "أبحاث المستخدمين" },
      lens: ["research", "design"],
      level: "expert",
      years: 14,
      items: [
        { en: "interviews", ar: "المقابلات" },
        { en: "usability testing", ar: "اختبارات سهولة الاستخدام" },
        { en: "diary studies", ar: "دراسات اليوميات" },
        { en: "A/B testing", ar: "اختبارات A/B" },
        { en: "eye-tracking", ar: "تتبع حركة العين" },
      ],
    },
    {
      group: { en: "Accessibility", ar: "إمكانية الوصول" },
      lens: ["design", "engineering"],
      level: "expert",
      years: 11,
      items: [
        "WCAG 2.2 AA",
        "ARIA",
        { en: "screen-reader testing", ar: "الاختبار بقارئات الشاشة" },
        { en: "Arabic right-to-left accessibility", ar: "إمكانية الوصول للواجهات العربية من اليمين إلى اليسار" },
      ],
    },
    {
      group: { en: "Back-End and APIs", ar: "الأنظمة الخلفية وواجهات البرمجة" },
      lens: ["engineering"],
      level: "advanced",
      years: 10,
      items: ["Node.js", "NestJS", "GraphQL", "REST", "PostgreSQL", "Redis"],
    },
    {
      group: { en: "Leadership", ar: "القيادة" },
      lens: ["engineering"],
      level: "expert",
      years: 9,
      items: [
        { en: "hiring", ar: "التوظيف" },
        { en: "organization design", ar: "تصميم الهيكل التنظيمي" },
        "OKRs",
        { en: "budgeting", ar: "إعداد الميزانيات" },
        { en: "stakeholder management", ar: "إدارة أصحاب المصلحة" },
        { en: "mentoring", ar: "الإرشاد" },
      ],
    },
    {
      group: { en: "Mobile", ar: "تطبيقات الجوال" },
      lens: ["engineering"],
      level: "advanced",
      years: 8,
      items: ["React Native", "Flutter", { en: "Swift (basic)", ar: "Swift (أساسي)" }],
    },
    {
      group: { en: "Cloud and DevOps", ar: "السحابة و DevOps" },
      lens: ["engineering"],
      level: "advanced",
      years: 7,
      items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    },
    {
      group: { en: "Security and Compliance", ar: "الأمن والامتثال" },
      lens: ["engineering"],
      level: "intermediate",
      years: 6,
      items: [
        { en: "secure development lifecycle", ar: "دورة التطوير الآمن" },
        "PCI DSS",
        { en: "health-data privacy", ar: "خصوصية البيانات الصحية" },
        { en: "threat modelling", ar: "نمذجة التهديدات" },
      ],
    },
    {
      group: { en: "Data and AI", ar: "البيانات والذكاء الاصطناعي" },
      lens: ["research", "engineering"],
      level: "intermediate",
      years: 5,
      items: [
        "Python",
        "SQL",
        { en: "data visualization", ar: "تصوير البيانات" },
        { en: "recommendation systems", ar: "أنظمة التوصية" },
        { en: "AI product features", ar: "خصائص المنتجات المعتمدة على الذكاء الاصطناعي" },
      ],
    },
  ],

  // ── Professional experience ───────────────────────────────
  // span: [start, end] as "YYYY-MM" (end is null while ongoing). The career
  // timeline on the Experience page is drawn from these.
  // kind: "full" (full-time) | "part" (part-time) | "break" (career break)
  experience: [
    {
      id: "faseela",
      lens: ["engineering", "design"],
      team: { value: "9", label: { en: "product teams", ar: "فرق منتجات" } }, // team size, shown on the career ladder
      role: {
        en: "Principal Product Engineer & Design Technology Lead",
        ar: "مهندسة منتجات رئيسية وقائدة تقنيات التصميم",
      },
      company: { en: "Faseela Ventures", ar: "فسيلة فنتشرز" },
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Sep 2023 – Present", ar: "سبتمبر 2023 – الآن" },
      span: ["2023-09", null],
      kind: "full",
      points: [
        {
          en: "Set the front-end and design-system direction for 9 product teams across payments, savings and rewards in a fintech super-app with 4.2 million users.",
          ar: "وضعت توجّه الواجهات الأمامية ونظام التصميم لـ 9 فرق منتجات في المدفوعات والادخار والمكافآت ضمن تطبيق مالي شامل يستخدمه 4.2 مليون مستخدم.",
        },
        {
          en: "Built Mizan, the company’s bilingual design system: 180 components adopted by all 9 teams, cutting UI build time by 38%.",
          ar: "بنت «ميزان»، نظام التصميم ثنائي اللغة للشركة: 180 مكوّنًا اعتمدتها الفرق التسعة كلها، فانخفض وقت بناء الواجهات بنسبة 38%.",
        },
        {
          en: "Led the rebuild of the web app in Next.js and TypeScript, reducing Largest Contentful Paint from 4.8 s to 1.6 s.",
          ar: "قادت إعادة بناء تطبيق الويب باستخدام Next.js و TypeScript، فانخفض زمن ظهور أكبر عنصر محتوى (LCP) من 4.8 ثانية إلى 1.6 ثانية.",
        },
        {
          en: "Introduced accessibility reviews for every release, raising screens that meet WCAG 2.2 AA from 41% to 96%.",
          ar: "أدخلت مراجعات إمكانية الوصول في كل إصدار، فارتفعت نسبة الشاشات المطابقة لمعيار WCAG 2.2 AA من 41% إلى 96%.",
        },
        {
          en: "Designed the Savings Goals feature from research in 5 cities; 610,000 users opened a goal in its first 6 months.",
          ar: "صممت خاصية «أهداف الادخار» انطلاقًا من بحث ميداني في 5 مدن؛ وفتح 610,000 مستخدم هدفًا في أول 6 أشهر.",
        },
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Native", "GraphQL", "AWS"],
    },
    {
      id: "zayna-director",
      lens: ["engineering"],
      team: { value: "64", label: { en: "people", ar: "شخصًا" } }, // team size, shown on the career ladder
      role: { en: "Director of Product Engineering", ar: "مديرة هندسة المنتجات" },
      company: { en: "Zayna Health Tech", ar: "زينة للتقنية الصحية" },
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Mar 2021 – Aug 2023", ar: "مارس 2021 – أغسطس 2023" },
      span: ["2021-03", "2023-08"],
      kind: "full",
      points: [
        {
          en: "Led 64 people across 7 squads (engineering, design, quality and data) with an annual budget of SAR 21 million.",
          ar: "قادت 64 شخصًا ضمن 7 فرق (الهندسة والتصميم والجودة والبيانات) بميزانية سنوية قدرها 21 مليون ريال سعودي.",
        },
        {
          en: "Launched the telemedicine platform at national scale, delivering 3.1 million consultations in 2022.",
          ar: "أطلقت منصة الطب الاتصالي على المستوى الوطني، وقدّمت 3.1 مليون استشارة في عام 2022.",
        },
        {
          en: "Cut the app crash rate from 2.4% to 0.3% and raised the app-store rating from 3.6 to 4.7.",
          ar: "خفّضت معدل تعطّل التطبيق من 2.4% إلى 0.3%، ورفعت تقييمه في متاجر التطبيقات من 3.6 إلى 4.7.",
        },
        {
          en: "Took the platform through two health-data security audits with zero major findings.",
          ar: "اجتازت المنصة بقيادتها تدقيقين أمنيين للبيانات الصحية دون أي ملاحظات جوهرية.",
        },
      ],
      tech: ["React", "React Native", "Node.js", "PostgreSQL", "Google Cloud", "Kubernetes"],
    },
    {
      id: "zayna-em",
      lens: ["engineering"],
      team: { value: "6 → 22", label: { en: "people", ar: "شخصًا" } }, // team size, shown on the career ladder
      role: { en: "Engineering Manager, Patient Apps", ar: "مديرة هندسة، تطبيقات المرضى" },
      company: { en: "Zayna Health Tech", ar: "زينة للتقنية الصحية" },
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Jan 2019 – Feb 2021", ar: "يناير 2019 – فبراير 2021" },
      span: ["2019-01", "2021-02"],
      kind: "full",
      points: [
        {
          en: "Grew the patient apps team from 6 to 22 people; hired and mentored 4 team leads.",
          ar: "وسّعت فريق تطبيقات المرضى من 6 إلى 22 شخصًا؛ ووظّفت 4 قادة فرق وأرشدتهم.",
        },
        {
          en: "Shipped appointment booking used by 1.8 million patients across 140 clinics.",
          ar: "أطلقت خدمة حجز المواعيد التي يستخدمها 1.8 مليون مريض في 140 عيادة.",
        },
        {
          en: "Shortened the release cycle from 6 weeks to 1 week with CI/CD and feature flags.",
          ar: "قصّرت دورة الإصدار من 6 أسابيع إلى أسبوع واحد باستخدام CI/CD ومفاتيح الخصائص.",
        },
      ],
      tech: [],
    },
    {
      id: "zayna-senior",
      lens: ["engineering"],
      role: { en: "Senior Front-End Engineer", ar: "مهندسة واجهات أمامية أولى" },
      company: { en: "Zayna Health Tech", ar: "زينة للتقنية الصحية" },
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Jul 2017 – Dec 2018", ar: "يوليو 2017 – ديسمبر 2018" },
      span: ["2017-07", "2018-12"],
      kind: "full",
      points: [
        {
          en: "Rebuilt the clinic dashboard in React, cutting doctors’ average task time by 27%.",
          ar: "أعادت بناء لوحة تحكم العيادات باستخدام React، فانخفض متوسط وقت إنجاز الأطباء لمهامهم بنسبة 27%.",
        },
        {
          en: "Created the first shared component library, which later grew into the Zayna design system.",
          ar: "أنشأت أول مكتبة مكوّنات مشتركة، وتطورت لاحقًا إلى نظام تصميم «زينة».",
        },
      ],
      tech: [],
    },
    {
      id: "qalam",
      lens: ["engineering", "design"],
      role: { en: "Co-founder (part-time)", ar: "شريكة مؤسِّسة (بدوام جزئي)" },
      company: { en: "Qalam Learn", ar: "قلم ليرن" },
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Feb 2019 – Nov 2022", ar: "فبراير 2019 – نوفمبر 2022" },
      span: ["2019-02", "2022-11"],
      kind: "part",
      points: [
        {
          en: "Co-founded an Arabic-first coding education platform that reached 230,000 learners in 14 countries.",
          ar: "شاركت في تأسيس منصة لتعليم البرمجة تضع العربية أولًا، ووصلت إلى 230,000 متعلم في 14 دولة.",
        },
        {
          en: "Designed and built its interactive code editor, which explains errors in plain Arabic.",
          ar: "صممت وبنت محرر الشيفرة التفاعلي للمنصة، وهو يشرح الأخطاء بعربية مبسطة.",
        },
        {
          en: "Grew the team to 9 people and led product until the company was acquired by Mirqab Group in Nov 2022.",
          ar: "وسّعت الفريق إلى 9 أشخاص وقادت المنتج حتى استحوذت مجموعة مرقاب على الشركة في نوفمبر 2022.",
        },
      ],
      tech: ["Vue", "TypeScript", "Monaco Editor", "Firebase"],
    },
    {
      id: "career-break",
      lens: [],
      role: { en: "Career Break", ar: "استراحة مهنية" },
      company: null,
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Jan 2017 – Jun 2017", ar: "يناير 2017 – يونيو 2017" },
      span: ["2017-01", "2017-06"],
      kind: "break",
      points: [
        { en: "Family relocation and volunteering.", ar: "انتقال عائلي وعمل تطوعي." },
        {
          en: "Taught a 12-week web development course to 45 adult learners with the Code for Community initiative.",
          ar: "درّست دورة في تطوير الويب مدتها 12 أسبوعًا لـ 45 متعلمًا من الكبار ضمن مبادرة «البرمجة للمجتمع».",
        },
      ],
      tech: [],
    },
    {
      id: "rafeeq",
      lens: ["engineering"],
      team: { value: "11", label: { en: "people", ar: "شخصًا" } }, // team size, shown on the career ladder
      role: { en: "Co-founder & Chief Technology Officer", ar: "شريكة مؤسِّسة والمديرة التقنية" },
      company: { en: "Rafeeq Rides", ar: "رفيق رايدز" },
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Apr 2015 – Dec 2016", ar: "أبريل 2015 – ديسمبر 2016" },
      span: ["2015-04", "2016-12"],
      kind: "full",
      points: [
        {
          en: "Built a ride-sharing app for university students: 26,000 sign-ups and 140,000 rides in 20 months.",
          ar: "بنت تطبيقًا لمشاركة الرحلات لطلاب الجامعات: 26,000 تسجيل و140,000 رحلة في 20 شهرًا.",
        },
        {
          en: "Raised SAR 3.5 million in seed funding and led a team of 11.",
          ar: "جمعت تمويلًا أوليًا بقيمة 3.5 مليون ريال سعودي وقادت فريقًا من 11 شخصًا.",
        },
        {
          en: "Closed the company in Dec 2016 after a market change and wrote a public post-mortem read by 80,000 people.",
          ar: "أغلقت الشركة في ديسمبر 2016 بعد تغيّر في السوق، وكتبت مراجعة علنية للتجربة قرأها 80,000 شخص.",
        },
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps APIs"],
    },
    {
      id: "brightwell-senior",
      lens: ["design"],
      role: { en: "Senior UX Engineer", ar: "مهندسة تجربة مستخدم أولى" },
      company: { en: "Brightwell Studio", ar: "برايتويل ستوديو" },
      location: { en: "London, United Kingdom", ar: "لندن، المملكة المتحدة" },
      period: { en: "Jun 2014 – Mar 2015", ar: "يونيو 2014 – مارس 2015" },
      span: ["2014-06", "2015-03"],
      kind: "full",
      points: [
        {
          en: "Led the studio’s first Arabic, right-to-left project, for a Gulf travel client.",
          ar: "قادت أول مشروع عربي من اليمين إلى اليسار في الاستوديو، لعميل خليجي في قطاع السفر.",
        },
        {
          en: "Mentored 3 junior designers and ran the studio’s monthly front-end guild.",
          ar: "أرشدت 3 مصممين مبتدئين وأدارت الملتقى الشهري للواجهات الأمامية في الاستوديو.",
        },
      ],
      tech: [],
    },
    {
      id: "brightwell",
      lens: ["design"],
      role: { en: "UX Engineer", ar: "مهندسة تجربة مستخدم" },
      company: { en: "Brightwell Studio", ar: "برايتويل ستوديو" },
      location: { en: "London, United Kingdom", ar: "لندن، المملكة المتحدة" },
      period: { en: "Oct 2012 – May 2014", ar: "أكتوبر 2012 – مايو 2014" },
      span: ["2012-10", "2014-05"],
      kind: "full",
      points: [
        {
          en: "Designed and built responsive websites for 14 clients in retail, banking and the public sector.",
          ar: "صممت وبنت مواقع متجاوبة لـ 14 عميلًا في قطاعات التجزئة والمصارف والقطاع العام.",
        },
        {
          en: "Delivered 2 projects that won industry awards (see Awards).",
          ar: "سلّمت مشروعين فازا بجوائز في القطاع (انظر الجوائز).",
        },
      ],
      tech: [],
    },
    {
      id: "northbridge-ra",
      lens: ["research"],
      role: { en: "Research Assistant (part-time)", ar: "مساعدة باحث (بدوام جزئي)" },
      company: { en: "University of Northbridge, Interaction Lab", ar: "جامعة نورثبريدج، مختبر التفاعل" },
      location: { en: "Northbridge, United Kingdom", ar: "نورثبريدج، المملكة المتحدة" },
      period: { en: "Jan 2012 – Sep 2012", ar: "يناير 2012 – سبتمبر 2012" },
      span: ["2012-01", "2012-09"],
      kind: "part",
      points: [
        {
          en: "Ran 30 usability sessions for a study on bilingual navigation menus and co-authored a technical report.",
          ar: "أجرت 30 جلسة اختبار لسهولة الاستخدام ضمن دراسة عن قوائم التنقل ثنائية اللغة، وشاركت في تأليف تقرير تقني.",
        },
      ],
      tech: [],
    },
    {
      id: "mirqab",
      lens: ["engineering"],
      role: { en: "Junior Web Developer", ar: "مطوّرة ويب مبتدئة" },
      company: { en: "Mirqab Digital Agency", ar: "وكالة مرقاب الرقمية" },
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Jul 2010 – Aug 2011", ar: "يوليو 2010 – أغسطس 2011" },
      span: ["2010-07", "2011-08"],
      kind: "full",
      points: [
        {
          en: "Built more than 20 websites in HTML, CSS, jQuery and PHP for local businesses and event organizers.",
          ar: "بنت أكثر من 20 موقعًا باستخدام HTML و CSS و jQuery و PHP لشركات محلية ومنظمي فعاليات.",
        },
      ],
      tech: [],
    },
    {
      id: "freelance",
      lens: ["design"],
      role: { en: "Freelance Graphic and Web Designer (part-time)", ar: "مصممة غرافيك وويب مستقلة (بدوام جزئي)" },
      company: { en: "Self-employed", ar: "عمل حر" },
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Sep 2008 – Jun 2010", ar: "سبتمبر 2008 – يونيو 2010" },
      span: ["2008-09", "2010-06"],
      kind: "part",
      points: [
        {
          en: "Designed logos, printed material and websites for 35 clients while at university.",
          ar: "صممت شعارات ومطبوعات ومواقع لـ 35 عميلًا خلال دراستها الجامعية.",
        },
      ],
      tech: [],
    },
  ],

  // ── Selected projects ─────────────────────────────────────
  // Each project gets its own page at /projects/<slug>.
  // metrics are the numbers from the project's own Result line.
  projects: [
    {
      slug: "mizan-design-system",
      lens: ["design", "engineering"],
      featured: true,
      name: { en: "Mizan Design System", ar: "نظام التصميم «ميزان»" },
      summary: {
        en: "One bilingual design system for nine product teams.",
        ar: "نظام تصميم واحد ثنائي اللغة لتسعة فرق منتجات.",
      },
      org: { en: "Faseela Ventures", ar: "فسيلة فنتشرز" },
      period: { en: "Oct 2023 – Jun 2025", ar: "أكتوبر 2023 – يونيو 2025" },
      span: ["2023-10", "2025-06"],
      role: { en: "Lead designer and engineer", ar: "المصممة والمهندسة الرئيسية" },
      team: { en: "Team of 6", ar: "فريق من 6" },
      problem: {
        en: "9 product teams built the same interface parts in different ways, with 4 button styles and 11 shades of green.",
        ar: "كانت 9 فرق منتجات تبني أجزاء الواجهة نفسها بطرق مختلفة، بأربعة أنماط للأزرار و11 درجة من اللون الأخضر.",
      },
      action: {
        en: "Audited 1,300 screens, defined design tokens, and built and documented the components in Figma and code.",
        ar: "دقّقت 1,300 شاشة، وحدّدت رموز التصميم، وبنت المكوّنات ووثّقتها في Figma وفي الشيفرة.",
      },
      result: {
        en: "180 components, 38% faster UI build time, and 96% of screens meeting WCAG 2.2 AA.",
        ar: "180 مكوّنًا، وبناء أسرع للواجهات بنسبة 38%، و96% من الشاشات مطابقة لمعيار WCAG 2.2 AA.",
      },
      metrics: [
        { value: "180", label: { en: "components", ar: "مكوّنًا" } },
        { value: "38%", label: { en: "faster UI build time", ar: "بناء أسرع للواجهات" } },
        { value: "96%", label: { en: "of screens meet WCAG 2.2 AA", ar: "من الشاشات مطابقة لـ WCAG 2.2 AA" } },
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Figma tokens"],
      award: "design-technology-leader",
      link: null,
    },
    {
      slug: "national-telemedicine-platform",
      lens: ["engineering"],
      featured: true,
      name: { en: "National Telemedicine Platform", ar: "المنصة الوطنية للطب الاتصالي" },
      summary: {
        en: "Video consultations at national scale, with the wait cut from 22 minutes to 6.",
        ar: "استشارات مرئية على المستوى الوطني، مع خفض الانتظار من 22 دقيقة إلى 6.",
      },
      org: { en: "Zayna Health Tech", ar: "زينة للتقنية الصحية" },
      period: { en: "May 2021 – Dec 2022", ar: "مايو 2021 – ديسمبر 2022" },
      span: ["2021-05", "2022-12"],
      role: { en: "Product engineering lead", ar: "قائدة هندسة المنتج" },
      team: { en: "Team of 31", ar: "فريق من 31" },
      problem: {
        en: "Patients waited an average of 22 minutes for a video consultation, and 1 in 5 calls dropped.",
        ar: "كان المرضى ينتظرون 22 دقيقة في المتوسط للحصول على استشارة مرئية، وكانت مكالمة من كل 5 تنقطع.",
      },
      action: {
        en: "Led the redesign of the patient queue, the doctor console and the video layer.",
        ar: "قادت إعادة تصميم طابور المرضى وواجهة الطبيب وطبقة الفيديو.",
      },
      result: {
        en: "3.1 million consultations in 2022; average wait fell from 22 to 6 minutes and dropped calls from 20% to 3%.",
        ar: "3.1 مليون استشارة في 2022؛ وانخفض متوسط الانتظار من 22 إلى 6 دقائق، والمكالمات المنقطعة من 20% إلى 3%.",
      },
      metrics: [
        { value: { en: "3.1M", ar: "3.1 مليون" }, label: { en: "consultations in 2022", ar: "استشارة في 2022" } },
        { value: "22 → 6", label: { en: "minutes average wait", ar: "دقيقة متوسط الانتظار" } },
        { value: "20% → 3%", label: { en: "dropped calls", ar: "مكالمات منقطعة" } },
      ],
      tech: ["React", "React Native", "WebRTC", "Node.js", "Google Cloud"],
      award: "digital-health-innovation",
      link: null,
    },
    {
      slug: "savings-goals",
      lens: ["design", "research"],
      featured: true,
      name: { en: "Savings Goals", ar: "أهداف الادخار" },
      summary: {
        en: "A goal-setting flow for the 70% of users who had never saved in the app.",
        ar: "مسار لتحديد الأهداف لـ 70% من المستخدمين الذين لم يدّخروا في التطبيق قط.",
      },
      org: { en: "Faseela Ventures", ar: "فسيلة فنتشرز" },
      period: { en: "Jan 2024 – Aug 2024", ar: "يناير 2024 – أغسطس 2024" },
      span: ["2024-01", "2024-08"],
      role: { en: "Research and design lead", ar: "قائدة البحث والتصميم" },
      team: { en: "Team of 8", ar: "فريق من 8" },
      problem: {
        en: "70% of users had never saved money inside the app.",
        ar: "70% من المستخدمين لم يدّخروا أي مال داخل التطبيق من قبل.",
      },
      action: {
        en: "Ran 48 interviews in 5 cities, tested 3 prototypes and designed the final goal-setting flow.",
        ar: "أجرت 48 مقابلة في 5 مدن، واختبرت 3 نماذج أولية، وصممت المسار النهائي لتحديد الأهداف.",
      },
      result: {
        en: "610,000 goals opened in 6 months, with an average of SAR 2,300 saved per goal; won Best Fintech Experience 2024.",
        ar: "فُتح 610,000 هدف في 6 أشهر، بمتوسط ادخار 2,300 ريال سعودي لكل هدف؛ وفازت بجائزة أفضل تجربة في التقنية المالية 2024.",
      },
      metrics: [
        { value: "610,000", label: { en: "goals opened in 6 months", ar: "هدف فُتح في 6 أشهر" } },
        {
          value: { en: "SAR 2,300", ar: "2,300 ريال" },
          label: { en: "average saved per goal", ar: "متوسط الادخار لكل هدف" },
        },
        { value: "48", label: { en: "interviews in 5 cities", ar: "مقابلة في 5 مدن" } },
      ],
      tech: ["React Native", "GraphQL", "Figma"],
      award: "best-fintech-experience",
      link: null,
    },
    {
      slug: "qalam-learn-code-editor",
      lens: ["engineering", "design"],
      featured: false,
      name: { en: "Qalam Learn Code Editor", ar: "محرر الشيفرة في «قلم ليرن»" },
      summary: {
        en: "A browser code editor that explains errors in plain Arabic.",
        ar: "محرر شيفرة في المتصفح يشرح الأخطاء بعربية مبسطة.",
      },
      org: { en: "Qalam Learn", ar: "قلم ليرن" },
      period: { en: "Feb 2019 – Apr 2021", ar: "فبراير 2019 – أبريل 2021" },
      span: ["2019-02", "2021-04"],
      role: { en: "Co-founder, design and front-end", ar: "شريكة مؤسِّسة، التصميم والواجهات الأمامية" },
      team: { en: "Team of 4", ar: "فريق من 4" },
      problem: {
        en: "Learners quit when English error messages stopped their code.",
        ar: "كان المتعلمون ينسحبون عندما توقف رسائل الخطأ الإنجليزية شيفرتهم.",
      },
      action: {
        en: "Built a browser code editor that explains errors in plain Arabic and suggests the next step.",
        ar: "بنت محرر شيفرة في المتصفح يشرح الأخطاء بعربية مبسطة ويقترح الخطوة التالية.",
      },
      result: { en: "Course completion rose from 18% to 46%.", ar: "ارتفعت نسبة إكمال الدورات من 18% إلى 46%." },
      metrics: [{ value: "18% → 46%", label: { en: "course completion", ar: "نسبة إكمال الدورات" } }],
      tech: ["Vue", "TypeScript", "Monaco Editor", "Firebase"],
      award: null,
      link: null,
    },
    {
      slug: "khatt-adaptive-typography-engine",
      lens: ["research", "design"],
      featured: true,
      demo: "khatt", // shows the live typography demo on this case study
      name: { en: "Khatt Adaptive Typography Engine", ar: "«خط»: محرك الطباعة المتكيّفة" },
      summary: {
        en: "Arabic type that adjusts itself to the reader and the screen.",
        ar: "حروف عربية تتكيّف مع القارئ ومع الشاشة.",
      },
      org: { en: "PhD research, Eastmoor Institute of Technology", ar: "بحث الدكتوراه، معهد إيستمور للتقنية" },
      period: { en: "Sep 2019 – Jul 2022", ar: "سبتمبر 2019 – يوليو 2022" },
      span: ["2019-09", "2022-07"],
      role: { en: "Researcher and sole developer", ar: "الباحثة والمطوّرة الوحيدة" },
      team: null,
      problem: {
        en: "Arabic text on screens is often too small, too dense and hard to scan.",
        ar: "النص العربي على الشاشات كثيرًا ما يكون صغيرًا جدًا ومتراصًّا وصعب التصفح.",
      },
      action: {
        en: "Built an engine that adjusts Arabic font size, spacing and line length to the reader and the screen, then tested it with 312 participants.",
        ar: "بنت محركًا يضبط حجم الخط العربي وتباعده وطول السطر بحسب القارئ والشاشة، ثم اختبرته مع 312 مشاركًا.",
      },
      result: {
        en: "Reading speed rose by 19% and errors fell by 31%; the method was granted a patent in Jun 2024.",
        ar: "ارتفعت سرعة القراءة بنسبة 19% وانخفضت الأخطاء بنسبة 31%؛ ومُنحت الطريقة براءة اختراع في يونيو 2024.",
      },
      metrics: [
        { value: "+19%", label: { en: "reading speed", ar: "سرعة القراءة" } },
        { value: "−31%", label: { en: "reading errors", ar: "أخطاء القراءة" } },
        { value: "312", label: { en: "participants", ar: "مشاركًا" } },
      ],
      tech: ["TypeScript", "Canvas API", "Python"],
      award: "best-doctoral-thesis",
      link: null,
    },
    {
      slug: "hirfa-ui",
      lens: ["engineering", "design"],
      featured: true,
      name: { en: "Hirfa UI (open source)", ar: "Hirfa UI «حِرفة» (مفتوح المصدر)" },
      summary: {
        en: "An open-source component library that treats right-to-left as a first language.",
        ar: "مكتبة مكوّنات مفتوحة المصدر تعامل الكتابة من اليمين إلى اليسار كلغة أولى.",
      },
      org: { en: "Open source", ar: "مشروع مفتوح المصدر" },
      period: { en: "Mar 2020 – Present", ar: "مارس 2020 – الآن" },
      span: ["2020-03", null],
      role: { en: "Founder and lead maintainer", ar: "المؤسِّسة والمشرفة الرئيسية" },
      team: { en: "210 contributors", ar: "210 مساهمين" },
      problem: {
        en: "Popular component libraries handled right-to-left layouts poorly.",
        ar: "كانت مكتبات المكوّنات الشائعة تتعامل بشكل سيئ مع التخطيطات من اليمين إلى اليسار.",
      },
      action: {
        en: "Designed and built 95 components with mirrored layouts, Arabic typography presets and full keyboard support.",
        ar: "صممت وبنت 95 مكوّنًا بتخطيطات معكوسة، وإعدادات جاهزة للطباعة العربية، ودعم كامل للوحة المفاتيح.",
      },
      result: {
        en: "9,800 GitHub stars and 1.2 million npm downloads a year; won the Open Source Impact Award 2022.",
        ar: "9,800 نجمة على GitHub و1.2 مليون تنزيل سنويًا عبر npm؛ وفازت بجائزة أثر المصادر المفتوحة 2022.",
      },
      metrics: [
        { value: "9,800", label: { en: "GitHub stars", ar: "نجمة على GitHub" } },
        { value: { en: "1.2M", ar: "1.2 مليون" }, label: { en: "npm downloads a year", ar: "تنزيل سنويًا عبر npm" } },
        { value: "95", label: { en: "components", ar: "مكوّنًا" } },
      ],
      tech: ["React", "TypeScript", "CSS logical properties", "Storybook"],
      award: "open-source-impact",
      link: { handle: "github.example/yara-mansouri", url: "https://github.example/yara-mansouri" },
    },
    {
      slug: "dalil-accessibility-toolkit",
      lens: ["engineering", "design"],
      featured: false,
      name: { en: "Dalil Accessibility Toolkit", ar: "«دليل»: أدوات إمكانية الوصول" },
      summary: {
        en: "A browser extension that catches the accessibility issues other checkers miss in Arabic.",
        ar: "إضافة للمتصفح ترصد مشكلات إمكانية الوصول التي تفوت الأدوات الأخرى في العربية.",
      },
      org: { en: "Side project", ar: "مشروع جانبي" },
      period: { en: "Jan 2022 – Sep 2022", ar: "يناير 2022 – سبتمبر 2022" },
      span: ["2022-01", "2022-09"],
      role: { en: "Designer and developer", ar: "المصممة والمطوّرة" },
      team: { en: "Solo", ar: "عمل فردي" },
      problem: {
        en: "Accessibility checkers missed issues specific to Arabic and right-to-left pages.",
        ar: "كانت أدوات فحص إمكانية الوصول تُغفل المشكلات الخاصة بالعربية وبالصفحات من اليمين إلى اليسار.",
      },
      action: {
        en: "Built a browser extension that flags 42 Arabic-specific accessibility issues and explains how to fix each one.",
        ar: "بنت إضافة للمتصفح ترصد 42 مشكلة في إمكانية الوصول خاصة بالعربية وتشرح طريقة إصلاح كل منها.",
      },
      result: { en: "Used by 3,400 developers in 22 countries.", ar: "يستخدمها 3,400 مطوّر في 22 دولة." },
      metrics: [
        { value: "42", label: { en: "Arabic-specific issues flagged", ar: "مشكلة خاصة بالعربية تُرصد" } },
        { value: "3,400", label: { en: "developers", ar: "مطوّر" } },
        { value: "22", label: { en: "countries", ar: "دولة" } },
      ],
      tech: ["JavaScript", "Chrome Extensions API", "axe-core"],
      award: null,
      link: null,
    },
    {
      slug: "rafeeq-rides-matching-app",
      lens: ["engineering"],
      featured: false,
      name: { en: "Rafeeq Rides Matching App", ar: "تطبيق المطابقة «رفيق رايدز»" },
      summary: {
        en: "Ride matching for university students, by campus, timetable and route.",
        ar: "مطابقة الرحلات لطلاب الجامعات بحسب الحرم الجامعي والجدول الدراسي والمسار.",
      },
      org: { en: "Rafeeq Rides", ar: "رفيق رايدز" },
      period: { en: "Apr 2015 – Dec 2016", ar: "أبريل 2015 – ديسمبر 2016" },
      span: ["2015-04", "2016-12"],
      role: { en: "Co-founder and CTO", ar: "شريكة مؤسِّسة والمديرة التقنية" },
      team: { en: "Team of 11", ar: "فريق من 11" },
      problem: {
        en: "University students had few safe and affordable ways to commute.",
        ar: "لم تكن أمام طلاب الجامعات وسائل تنقل آمنة وميسورة التكلفة إلا القليل.",
      },
      action: {
        en: "Designed the matching system that paired riders by campus, timetable and route.",
        ar: "صممت نظام المطابقة الذي يجمع الركاب بحسب الحرم الجامعي والجدول الدراسي والمسار.",
      },
      result: {
        en: "26,000 sign-ups and 140,000 rides before the company closed in Dec 2016.",
        ar: "26,000 تسجيل و140,000 رحلة قبل إغلاق الشركة في ديسمبر 2016.",
      },
      metrics: [
        { value: "26,000", label: { en: "sign-ups", ar: "تسجيل" } },
        { value: "140,000", label: { en: "rides", ar: "رحلة" } },
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps APIs"],
      award: null,
      link: null,
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      degree: { en: "PhD in Human-Computer Interaction", ar: "دكتوراه في تفاعل الإنسان مع الحاسوب" },
      lens: ["research"],
      school: { en: "Eastmoor Institute of Technology", ar: "معهد إيستمور للتقنية" },
      mode: { en: "Part-time, remote", ar: "دوام جزئي، عن بُعد" },
      period: { en: "Sep 2018 – Jul 2022", ar: "سبتمبر 2018 – يوليو 2022" },
      span: ["2018-09", "2022-07"],
      details: [
        {
          en: "Thesis: “Adaptive Typography for Arabic Interfaces: Readability, Density and Trust”",
          ar: "الأطروحة: «الطباعة المتكيّفة للواجهات العربية: المقروئية والكثافة والثقة»",
        },
        { en: "Best Doctoral Thesis in HCI, 2022", ar: "أفضل أطروحة دكتوراه في تفاعل الإنسان مع الحاسوب، 2022" },
      ],
    },
    {
      degree: { en: "Executive Certificate in Technology Leadership", ar: "شهادة تنفيذية في القيادة التقنية" },
      lens: ["engineering"],
      school: { en: "Eastmoor Business School", ar: "كلية إيستمور للأعمال" },
      mode: { en: "Online", ar: "عبر الإنترنت" },
      period: { en: "Jan 2021 – Jun 2021", ar: "يناير 2021 – يونيو 2021" },
      span: ["2021-01", "2021-06"],
      details: [
        {
          en: "6-month program completed while working full-time",
          ar: "برنامج مدته 6 أشهر أكملته مع العمل بدوام كامل",
        },
      ],
    },
    {
      degree: { en: "MSc in Interaction Design, with Distinction", ar: "ماجستير العلوم في تصميم التفاعل، بامتياز" },
      lens: ["design", "research"],
      school: { en: "University of Northbridge", ar: "جامعة نورثبريدج" },
      mode: { en: "Northbridge, United Kingdom", ar: "نورثبريدج، المملكة المتحدة" },
      period: { en: "Sep 2011 – Sep 2012", ar: "سبتمبر 2011 – سبتمبر 2012" },
      span: ["2011-09", "2012-09"],
      details: [
        {
          en: "Dissertation: “Bilingual Navigation Menus on Small Screens”",
          ar: "رسالة الماجستير: «قوائم التنقل ثنائية اللغة على الشاشات الصغيرة»",
        },
        { en: "Full scholarship", ar: "منحة دراسية كاملة" },
      ],
    },
    {
      degree: {
        en: "BSc in Computer Science, First Class Honours",
        ar: "بكالوريوس العلوم في علوم الحاسب، مع مرتبة الشرف الأولى",
      },
      lens: ["engineering"],
      school: { en: "Najd Valley University", ar: "جامعة وادي نجد" },
      mode: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" },
      period: { en: "Sep 2006 – Jun 2010", ar: "سبتمبر 2006 – يونيو 2010" },
      span: ["2006-09", "2010-06"],
      details: [
        { en: "GPA: 4.81 / 5.00", ar: "المعدل التراكمي: 4.81 / 5.00" },
        {
          en: "Exchange semester: Lindenhall University, Germany, Feb 2009 – Jul 2009",
          ar: "فصل تبادل طلابي: جامعة ليندنهال، ألمانيا، فبراير 2009 – يوليو 2009",
        },
        { en: "Best Graduation Project, 2010", ar: "أفضل مشروع تخرج، 2010" },
      ],
    },
  ],

  // ── Certifications ────────────────────────────────────────
  // Official names and issuers stay in English, as they appear on
  // the credentials. status: "in-progress" | "active" | "lifetime" | "expired"
  certificationsNote: {
    en: "19 earned, 1 in progress. All issuers and credential IDs are fictional.",
    ar: "19 شهادة مكتسبة، وواحدة قيد الإنجاز. جميع الجهات المانحة وأرقام الاعتماد خيالية.",
  },
  certifications: [
    {
      name: "Certified Security Architecture Professional (CSAP)",
      issuer: "Global Cyber Assurance Council",
      year: null,
      status: "in-progress",
      note: { en: "Exam booked for Dec 2026", ar: "الاختبار محجوز في ديسمبر 2026" },
      id: null,
    },
    {
      name: "Certified Cloud Solutions Architect – Professional",
      issuer: "Cloud Architecture Guild",
      year: 2025,
      status: "active",
      note: null,
      id: "CAG-CSA-25-0912",
    },
    {
      name: "Certified Design Leader",
      issuer: "Arabian Design Council",
      year: 2025,
      status: "active",
      note: null,
      id: "ADC-CDL-25-0044",
    },
    {
      name: "Multi-Cloud Platform Architect",
      issuer: "Halcyon Cloud Institute",
      year: 2024,
      status: "active",
      note: null,
      id: "HLC-MPA-24-3307",
    },
    {
      name: "Certified Container Application Developer",
      issuer: "Open Container Academy",
      year: 2024,
      status: "active",
      note: null,
      id: "OCA-CAD-24-1185",
    },
    {
      name: "Open Banking Product Specialist",
      issuer: "Gulf FinTech Academy",
      year: 2024,
      status: "active",
      note: null,
      id: "GFA-OBP-24-0219",
    },
    {
      name: "Certified Project Leadership Professional",
      issuer: "International Project Leadership Society",
      year: 2023,
      status: "active",
      note: null,
      id: "IPLS-CPL-23-5560",
    },
    {
      name: "Certified Accessibility Specialist",
      issuer: "Inclusive Interfaces Council",
      year: 2023,
      status: "active",
      note: null,
      id: "IIC-CAS-23-0471",
    },
    {
      name: "Applied Data Visualization Certificate",
      issuer: "Riyadh Data Institute",
      year: 2023,
      status: "lifetime",
      note: null,
      id: "RDI-ADV-23-0118",
    },
    {
      name: "UX Research and Interaction Design Certificate",
      issuer: "Meridian UX Institute",
      year: 2022,
      status: "lifetime",
      note: null,
      id: "MUI-UXR-22-8842",
    },
    {
      name: "Enterprise Architecture Practitioner",
      issuer: "Global Enterprise Architecture Forum",
      year: 2022,
      status: "active",
      note: null,
      id: "GEAF-EAP-22-0193",
    },
    {
      name: "Certified Agile Product Owner",
      issuer: "Agile Practice Council",
      year: 2022,
      status: "expired",
      note: { en: "Expired 2024", ar: "انتهت في 2024" },
      id: "APC-APO-22-6620",
    },
    {
      name: "Professional Scrum Facilitator, Level 1",
      issuer: "Agile Delivery Institute",
      year: 2021,
      status: "lifetime",
      note: null,
      id: "ADI-PSF-21-4410",
    },
    {
      name: "Cloud Application Developer – Associate",
      issuer: "Skyline Developer Program",
      year: 2021,
      status: "expired",
      note: { en: "Expired 2023", ar: "انتهت في 2023" },
      id: "SDP-CAD-21-2075",
    },
    {
      name: "IT Service Management Foundation",
      issuer: "Service Excellence Board",
      year: 2020,
      status: "lifetime",
      note: null,
      id: "SEB-ITSM-20-9931",
    },
    {
      name: "Health Data Privacy Practitioner",
      issuer: "Middle East Health Informatics Board",
      year: 2020,
      status: "active",
      note: null,
      id: "MEHIB-HDP-20-0306",
    },
    {
      name: "Lean Six Sigma Green Belt",
      issuer: "Institute for Process Excellence",
      year: 2019,
      status: "lifetime",
      note: null,
      id: "IPE-LSS-19-1402",
    },
    {
      name: "Security Fundamentals Professional",
      issuer: "Cyber Readiness Academy",
      year: 2019,
      status: "expired",
      note: { en: "Expired 2022", ar: "انتهت في 2022" },
      id: "CRA-SFP-19-7718",
    },
    {
      name: "Usability Analysis Professional",
      issuer: "Usability Practice Institute",
      year: 2016,
      status: "lifetime",
      note: null,
      id: "UPI-UAP-16-0268",
    },
    {
      name: "Advanced Motion Design for Interfaces",
      issuer: "London School of Interface Craft",
      year: 2014,
      status: "lifetime",
      note: null,
      id: "LSIC-MD-14-0052",
    },
  ],

  // ── Awards ────────────────────────────────────────────────
  awards: [
    {
      id: "design-technology-leader",
      lens: ["design"],
      name: { en: "Design Technology Leader of the Year", ar: "قائدة تقنيات التصميم للعام" },
      issuer: { en: "Gulf Design Week Awards", ar: "جوائز أسبوع الخليج للتصميم" },
      year: 2025,
      reason: { en: "For the Mizan Design System", ar: "عن نظام التصميم «ميزان»" },
    },
    {
      id: "best-fintech-experience",
      lens: ["design"],
      name: { en: "Best Fintech Experience", ar: "أفضل تجربة في التقنية المالية" },
      issuer: { en: "Arab Fintech Excellence Awards", ar: "جوائز التميّز العربية في التقنية المالية" },
      year: 2024,
      reason: { en: "For Savings Goals", ar: "عن «أهداف الادخار»" },
    },
    {
      id: "top-40-under-40",
      lens: ["engineering", "design", "research"],
      name: { en: "Top 40 Under 40 in Saudi Tech", ar: "أفضل 40 تحت سن الأربعين في التقنية السعودية" },
      issuer: { en: "Riyadh Tech Review", ar: "مجلة الرياض للتقنية" },
      year: 2023,
      reason: { en: "For career achievement", ar: "عن الإنجاز المهني" },
    },
    {
      id: "best-doctoral-thesis",
      lens: ["research"],
      name: { en: "Best Doctoral Thesis in HCI", ar: "أفضل أطروحة دكتوراه في تفاعل الإنسان مع الحاسوب" },
      issuer: { en: "Eastmoor Institute of Technology", ar: "معهد إيستمور للتقنية" },
      year: 2022,
      reason: { en: "For the PhD thesis", ar: "عن أطروحة الدكتوراه" },
    },
    {
      id: "open-source-impact",
      lens: ["engineering"],
      name: { en: "Open Source Impact Award", ar: "جائزة أثر المصادر المفتوحة" },
      issuer: { en: "Arab Open Source Foundation", ar: "المؤسسة العربية للمصادر المفتوحة" },
      year: 2022,
      reason: { en: "For Hirfa UI", ar: "عن Hirfa UI" },
    },
    {
      id: "digital-health-innovation",
      lens: ["engineering"],
      name: { en: "Digital Health Innovation Award", ar: "جائزة الابتكار في الصحة الرقمية" },
      issuer: { en: "Middle East Health Informatics Board", ar: "مجلس الشرق الأوسط للمعلوماتية الصحية" },
      year: 2021,
      reason: { en: "For the telemedicine platform", ar: "عن منصة الطب الاتصالي" },
    },
    {
      id: "women-in-tech-leadership",
      lens: ["engineering"],
      name: { en: "Women in Tech Leadership Award", ar: "جائزة القيادة النسائية في التقنية" },
      issuer: { en: "Saudi Women in Design Network", ar: "شبكة السعوديات في التصميم" },
      year: 2020,
      reason: { en: "For leadership at Zayna Health Tech", ar: "عن القيادة في «زينة للتقنية الصحية»" },
    },
    {
      id: "silver-responsive-design",
      lens: ["design"],
      name: { en: "Silver, Responsive Design category", ar: "الجائزة الفضية، فئة التصميم المتجاوب" },
      issuer: { en: "London Web Craft Awards", ar: "جوائز لندن لحِرفة الويب" },
      year: 2014,
      reason: {
        en: "For a retail client website at Brightwell Studio",
        ar: "عن موقع لعميل في قطاع التجزئة في «برايتويل ستوديو»",
      },
    },
    {
      id: "rising-star-ux",
      lens: ["design"],
      name: { en: "Rising Star in UX", ar: "النجمة الصاعدة في تجربة المستخدم" },
      issuer: { en: "UK Interaction Design Guild", ar: "رابطة تصميم التفاعل البريطانية" },
      year: 2013,
      reason: {
        en: "For a public-sector client website at Brightwell Studio",
        ar: "عن موقع لعميل في القطاع العام في «برايتويل ستوديو»",
      },
    },
    {
      id: "best-graduation-project",
      lens: ["engineering"],
      name: { en: "Best Graduation Project", ar: "أفضل مشروع تخرج" },
      issuer: { en: "Najd Valley University", ar: "جامعة وادي نجد" },
      year: 2010,
      reason: {
        en: "For an Arabic speech-to-text note-taking app",
        ar: "عن تطبيق لتدوين الملاحظات يحوّل الكلام العربي إلى نص",
      },
    },
  ],

  // ── Patents ───────────────────────────────────────────────
  patents: [
    {
      title: {
        en: "Method for adaptive Arabic text rendering based on reading context",
        ar: "طريقة لعرض النص العربي بشكل متكيّف بحسب سياق القراءة",
      },
      number: { en: "Patent No. SA 11223 (fictional)", ar: "براءة رقم SA 11223 (خيالية)" },
      status: "granted",
      date: { en: "Granted Jun 2024", ar: "مُنحت في يونيو 2024" },
    },
    {
      title: {
        en: "System for bilingual component theming in design systems",
        ar: "نظام لتنسيق المكوّنات ثنائية اللغة في أنظمة التصميم",
      },
      number: { en: "Application No. SA 2025-0417 (fictional)", ar: "طلب رقم SA 2025-0417 (خيالي)" },
      status: "pending",
      date: { en: "Filed Mar 2025, pending", ar: "قُدّم في مارس 2025، قيد الدراسة" },
    },
  ],

  // ── Publications ──────────────────────────────────────────
  // Citations stay in their published language.
  publicationsNote: {
    en: "Selected 6 of 9. Full list: scholar.example/yaram",
    ar: "6 منشورات مختارة من أصل 9. القائمة الكاملة: scholar.example/yaram",
  },
  publications: [
    {
      year: 2022,
      authors: "Al-Mansouri, Y., & Marsh, H.",
      title: "Adaptive typography for Arabic interfaces: A study with 312 readers.",
      venue: "Journal of Human-Centred Computing, 14(3), 211–238.",
    },
    {
      year: 2021,
      authors: "Al-Mansouri, Y.",
      title: "Trust signals in Arabic health apps.",
      venue: "Proceedings of the International Conference on Arabic Interfaces (ICAI 2021), 45–56.",
    },
    {
      year: 2020,
      authors: "Al-Mansouri, Y., Rahman, S., & Okafor, T.",
      title: "Right-to-left design systems at scale.",
      venue: "Proceedings of DesignOps Summit Asia 2020, 12–19.",
    },
    {
      year: 2020,
      authors: "Al-Mansouri, Y., & Marsh, H.",
      title: "Measuring reading comfort on small screens.",
      venue: "ICAI 2020 Workshop on Arabic Typography, 8–13.",
    },
    {
      year: 2019,
      authors: "Al-Mansouri, Y.",
      title: "Teaching front-end development in Arabic: Lessons from 50,000 learners.",
      venue: "Gulf Journal of Computing Education, 7(1), 33–49.",
    },
    {
      year: 2012,
      authors: "Hart, L., & Al-Mansouri, Y.",
      title: "Bilingual navigation menus on small screens.",
      venue: "Northbridge Interaction Lab Technical Report NIL-TR-2012-07.",
    },
  ],

  // ── Speaking and media ────────────────────────────────────
  talksNote: { en: "Selected 8 of 31 talks.", ar: "8 محاضرات مختارة من أصل 31." },
  talks: [
    {
      kind: { en: "Keynote", ar: "كلمة رئيسية" },
      title: { en: "Design systems that speak two languages", ar: "أنظمة تصميم تتحدث لغتين" },
      event: { en: "Najd Developer Days 2025", ar: "أيام نجد للمطورين 2025" },
      city: { en: "Riyadh", ar: "الرياض" },
      year: 2025,
    },
    {
      kind: { en: "Talk", ar: "محاضرة" },
      title: { en: "Accessibility is a product decision", ar: "إمكانية الوصول قرار يخص المنتج" },
      event: { en: "Gulf Design Week 2025", ar: "أسبوع الخليج للتصميم 2025" },
      city: { en: "Dubai", ar: "دبي" },
      year: 2025,
    },
    {
      kind: { en: "Panel", ar: "جلسة حوارية" },
      title: { en: "Building trust in fintech UX", ar: "بناء الثقة في تجربة المستخدم للتقنية المالية" },
      event: { en: "Gulf Fintech Builders Forum 2024", ar: "ملتقى بُناة التقنية المالية الخليجي 2024" },
      city: { en: "Riyadh", ar: "الرياض" },
      year: 2024,
    },
    {
      kind: { en: "Talk", ar: "محاضرة" },
      title: { en: "Scaling a team from 6 to 64", ar: "تنمية فريق من 6 إلى 64" },
      event: { en: "Engineering Leadership Week 2023", ar: "أسبوع القيادة الهندسية 2023" },
      city: { en: "Cairo", ar: "القاهرة" },
      year: 2023,
    },
    {
      kind: { en: "Talk", ar: "محاضرة" },
      title: { en: "What my PhD taught me about Arabic type", ar: "ما علّمتني إياه الدكتوراه عن الحرف العربي" },
      event: { en: "Typography Majlis 2022", ar: "مجلس الطباعة 2022" },
      city: { en: "Jeddah", ar: "جدة" },
      year: 2022,
    },
    {
      kind: { en: "Keynote", ar: "كلمة رئيسية" },
      title: { en: "Telemedicine at national scale", ar: "الطب الاتصالي على المستوى الوطني" },
      event: { en: "Digital Health Middle East Summit 2021", ar: "قمة الشرق الأوسط للصحة الرقمية 2021" },
      city: { en: "Online", ar: "عبر الإنترنت" },
      year: 2021,
    },
    {
      kind: { en: "Talk", ar: "محاضرة" },
      title: { en: "Why our startup failed", ar: "لماذا فشلت شركتنا الناشئة" },
      event: { en: "Founders Night Riyadh 2016", ar: "ليلة المؤسسين في الرياض 2016" },
      city: { en: "Riyadh", ar: "الرياض" },
      year: 2016,
    },
    {
      kind: { en: "Talk", ar: "محاضرة" },
      title: { en: "Responsive design for right-to-left", ar: "التصميم المتجاوب للكتابة من اليمين إلى اليسار" },
      event: { en: "Frontend Horizons London 2014", ar: "آفاق الواجهات الأمامية، لندن 2014" },
      city: { en: "London", ar: "لندن" },
      year: 2014,
    },
  ],
  media: [
    {
      kind: { en: "Cover story", ar: "موضوع الغلاف" },
      title: { en: "The engineer who designs in two directions", ar: "المهندسة التي تصمم في اتجاهين" },
      outlet: { en: "Riyadh Tech Review", ar: "مجلة الرياض للتقنية" },
      detail: null,
      date: { en: "Mar 2023", ar: "مارس 2023" },
    },
    {
      kind: { en: "Podcast guest", ar: "ضيفة بودكاست" },
      title: { en: "From startup failure to Principal Engineer", ar: "من فشل شركة ناشئة إلى مهندسة رئيسية" },
      outlet: { en: "Build in Arabic, Episode 42", ar: "«ابنِ بالعربية»، الحلقة 42" },
      detail: null,
      date: { en: "Jun 2024", ar: "يونيو 2024" },
    },
    {
      kind: { en: "YouTube channel", ar: "قناة يوتيوب" },
      title: { en: "Yara Builds", ar: "Yara Builds" },
      outlet: null,
      detail: {
        en: "86 tutorials on design systems and right-to-left front-end, 48,000 subscribers",
        ar: "86 درسًا عن أنظمة التصميم والواجهات الأمامية من اليمين إلى اليسار، و48,000 مشترك",
      },
      date: { en: "2020 – Present", ar: "2020 – الآن" },
    },
    {
      kind: { en: "Article", ar: "مقال" },
      title: { en: "Accessibility debt in fintech", ar: "ديون إمكانية الوصول في التقنية المالية" },
      outlet: { en: "Medium", ar: "ميديم" },
      detail: { en: "Read 120,000 times", ar: "قُرئ 120,000 مرة" },
      date: { en: "Nov 2023", ar: "نوفمبر 2023" },
    },
  ],

  // ── Leadership, teaching and volunteering ─────────────────
  leadershipNote: { en: "Held alongside the full-time roles above.", ar: "أدوار شغلتها إلى جانب وظائفها بدوام كامل." },
  leadership: [
    {
      role: { en: "Adjunct Lecturer (part-time)", ar: "محاضِرة غير متفرغة (بدوام جزئي)" },
      org: { en: "College of Computing, Najd Valley University", ar: "كلية الحاسبات، جامعة وادي نجد" },
      period: { en: "Sep 2019 – Jun 2024", ar: "سبتمبر 2019 – يونيو 2024" },
      span: ["2019-09", "2024-06"],
      detail: {
        en: "Taught Human-Computer Interaction, Front-End Development and Design Systems to 1,400+ students over 10 semesters",
        ar: "درّست تفاعل الإنسان مع الحاسوب وتطوير الواجهات الأمامية وأنظمة التصميم لأكثر من 1,400 طالب وطالبة على مدى 10 فصول دراسية",
      },
    },
    {
      role: { en: "Advisory Board Member", ar: "عضوة المجلس الاستشاري" },
      org: { en: "Saudi Women in Design Network", ar: "شبكة السعوديات في التصميم" },
      period: { en: "Mar 2022 – Present", ar: "مارس 2022 – الآن" },
      span: ["2022-03", null],
      detail: {
        en: "Runs the annual mentorship program for 60 early-career designers",
        ar: "تدير برنامج الإرشاد السنوي لـ 60 مصممًا ومصممة في بداية مسيرتهم",
      },
    },
    {
      role: { en: "Technical Advisor", ar: "مستشارة تقنية" },
      org: { en: "2 early-stage health-tech startups", ar: "شركتان ناشئتان في التقنية الصحية في مراحلهما الأولى" },
      period: { en: "Feb 2024 – Present", ar: "فبراير 2024 – الآن" },
      span: ["2024-02", null],
      detail: {
        en: "Advises on product strategy, hiring and architecture",
        ar: "تقدم المشورة في استراتيجية المنتج والتوظيف والبنية التقنية",
      },
    },
    {
      role: { en: "Mentor", ar: "مرشدة" },
      org: { en: "Najd Valley Startup Accelerator", ar: "مسرّعة وادي نجد للشركات الناشئة" },
      period: { en: "Jan 2020 – Present", ar: "يناير 2020 – الآن" },
      span: ["2020-01", null],
      detail: { en: "Mentored 25 startups across 6 cohorts", ar: "أرشدت 25 شركة ناشئة عبر 6 دفعات" },
    },
    {
      role: { en: "Hackathon Judge", ar: "محكِّمة هاكاثونات" },
      org: { en: "Various organizers", ar: "جهات منظمة متعددة" },
      period: { en: "Jan 2018 – Present", ar: "يناير 2018 – الآن" },
      span: ["2018-01", null],
      detail: { en: "Judged 12 hackathons in Riyadh, Jeddah and Dubai", ar: "حكّمت 12 هاكاثونًا في الرياض وجدة ودبي" },
    },
    {
      role: { en: "Volunteer Instructor", ar: "مدرِّبة متطوعة" },
      org: { en: "Code for Community, Riyadh", ar: "«البرمجة للمجتمع»، الرياض" },
      period: { en: "Jan 2017 – Jun 2017", ar: "يناير 2017 – يونيو 2017" },
      span: ["2017-01", "2017-06"],
      detail: {
        en: "Taught a 12-week web development course to 45 adult learners",
        ar: "درّست دورة في تطوير الويب مدتها 12 أسبوعًا لـ 45 متعلمًا من الكبار",
      },
    },
  ],

  // ── Languages ─────────────────────────────────────────────
  languages: [
    { name: { en: "Arabic", ar: "العربية" }, level: { en: "Native", ar: "اللغة الأم" } },
    { name: { en: "English", ar: "الإنجليزية" }, level: { en: "Fluent (C2), IELTS 8.5", ar: "طلاقة (C2)، آيلتس 8.5" } },
    {
      name: { en: "French", ar: "الفرنسية" },
      level: { en: "Upper intermediate (B2), DELF B2", ar: "فوق المتوسط (B2)، ‏DELF B2" },
    },
    {
      name: { en: "German", ar: "الألمانية" },
      level: { en: "Elementary (A2), from the exchange semester", ar: "مبتدئ متقدم (A2)، من فصل التبادل الطلابي" },
    },
    {
      name: { en: "Turkish", ar: "التركية" },
      level: { en: "Beginner (A1), currently learning", ar: "مبتدئ (A1)، تتعلمها حاليًا" },
    },
  ],

  // ── Interests ─────────────────────────────────────────────
  interests: [
    {
      en: "Arabic calligraphy, with work shown in 2 group exhibitions",
      ar: "الخط العربي، وعُرضت أعمالها في معرضين جماعيين",
    },
    { en: "Long-distance running: 3 half marathons", ar: "الجري لمسافات طويلة: 3 سباقات نصف ماراثون" },
    { en: "Restoring old film cameras", ar: "ترميم كاميرات الأفلام القديمة" },
    { en: "Chess, with an online rating of 1,850", ar: "الشطرنج، بتصنيف 1,850 على الإنترنت" },
  ],
};
