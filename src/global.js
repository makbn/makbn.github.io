import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

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
    url_portfolio: "https://www.instagram.com/matt.akbn/",
    url_github: "https://github.com/makbn",
    url_linkedin: "https://ca.linkedin.com/in/mehdiakbarian",
    url_blog: "/blog",
    question_samples: [
        "Mehdi's professional background",
        "Show me his academic backgroud",
        "How many years of experience",
        "Spring boot experinces?"
    ]
};

export const HEADER_ITEMS = [
    {title: "Blog", url: PROPERTIES.url_blog, icon: faBlog},
    {title: "Portfolio", url: PROPERTIES.url_portfolio, icon: faInstagram},
    {title: "Github", url: PROPERTIES.url_github, icon: faGithub},
  ];

export const FOOTER_ITEMS = [
    {title: "LinkedIn", url: PROPERTIES.url_linkedin, icon: faLinkedin},
    {title: "Portfolio", url: PROPERTIES.url_portfolio, icon: faInstagram},
    {title: "Github", url: PROPERTIES.url_github, icon: faGithub},
  ];

export default PROPERTIES