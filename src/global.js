import { faXTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import Experience from "./model/Experience";
import Company from "./model/Company";
import Skill from "./model/Skill";

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
      "Designed and developed different parts of the system including a Budgeting system, Dynamic Form Builder, Report Action Access Control, etc.",
      "Participaded in Mainiting and Refactoring code and Migrating legacy codes.",
      "Involved in the general system architectural design process.",
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
      "Conducted research on Entity Resolution and developed a software with LLMs and DNN to study their practicality on Entity Matching.",
      "Assisted in teaching 'File and Database Management' and 'Information Retrieval' courses."
    ]),

  new Experience("Software Engineer", 
    new Company("Fanap Co.", "Iran", "https://fanap.ir/en", "logos/fanap.png"),
    2018, 2020),
  new Experience("Sofware Engineer", 
    new Company("WeClick", "Iran", null, "logos/weclick.png"),
    2018, 2020)
];

export default PROPERTIES