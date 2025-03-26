import { Request, Response } from "express";

export const getResume = (_req: Request, res: Response) => {
  res.json({
    education: [
      {
        year: "2019 - 2025",
        title: "Bachelor of E-commerce",
        subTitle:
          "University of Economics and Law, Vietnam National University",
        text: "Completed courses in programming, databases, web development, and computer science fundamentals. Actively participated in academic and extracurricular activities, strengthening both technical and communication skills.",
      },
    ],
    experience: [
      {
        year: "03/2025 - Present",
        title: "ICT Teacher",
        subTitle: "Lawrence S. Ting School",
        text: "Teaching ICT to high school students. Designing lesson plans and delivering engaging, practical lessons to develop students' digital skills.",
      },
      {
        year: "09/2023 - 11/2024",
        title: "Programming Instructor",
        subTitle: "Rikkei Academy",
        text: "Instructed Fullstack Programming Courses (Java, JavaScript, HTML, CSS, ReactJS). Taught Scratch, C, and Frontend development in collaboration with PTIT. Supported project-based learning and student career development.",
      },
      {
        year: "06/2022 - 09/2023",
        title: "Programming Instructor / Teaching Assistant",
        subTitle: "MindX Technology School",
        text: "Taught Scratch, Python, and web development to students aged 6–17. Assisted with curriculum delivery and class engagement.",
      },
      {
        year: "2022",
        title: "Front-end Developer",
        subTitle: "Success Software Services",
        text: "Participate and learn in projects using technologies such as ReactJs and NextJs, Typescript and Javascript ES6, Github conventions and Jira.",
      },
      {
        year: "09/2019 - Present",
        title: "Freelance Tutor",
        subTitle: "Private Tutoring in Computer Science and Programming",
        text: "Tutored high school and international students in Java, Python, C++, and helped with academic projects. Provided instruction for students from US, Canada, and Australia universities. Also trained students for MOS/IC3 certifications.",
      },
    ],
    certificates: [
      {
        year: "11/2024",
        title: "Microsoft Office Specialist",
        subTitle: "Word, Excel, PowerPoint",
        text: "",
      },
      {
        year: "11/2024",
        title: "IC3 GS5 Digital Literacy Certification",
        subTitle: "",
        text: "",
      },
    ],
    projects: [
      {
        year: "2022",
        title: "RAVI HOTEL",
        subTitle: "Ravi Tourism Development Investment Joint Stock Company",
        text: "This project involved the development of a website where visitors can access information about Ravi hotel, including the latest news and payment pages. Technologies used: ReactJS, Redux Saga, Typescript, Material UI, Adobe XD.",
      },
      {
        year: "2022",
        title: "Ho Chi Minh City Department of Health",
        subTitle: "Datahub",
        text: "Manage HIV patients information: patient list, treatment location, and history. Team: 3 frontend, 2 backend, 1 tester, 1 devops. Technologies: ReactJS, Redux Saga, Typescript, Material UI, Figma.",
      },
      {
        year: "2022",
        title: "KLDX",
        subTitle: "KLDX Platform",
        text: "A trading platform based on the Securities Tokenizer model with Issuers, Investors, Admin. Technologies: NextJs, ReactJs, Typescript, TailwindCSS, Ant Design.",
      },
    ],
  });
};
