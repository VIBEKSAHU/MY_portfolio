/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vibek Kumar Sahu",
  title: "Hi all, I'm Vibek Kumar Sahu",
  subTitle: emoji(
    "Dedicated Full Stack Software Developer 🚀 adept at creating impactful web applications. Skilled in JavaScript, React.js, and Node.js, I specialize in delivering seamless and engaging digital experiences through innovative technologies and frameworks."
  ),
  // resumeLink:
    // "https://drive.google.com/file/d/1lQZCnJimI1ZVRE3NMlxkSOBB_VLXInRV/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AraygithubK",
  linkedin: "https://www.linkedin.com/in/krisha-arya",
  gmail: "krishaarya05@gmail.com",
  leetcode: "https://leetcode.com/u/KrishaArya55/",
  instagram: "",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER, INQUISITIVE TO KNOW NEW TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Craft engaging Front-End experiences with precision, leveraging expertise in JavaScript, ReactJS,TailwindCSS, C/C++, etc."
    ),
    emoji(
      "⚡ Proficient in developing Progressive Web Applications (PWAs) within diverse technology stacks, ensuring seamless user experiences."
    ),
    emoji(
      "⚡ Seamless integration of third-party services, including AWS, to enhance functionality and performance."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fa-white fa-code"
    },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fa-gray fa-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Srinath University",
      logo: require("./assets/images/University-logo-1024x1024.png"),
      subHeader: "Masters of Computer Application",
      duration: "July 2023 - July 2025",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
        {
      schoolName: "Srinath University",
      logo: require("./assets/images/University-logo-1024x1024.png"),
      subHeader: "Masters of Computer Application",
      duration: "July 2023 - July 2025",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
        {
      schoolName: "Srinath University",
      logo: require("./assets/images/University-logo-1024x1024.png"),
      subHeader: "Masters of Computer Application",
      duration: "July 2023 - July 2025",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Web Developer",
    //   company: "Pandri Market Pvt. Ltd.",
    //   companylogo: require("./assets/images/pm.png"),
    //   date: "March 2023 – June 2023",
    //   desc: "A real life E-commerce website",
    //   descBullets: [
    //     "I have used Linode Server for Linux based virtual machine.",
    //     "For relational database management system I have used Postgres.",
    //     "Leveraged a tech stack comprising NodeJS, ExpressJS,OTP verification on Firebase, ensuring data protection and user trust.",
    //     "I have used ReactJS and Tailwind CSS for the frontend"
    //   ],
    //   btn: {
    //     name: "Certificate",
    //     url: "https://drive.google.com/file/d/1lwPUeup81bsQ7lwdmc-y_STn2vjmwK8m/view?usp=sharing"
    //   }
    // }
    // {
    //   role: "Mentor",
    //   company: "Physics Wallah",
    //   companylogo: require("./assets/images/pw.png"),
    //   date: "Feb 2022 - June 2022",
    //   desc: "Mentorship Intern",
    //   descBullets: [
    //     "Mentored more than 500 students at Physics Wallah Pvt. Ltd.",
    //     "Offered guidance in devising individualized study plans for JEE preparation, ensuring a tailored and effective approach to their academic pursuits"
    //   ],
    //   btn: {
    //     name: "Certificate",
    //     url: "https://drive.google.com/file/d/16MUwEDO_VxmWdnu1Yo6qQlk0HgbARMzG/view"
    //   }
    // },
    //  {
    //   role: "Mentor",
    //   company: "Physics Wallah",
    //   companylogo: require("./assets/images/pw.png"),
    //   date: "Feb 2022 - June 2022",
    //   desc: "Mentorship Intern",
    //   descBullets: [
    //     "Mentored more than 500 students at Physics Wallah Pvt. Ltd.",
    //     "Offered guidance in devising individualized study plans for JEE preparation, ensuring a tailored and effective approach to their academic pursuits"
    //   ],
    //   btn: {
    //     name: "Certificate",
    //     url: "https://drive.google.com/file/d/16MUwEDO_VxmWdnu1Yo6qQlk0HgbARMzG/view"
    //   }
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/shopShake_logo.png"),
      projectName: "ShopShake",
      projectDesc: "A real life E-commerce website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shopshake-frontend.netlify.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/Aryagithubk/shopshake_fullstack"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shopizza_icon.png"),
      projectName: "Shopizza",
      projectDesc: "A frontend website for buying pizza",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shopizzza.netlify.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/Aryagithubk/Shopizza"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dbgr.png"),
      projectName: "Dbugger",
      projectDesc: "Empowering Change through Web Development and Education",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dbugger.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/Aryagithubk/DBUGGER"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nquenn.png"),
      projectName: "N-Queen Visualiser",
      projectDesc: "An algorithm visualiser",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://n-queens-visualisers.netlify.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/Aryagithubk/N_queen_visualizer"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" "),
  subtitle: "Achievements, Certifications that I have done !",

  achievementsCards: [
    {
      title: "GSSoC",
      subtitle: "",
      image: require("./assets/images/gsoc.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "ID Card for Contributer",
          url: "https://drive.google.com/file/d/1fob62Vw-CO9JihaR9xejb0RMjeCdD2dy/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "GitHub",
        //   url: "https://github.com/gracious7/NIRF-CU-70"
        // }
      ]
    },

    {
      title: "Explore a Career in Front-End Web Development",
      subtitle: "",
      image: require("./assets/images/coursera_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://drive.google.com/file/d/1nkNR81EosVDXrvi_7rr4ilMBevKWwOv6/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "GitHub",
        //   url: "https://github.com/gracious7/note-vault"
        // }
      ]
    },
    {
      title: "C++",
      subtitle: "",
      image: require("./assets/images/cpp_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://drive.google.com/file/d/1bfgyeZh_1veqOz3ARz9FPO8XNkzSTxcw/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "GitHub",
        //   url: "https://github.com/gracious7/note-vault"
        // }
      ]
    },
    {
      title: "Data Structures and Algorithms (Self-Paced)",
      subtitle: "",
      image: require("./assets/images/dsa_slef_placed_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://drive.google.com/file/d/1UrqPOwS6DiWzzUdXOMTiYBtcw9icyEOp/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "GitHub",
        //   url: "https://github.com/gracious7/note-vault"
        // }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8709358003",
  email_address: "vibeksahu055@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
