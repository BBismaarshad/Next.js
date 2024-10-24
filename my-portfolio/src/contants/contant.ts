import { UesrObject } from "@/models/User";
import { NavItems } from "@/models/Header2";

// export const userInfo: UesrObject = {
//   name: 'Code for Interview',
//   picture: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',

export const userInfo: UesrObject = {
  name: "Web-Dev",
  picture:
    "https://img.freepik.com/premium-photo/muslim-hijab…fice-desk-with-laptop-ai-generated_669954-490.jpg",
  heading: `<p>Passionate Web Developer
Crafting Responsive and User-Friendly Websites
Specializing in Modern Technologies and Frameworks
Bringing Ideas to Life Through Innovative Design
Your Partner in Digital Transformation</p>`,
  about: `
    
    <p>I&#39m a passionate web developer with a focus on creating responsive and user-friendly websites. With experience in HTML, CSS, JavaScript, and various frameworks like React, I thrive on turning complex problems into simple, beautiful solutions. My background in design enhances my ability to build visually appealing interfaces while ensuring optimal performance and accessibility. I’m always eager to learn new technologies and collaborate on innovative projects.</>
      `,
  skills: ["HTML", "CSS", "Javascript", "Typescript", "Next.js"],
};

export const headerItems: NavItems = {
  home: { label: "Home", page: "home" },
  about: { label: "About", page: "about" },
  project: { label: "Projects", page: "projects" },
};
export const projects = {
  htmlProject: {
    image:
      "https://i.ibb.co/ngrGNt4/Orange-and-Green-Illustration-Computer-Science-Presentation.jpg",
  },

  javascriptProject: {
    image:
      "https://i.ibb.co/2yvDmZS/Green-Modern-Simple-Cybersecurity-Presentation.jpg",
  },
  typescriptProject: {
    image:
      "https://i.ibb.co/FKY1HLC/Blue-Green-Modern-Illustration-Cybersecurity-Presentation.jpg",
  },
  nextjsProject: {
    image:
      "https://i.ibb.co/Y31qvTQ/Green-and-Black-Modern-Futuristic-Technology-Presentation.jpg",
  },
};
