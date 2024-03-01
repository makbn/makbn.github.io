import { faXTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faUserAstronaut, faHelmetSafety, faUpRightFromSquare, faArchive } from "@fortawesome/free-solid-svg-icons";
import Experience from "./model/Experience";
import Company from "./model/Company";
import Skill from "./model/Skill";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

export const PROPERTIES = {
    first_name: "Mehdi",
    last_name: "Akbarian",
    nick_name: "Matt A.",
    location: "Calgary, AB, Canada",
    location_abbrv : "YYC",
    occupation: "Software Engineer",
    occupation_abbrv: "SDE",
    occupation_start_year: 2016,
    url_avatar: "/makbn.svg",
    url_twitter: "https://x.com/matt_rastaghi?s=21",
    url_github: "https://github.com/makbn",
    url_linkedin: "https://ca.linkedin.com/in/mehdiakbarian",
    url_blog: "/blog",
    url_source: "https://github.com/makbn/makbn.github.io",
    question_samples: [
        "Mehdi's professional background",
        "Show me his academic backgroud",
        "How many years of experience",
        "Spring boot experinces?"
    ]
};

export const HEADER_ITEMS = [
    {title: "Blog", url: PROPERTIES.url_blog, icon: faBlog},
    {title: "X", url: PROPERTIES.url_twitter, icon: faXTwitter},
    {title: "Github", url: PROPERTIES.url_github, icon: faGithub},
  ];

export const FOOTER_ITEMS = [
    {title: "LinkedIn", url: PROPERTIES.url_linkedin, icon: faLinkedin},
    {title: "X", url: PROPERTIES.url_twitter, icon: faXTwitter},
    {title: "Github", url: PROPERTIES.url_github, icon: faGithub},
  ];

export const INFO_SECTIONS = [
  {id:0, title:"Work Experience / Professional Background"},
  {id:1, title:"Projects"},
  {id:2, title:"Technologies"},
  {id:3, title:"Academic Background"},
  {id:4, title:"About me / Summery"},
  {id:5, title:"Contact me"}
];

export const EXPERIENCES = [
  new Experience("Software Developer", 
    new Company("Aimsio", "Calgary, AB, Canada", "https://aimsio.com", "logos/aimsio.png"),
    2022, "Present", [
        new Skill("Java", 10),
        new Skill("Vaadin", 8),
        new Skill("MySQL", 9),
        new Skill("RabbitMQ", 9),
        new Skill("REST API", 10),
        new Skill("Web Developent", 10),
        new Skill("Message Queue", 7)
    ], [
      "Developed various parts of the system including a Budgeting system, Dynamic Form Builder, Access Control, etc.",
      "Involved in mainiting and refactoring code, migrating legacy codes, and system architectural design.",
    ]),
  new Experience("Applied Data Scientist | Research Assistant",
    new Company("UAlberta Databases Lab.", "Edmonton, AB, Canada", "https://www.ualberta.ca/computing-science/research/research-labs.html", "logos/ualberta.png"),
    2021, 2022, [
      new Skill("Python", 9),
      new Skill("MySQL", 9),
      new Skill("MongoDB", 8),
      new Skill("PyTorch", 7),
      new Skill("Data Processing", 8),
      new Skill("LLM", 7),
      new Skill("NLP", 7)
    ], [
      "Researched on Entity Matching (EM) and developed a software with LLMs and DNN to study their practicality.",
      "Assisted in teaching 'File and Database Management' and 'Information Retrieval' courses."
    ]),

  new Experience("Software Engineer", 
    new Company("Fanap Co.", "Iran", "https://fanap.ir/en", "logos/fanap.png"),
    2018, 2020,[
      new Skill("Java", 10),
      new Skill("Spring", 9),
      new Skill("MySQL", 8),
      new Skill("Docker", 7),
      new Skill("Mesos", 8),
      new Skill("Cloud Computing", 8),
      new Skill("Linux", 8),
      new Skill("REST API", 10)
    ], [
      "Led a diverse engineering team to design and developed SAKKU Container Orchestration Platform.",
      "Developed various parts of private cloud storage and migrate the legacy code to a modern Spring boot project."
    ]),
  new Experience("Sofware Engineer", 
    new Company("WeClick", "Iran", null, "logos/weclick.png"),
    2018, 2015,[
    new Skill("Java", 10),
    new Skill("Android", 9),
    new Skill("SQL", 8),
    new Skill("Socket", 7),
    new Skill("Git", 8),],[
      "Implemented the Android library for the Tapleader SDK using Java to collect clients' telemetric data.",
      "Designed the client-server architecture and developed the Java client for the SignalGo framework project."
    ])
];

export const ACADEMIC = [
  new Experience("Master of Science - Computing Science",
  new Company("University of Alberta", "Edmonton, AB, Canada", "https://www.ualberta.ca", "logos/ualberta.png"),
  "Jan. 2021", "Dec. 2022", [
    new Skill("Relational Database", 10),
    new Skill("Entity Matching", 9),
    new Skill("Open Entity Resolution", 8),
    new Skill("NLP", 7),
    new Skill("Transformers", 6),
    new Skill("LLM", 7),
    new Skill("Python", 10)
  ], [
    "Worked as a Data Scientist and Research Assistant on Open Entity Resolution and Entity clustering using Deep Neural network approaches. During my collaboration, I used large language models (LLM) and NLP techniques developing software to study their practicality on Entity Matching under the supervision of Dr. Davood Rafiei.",
    "Teaching Assistant in File and Database Management (CMPUT 291) course under the Supervision of Dr. Rafiei. In this course, we helped students with basic concepts in computer data organization and information processing, entity-relationship model; relational model; SQL and other relational query languages; and storage architecture. They learned how to use Python, SQLite, and MongoDB.",
    "Teaching Assistant in Information Retrieval Course under the instruction of Dr. Denilson Barbosa."
  ]),
  new Experience("Bachelor of Engineering - Software Engineering",
  new Company("Ferdowsi University of Mashhad", "Mashhad, Iran", "https://en.um.ac.ir/", "logos/fum.png"),
  "Sep. 2014", "Aug. 2019", [
    new Skill("Software Architecture", 10),
    new Skill("Advanced Programming", 10),
    new Skill("AI", 7),
    new Skill("Algorithm & Data Structure", 9),
    new Skill("Statistics", 7),
    new Skill("Relational Database", 10)
  ], [
    "Worked as a Data Scientist and Research Assistant on Open Entity Resolution and Entity clustering using Deep Neural network approaches. During my collaboration, I used large language models (LLM) and NLP techniques developing software to study their practicality on Entity Matching under the supervision of Dr. Davood Rafiei.",
    "Teaching Assistant in File and Database Management (CMPUT 291) course under the Supervision of Dr. Rafiei. In this course, we helped students with basic concepts in computer data organization and information processing, entity-relationship model; relational model; SQL and other relational query languages; and storage architecture. They learned how to use Python, SQLite, and MongoDB.",
    "Teaching Assistant in Information Retrieval Course under the instruction of Dr. Denilson Barbosa."
  ])
]

export const PROJECTS = {
  professional : [
    {
      id: 0,
      name: "Aimsio",
      short_desc: "Field Management SaaS",
      desc: "Aimsio is an all-in-one field management software. Offices use the Aimsio web portal to dispatch crew and equipment, track projects, track HSE and compliance, create invoices, and generate reports. There is also a mobile app for field users to be notified of new jobs, fill out forms and tickets, capture electronic signatures, and more. At Aimsio, I'm responsible for developing different part of the system using Java and Vaadin framework which boraden my tasks from backend to frontend. So far, I work on the different module including Job Order management, WBS Budgeting, Report Access Management, Dynamic Form Builder, JUnit 5 migration, Vaading framework migration, and so many other tasks.",
      url: "https://aimsio.com/",
      repo: null,
      extra: [
        {
          title: "What is Aimsio?",
          icon: faHelmetSafety,
          url: "https://aimsio.com/meet-the-team/"
        },
        {
          title: "Meet the Team",
          icon: faUserAstronaut,
          url: "https://aimsio.com/meet-the-team/"
        },
        {
          title: "LinkedIn Page",
          icon: faLinkedin,
          url: "https://www.linkedin.com/company/invistaware-inc-/"
        },
        {
          title: "X/Twitter Page",
          icon: faXTwitter,
          url: "https://twitter.com/aimsioinc?lang=en"
        }
      ]
    },
    {
      id: 1,
      name: "SAKKU Cloud",
      short_desc: "Private Container Ochestration",
      desc: "SAKKU is a proprietary container orchestration platform developed by the team at Fanap Co. to efficiently manage and deliver both internal and public services. We unified servers across Fanap and Pasargard Bank datasenters using Apache Mesos, and we utilize Docker containers and OpenWhisk to deploy services effectively. SAKKU offers a variety of services, including managed databases, application scaling based on resource usage, blue-green deployment, live application resource and log monitoring, application versioning, on-demand web-based file management, and collaborative development tools. Currently, SAKKU is part of Podium services and supports most Podium projects.",
      url: "https://panel.sakku.ir/",
      repo: "https://github.com/SakkuCloud",
      extra: [
        {
          title: "X/Twitter Page",
          icon: faXTwitter,
          url: "https://twitter.com/aimsioinc?lang=en"
        }, 
        {
          title: "English website (translated by Google)",
          icon: faUpRightFromSquare,
          url: "https://panel-sakku-ir.translate.goog/auth/login?_x_tr_sl=fa&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc&_x_tr_hist=true"
        }, 
        {
          title: "Podium website (translated by Google)",
          icon: faUpRightFromSquare,
          url: "https://podium-ir.translate.goog/?_x_tr_sl=fa&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc&_x_tr_hist=true"
        }
      ]
      
    },
    {
      id: 2,
      name: "POD Space Cloud",
      short_desc: "Private Cloud Storage",
      desc: "POD Space is an integral component of the Podium service, offering storage solutions for Podium users via both web portal and mobile application interfaces. It encompasses a wide range of functionalities akin to leading platforms such as Google Drive and Dropbox, facilitating file and folder sharing, document and media viewing, file copying, and supporting resumable uploads and downloads. Moreover, POD Space extends its storage services to other projects within the Podium ecosystem, employing common protocols such as FTP, S3, and HTTP-based upload/download APIs. However, due to the critical nature of the service and Iranian governmental regulations regarding user files, access to the service is unfortunately restricted from many countries.",
      url: "https://podspace.ir/",
      repo: null,
      extra: [
        {
          title: "POD Space page in POD intergaration Serices",
          icon: faUpRightFromSquare,
          url: "https://ic.pod.ir/%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA-%D8%AA%D8%AC%D8%A7%D8%B1%DB%8C/%D9%BE%D8%A7%D8%AF%D8%A7%D8%B3%D9%BE%DB%8C%D8%B3/"
        },
        {
          title: "POD Space Android Application",
          icon: faAndroid,
          url: "https://cafebazaar.ir/app/ir.pod.podspace"
        }, 
        {
          title: "POD Space service description in Podium",
          icon: faUpRightFromSquare,
          url: "https://podium-ir.translate.goog/digital-services/podspece?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true"
        }
      ]
    },
    {
      id: 3,
      name: "Tapleader SDK",
      short_desc: "Application Campaign Tracking",
      desc: "Tapleader Analytics offered complimentary, unrestricted reporting for a daily quota of installations. It served as a robust in-app analytics solution, empowering users to track the efficacy of their app installation sources in real-time. This allowed for the assessment of each marketing channel's performance through a unified interface. However, the project was discontinued due to alterations in the Android platform.",
      url: null,
      repo: "https://github.com/tapleader/tapleader-sdk-android",
      extra: [
        {
          title: "Project's website snapshot",
          icon: faArchive,
          url: "https://web.archive.org/web/20180326120056/http://www.tapleader.com/"
        }
      ]
    },
    {
      id: 4,
      name: "WeClick Advertising",
      short_desc: "Intelligent Advertising System",
      desc: "Weclick addressed the prevalent issues in online advertising on Iranian websites. It aimed to revolutionize the advertising landscape by offering a more user-friendly experience through less intrusive ad formats like well-designed textual or banner ads. Additionally, it tackled the problem of incorrect pricing models by ensuring fairness to advertisers and optimizing ad performance. Weclick's intelligent system prioritized relevance, ensuring that users were presented with ads tailored to their interests. By focusing on balancing the needs of advertisers, ad display, and users, Weclick aimed to create a more efficient and satisfactory online advertising ecosystem for all parties involved. However, the project is discontinued.",
      url: null,
      repo: "https://github.com/weclick-ir/Weclick_SDK_sample",
      extra: [
        {
          title: "Project's website snapshot",
          icon: faArchive,
          url: "https://web.archive.org/web/20161206055942/https://weclick.ir/"
        }
      ]
    }
  ],
  personal : [
      {
        id: 5,
        name: "JThumbnailer",
        short_desc: "Thumbnail Generator",
        desc: "JThumbnail is a project dedicated to simplifying the process of generating thumbnails from documents and video files in Java. It aims to provide a straightforward solution for developers. Leveraging the power of FFmpeg, a widely recognized multimedia framework, JThumbnail offers a user-friendly approach to thumbnail generation for Java applications. With support for various video formats and documents files and configurable options, JThumbnail strives to assist users in creating quality thumbnails with ease.",
        url: "https://makbn.com/JThumbnail/",
        repo: "https://github.com/makbn/JThumbnail",
        extra: []
      },
      {
      id: 6,
      name: "Java Leaflet",
      short_desc: "Java wrapper for Leaflet Map",
      desc: "Java Leaflet is a project designed to provide Java developers with an accessible way to incorporate interactive maps into their applications. By leveraging Leaflet.js, it offers a straightforward solution for displaying maps with ease. Whether you're working on a Java web app, Java mobile application, or Java desktop software, Java Leaflet simplifies the process of integrating dynamic map functionality. It aims to be a helpful tool for developers seeking to enhance their projects with map visualizations.",
      url: "https://makbn.com/java_leaflet/",
      repo: "https://github.com/makbn/java_leaflet",
      extra:[]
      },
      {
        id: 7,
        name: "Personal Webpage",
        short_desc: "Personal webpage with React",
        desc: "This website that you are currently exploring is part of my attempt to learn React and modern front-end developent. I developed this simple project to learn basics of React and use some of the common state-of-the-art libraries and framework in front-end developent.",
        url: "#",
        repo: "https://github.com/makbn/makbn.github.io"
      },
      {
        id: 8,
        name: "ROBEM",
        short_desc: "PLMs for Entity Matching",
        desc: "The paradigm of fine-tuning Pre-trained Language Models (PLMs) has been successful in Entity Matching (EM). Despite their remarkable performance, PLMs exhibit tendency to learn spurious correlations from training data. In this work, we aim at investigating whether PLM-based entity matching models can be trusted in real-world applications where data distribution is different from that of training. To this end, we design an application to assess the robustness of EM models to facilitate their deployment in the real-world settings.",
        url: "https://dl.acm.org/doi/abs/10.1145/3511808.3557673",
        repo: "https://github.com/makbn/robem",
        extra:[]
      },
      {
        id: 9,
        name: "Finding Trudeau",
        short_desc: "Crawling CNN and Twitter",
        desc: "Finding Trudeau (FT) is a simple application for crawling CNN and Twitter looking for any news and tweets about Justin Trudeau. Plus, you can generate word cloud from the most important topics and keywords from Mr. Trudeau's tweets!",
        url: null,
        repo: "https://github.com/makbn/finding_trudeau",
        extra: []
      }
  ]
}

export default PROPERTIES