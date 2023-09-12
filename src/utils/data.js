import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 10,
    icon: HiOutlineDesktopComputer,
    bg: "#040273",
  },
  {
    name: "Web App Design",
    projects: 10,
    icon: CiMobile1,
    bg: "#FFD700",
  },
  {
    name: "Brand Identity",
    projects: 5,
    icon: MdWorkspacesOutline,
    bg: "#FF0000",
  },
];

export const WhatDoIHelp = [
  " My role as a digital marketer and web developer involves building and maintaining websites, optimizing them for search engines, and implementing various digital marketing strategies to drive traffic and achieve business goals. It's a dynamic field that combines technical skills with marketing knowledge to create effective online presence and campaigns.",
];

export const workExp = [
  {
    place: "Wideband Digitals",
    tenure: "Aug 2020 - Sep 2021",
    role: "Digital Marketer",
    detail:
      "I and my team planned, executed, and optimized  online marketing strategies across various channels, including SEO, social media, email, and paid advertising, to achieve business goals, analyze performance, and stay updated on industry trends.",
  },
  {
    place: "Expousal Services",
    tenure: "Sep 2021 - Sep 2022",
    role: "Graphic Designer",
    detail:
      " I was a responsible for creating visual content for various media, such as print, digital, and social media. i use my artistic and technical skills to design layouts, illustrations, logos, and other visual elements that convey a message or concept.",
  },
  {
    place: "Ekobits",
    tenure: "OCT 2022 - Till Date",
    role: "Front End Developer",
    detail:
      "I substantially enriched my skill set in web development through a rigorous and comprehensive training program at Ekobits, equipping myself with the essential knowledge and expertise required for this field",
  },
];

export const comments = [
  {
    name: "Maduka Micheal",
    post: "",
    comment:
      "We were in dire need of a website overhaul, and this web developer came to the rescue. Their technical prowess and design sensibilities transformed our outdated site into a modern masterpiece. They were always there to address our questions and concerns, making the entire process smooth and stress-free. We highly endorse their services",
    img: "./people2.png",
  },
  {
    name: "Mujeeb Abiola",
    post: "",
    comment:
      "Hiring this web developer was one of the best decisions we made for our online presence. They were professional, responsive, and went the extra mile to ensure our website was not only visually appealing but also optimized for performance. Their expertise made a significant impact on our business, and we couldn't be happier",
    img: "./people1.png",
  },
  {
    name: "Melodeefy",
    post: "",
    comment:
      "I can't say enough good things about this web developer. They are not only highly skilled but also great communicators. They patiently listened to our needs, offered creative solutions, and delivered a website that perfectly represents our brand. We're thrilled with the results",
    img: "./people2.png",
  },
  {
    name: "Bridal Bliss Grooming",
    post: "",
    comment:
      "Working with this web developer was an absolute pleasure! They took our vision and turned it into a stunning, user-friendly website that exceeded our expectations. Their attention to detail and commitment to delivering on time were truly impressive. We highly recommend their services!",
    img: "./people1.png",
  },
 
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
