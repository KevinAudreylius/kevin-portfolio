import { Icons } from "@/components/icons";
import { Globe, HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { SQL } from "@/components/ui/svgs/sql";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { HTML } from "@/components/ui/svgs/html";
import { Vue } from "@/components/ui/svgs/vuejs";
import { Figma } from "@/components/ui/svgs/figma";
import { C } from "@/components/ui/svgs/c";
import { CSS } from "@/components/ui/svgs/css";

export const DATA = {
  name: "Kevin Audreylius",
  initials: "KA",
  url: "https://portofolio-2024-theta.vercel.app/",
  location: "Jakarta, Indonesia",
  locationLink: "https://maps.app.goo.gl/2dboaHwiWQcJeVSj7",
  description:
    "I’m a Software Engineer who loves building things, solving problems, and learning along the way. Welcome to my little corner of the internet.",
  summary:
    "My journey in technology started with a curiosity about how things work and a desire to build things of my own. I pursued Computer Science at [BINUS University](https://binus.ac.id/) and completed my degree in 3.5 years, followed by hands-on experience as an intern at [Freeport Indonesia](https://ptfi.co.id/). Today, that curiosity has grown into a career in software engineering, where I build and maintain applications, solve real-world technical challenges, and continuously explore better ways to turn ideas into working solutions.",
  avatarUrl: "/kevin.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
    { name: "SQL", icon: SQL },
    { name: "Javascript", icon: JavaScript },
    { name: "HTML", icon: HTML },
    { name: "Vue.js", icon: Vue },
    { name: "Figma", icon: Figma },
    { name: "C", icon: C },
    { name: "CSS", icon: CSS },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kevinaudreylius@gmail.com",
    tel: "+6287784896805",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KevinAudreylius",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kevin-audreylius/",
        icon: Icons.linkedin,

        navbar: true,
      },
      CV: {
        name: "CV",
        url: "/CV-KevinAudreylius.pdf",
        icon: Icons.cv,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "/Portofolio-KevinAudreylius.pdf",
        icon: Icons.portfolio,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=kevinaudreylius@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  organization: [
    {
      company: "Google Developer Student Club",
      href: "https://developers.google.com/community",
      badges: [],
      location: "Remote",
      title: "Member",
      logoUrl: "/gdsc.png",
      start: "Oct 2023",
      end: "Sep 2024",
      description:
        "Participated in 10+ workshops and training sessions through Google Developer Student Club, covering Front-End and Mobile Development. Explored 4+ Front-End technologies including JavaScript, Asynchronous JavaScript, Fetch API, and React, while also gaining hands-on exposure to Flutter for mobile development. These experiences broadened my technical skill set and strengthened my ability to adapt to different development environments.",
    },
    {
      company: "Bina Nusantara Computer Club (BNCC)",
      href: "https://bncc.net/",
      badges: [],
      location: "Onsite",
      title: "Activist",
      logoUrl: "/BNCC.png",
      start: "Oct 2022",
      end: "Aug 2023",
      description:
        "BNCC (Bina Nusantara Computer Club) is a well-known computer-based organization at Binus University, focused on building tech skills and encouraging innovation among students. BNCC offers various products which are including Learning and Training (LnT), an IT course that teaches practical skills; FAVE Solution, a software house providing real-world tech solutions; and Filemagz, a media platform sharing insights into the tech industry. BNCC also partners with other companies to organize technology events and drive creative projects, giving students valuable chances to connect with industry professionals and learn about the latest tech trends.\n\nIn the BNCC organization, I actively engaged in a series of activities and successfully completed all activist projects within BNCC. I also had the opportunity to contribute to Technoscape, one of BNCC's biggest event. This experience was incredibly rewarding, providing me with valuable skills and insights that have significantly enriched my personal and professional growth",
    },
    {
      company: "BNCC Learning & Training",
      badges: [],
      href: "https://bncc.net/",
      location: "Remote",
      title: "Member (Front End Development)",
      logoUrl: "/LnT.png",
      start: "Nov 2022",
      end: "May 2023",
      description:
        "I completed a multi-month Learning and Training (LnT) program at BNCC, specializing in Front-End Development. Throughout the program, I completed 2 major projects using HTML, CSS, and JavaScript, covering responsive layouts, UI implementation, and interactive web features. The hands-on projects strengthened my foundation in front-end development and gave me practical experience turning concepts into functional web applications.",
    },
  ],
  work: [
    {
      company: "Kamoro Maxima Integra",
      href: "https://www.kamoro.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/kamoro.png",
      start: "Mar 2026",
      end: "Present",
      description:
        "Founded in 2003, Kamoro Maxima Integra is an IT consulting company specializing in IT outsourcing, custom software development, and application integration, serving clients from growing businesses to Fortune Global 500 companies. \n\n As a Software Engineer, I turned client requirements into practical software solutions through system design, development, testing, and ongoing support.\n- Gathered and analyzed client requirements, translating them into system architecture, database schemas, and technical solutions.\n- Developed and enhanced .NET-based applications and REST APIs, implementing business logic, dynamic forms, validations, workflows, and data processing.\n- Delivered 15+ application enhancements to support evolving business requirements and improve application functionality.\n- Investigated and resolved 20+ application issues through debugging, code tracing, log analysis, and database inspection to identify root causes.\n- Performed root cause analysis (RCA) for functional and technical incidents, implementing corrective solutions to improve application stability.\n- Developed and optimized 30+ SQL queries and stored procedures to support business logic and application requirements.\n- Collaborated with clients, developers, and support teams throughout the end-to-end development lifecycle, from requirement gathering and implementation to testing, deployment, and ongoing support.",
    },
    {
      company: "Freeport Indonesia",
      badges: [],
      href: "https://ptfi.co.id/",
      location: "Remote",
      title: "Application Developer Intern",
      logoUrl: "/freeport.png",
      start: "Feb 2025",
      end: "Feb 2026",
      description:
        "PT Freeport Indonesia (PTFI) is a mining company affiliated with Freeport-McMoRan (FCX) and Mining Industry Indonesia (MIND ID). Operating in the Grasberg mineral district in Papua, Indonesia, PTFI mines and processes ore to produce copper, gold, and silver concentrates. The Grasberg mine is one of the world’s largest copper and gold deposits. PTFI is currently transitioning from the Grasberg open-pit mine toward several large-scale, high-grade underground mining projects designed for long-term production. \n\nAt PTFI, I contributed to developing and maintaining internal applications that support business operations. I worked closely with developers, business users, and support teams across the development lifecycle, from feature implementation and testing to deployment and handover.\n- Developed and maintained internal web applications using .NET Core, C#, HTML, CSS, Bootstrap, JavaScript, Vue.js, and SQL Server.\n- Built dynamic user interfaces with configurable forms, client-side validation, and approval workflows to support complex business processes.\n- Troubleshot, debugged, and tested applications to identify issues, ensure data accuracy, and maintain system stability.\n - Developed and optimized SQL Server stored procedures to implement new business logic and support reporting requirements.\n- Collaborated with developers, business users, and support teams in an Agile environment to deliver and improve application features.\n- Supported CI/CD pipelines using Azure DevOps, including deployment, testing, UAT, and application handover to the support team.",
    },
  ],
  education: [
    {
      school: "Binus University",
      href: "https://binus.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/binus.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Bunda Hati Kudus",
      href: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/9687379E-4465-4F03-9B4E-B5EA58B487A8",
      degree: "Senior High School",
      logoUrl: "/bhk.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Website Portofolio",
      href: "https://github.com/KevinAudreylius/Mid-Project-LnT",
      dates: "2022",
      active: true,
      description:
        "A front-end portfolio project developed as part of BNCC Learning & Training (LnT), showcasing interactive web design, engaging animations, and smooth transitions to create a visually dynamic user experience.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/KevinAudreylius/Mid-Project-LnT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project1.png",
      video:
        "",
    },
    {
      title: "Ngekos",
      href: "https://github.com/KevinAudreylius/Ngekos-Web-",
      dates: "2023",
      active: true,
      description:
        "A web platform designed to simplify the process of finding and renting boarding houses, helping users discover suitable accommodations based on their needs and preferences. The project uses dummy data featuring boarding houses around the BINUS University area to simulate a realistic accommodation search experience.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/KevinAudreylius/Ngekos-Web-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project2.png",
      video: "",
    },
    {
      title: "Jockey's Convention Center",
      href: "https://github.com/KevinAudreylius/Jakarta-Convention-Center-JCC-",
      dates: "2023",
      active: true,
      description:
        "A modern website showcasing a convention and exhibition center, featuring venue information, facilities, and event services to help visitors and organizers plan their events.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/KevinAudreylius/Jakarta-Convention-Center-JCC-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project3.png",
      video: "",
    },
    {
      title: "Teman Usaha",
      href: "https://www.figma.com/proto/65LWOWsgzYoneLpMbMVuJY/Projek-Lomba--Teman-Usaha-?page-id=0%3A1&node-id=343-326&node-type=canvas&viewport=-2733%2C-69%2C0.13&t=mm9HZw1WS6tzN6zW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=421%3A1208",
      dates: "2024",
      active: true,
      description:
        "A business management application designed to help small and medium-sized enterprises (SMEs/UMKM) streamline daily operations through integrated sales reporting, cashier (POS) functionality, and inventory management. The platform helps business owners monitor sales performance, track stock levels, and manage financial records more efficiently.",
      technologies: [
        "Figma",
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/proto/65LWOWsgzYoneLpMbMVuJY/Projek-Lomba--Teman-Usaha-?page-id=0%3A1&node-id=343-326&node-type=canvas&viewport=-2733%2C-69%2C0.13&t=mm9HZw1WS6tzN6zW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=421%3A1208",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/project5.png",
      video:
        "",
    },
    {
      title: "Website Portofolio (React)",
      href: "https://portofolio-2024-theta.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A personal portfolio website built with Next.js, TypeScript, React, and Tailwind CSS to showcase my technical skills, featured projects, and professional experience through a modern, responsive, and interactive interface.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
      ],
      links: [
        {
          type: "website",
          href: "https://portofolio-2024-theta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/KevinAudreylius/Portofolio-2024",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project4.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "PT.Freeport Indonesia MIS Bootcamp 4.0 Program",
      dates: "December 2024",
      location: "Jakarta, Indonesia",
      description:
        "Recognized as part of the best-performing team in the PT Freeport Indonesia MIS Bootcamp 4.0 Program for developing a software project using C# and .NET.",
      image:
        "/freeport.png",
      mlh: "",
      links: [
        {
          title: "MIS Bootcamp Certificate",
          href: "/MISBootcamp.png",
          icon: <Icons.globe className="h-3 w-3" />,
        },
      ],
    },
    {
      title: "TOP 10 Finalist of UI/UX Competition ISFEST UMN 2024",
      dates: "August 2024",
      location: "Jakarta, Indonesia",
      description:
        "Achieved Top 10 Finalist recognition in a UI/UX design competition by designing a user-centered application for small and medium-sized enterprises (SMEs/UMKM), focusing on intuitive navigation, practical business features, and a balance between usability, functionality, and visual appeal.",
      image:
        "/ISFEST.png",
      mlh: "",
      links: [
        {
          title: "UI/UX Competition Certificate",
          href: "/ISFEST_UIUX.png",
          icon: <Icons.globe className="h-3 w-3" />,
        },
      ],
    },
    {
      title: "Completion of BNCC Learning & Training Course",
      dates: "2022 - 2023",
      location: "Jakarta, Indonesia",
      description:
        "Completed BNCC’s Learning & Training (LnT) Front-End Development course, gaining hands-on experience in building responsive and interactive websites using HTML, CSS, and JavaScript through practical projects and assignments.",
      icon: "public",
      image:
        "/BNCCLNT.png",
      links: [
        {
          title: "BNCC Learning & Training Certificate",
          href: "/CompletionLNT.png",
          icon: <Icons.globe className="h-3 w-3" />,
        },
      ],
    },
  ],
} as const;
