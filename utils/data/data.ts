const Languages = [
    { skill: "Spagnol", perc: 100 },
    { skill: "Anglais", perc: 85 },
    { skill: "Français", perc: 70 },
    
];

const ProgLanguages = [
    { icon:"devicon:python", skill: "Python", perc: 75 },
    { icon:"devicon:java", skill:"Java", perc: 80},
    { icon:"devicon:javascript", skill:"Javascript", perc:60 },
    { icon:"logos:html-5", skill:"Html", perc:85 },
    { icon:"devicon:css", skill:"Css", perc:70 },
]

const Frameworks = [
    { icon:"thesvg-color:spring-boot", skill: "Spring SpringBoot" },
    { icon:"devicon:react", skill:"React"},
    { icon:"cib:next-js", skill:"Next.js" },
    { icon:"devicon:postgresql", skill:"PostgreSQL" },
    { icon:"devicon:mysql", skill:"MySQL MariaDB" },
]

const EducationHistory = [
    {
        role:"Student",
        title:"Mechanical Engineer",
        institution:"Universidad Nacional de Colombia",
        initDate:"Aug 2004",
        endDate:"Dec 2010",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    },
    {
        role:"Student",
        title:"Mechanical Engineer",
        institution:"Universidad Nacional de Colombia",
        initDate:"Aug 2004",
        endDate:"Dec 2010",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    }
]

const SkillCards = [
    { icon: "carbon:application-web", 
      title:"Web Development", description: "E-Commerce, Landing Pages"
    },
    { icon: "clarity:ci-cd-line", 
      title:"CI-CD Pipelines", description: "Github Actions - Docker"
    },
    { icon: "carbon:machine-learning-model", 
      title:"Machine Learning", description: "ML Models - Neural Networks"
    },
    { icon: "oui:vis-query-sql", 
      title:"Data Analysis", description: "SQL - Machine Learing"
    },
    { icon: "material-symbols:graph-3", 
      title:"Data Structures", description: "Queues, lists, trees"
    },
    { icon: "carbon:ibm-webmethods-api-gateway", 
      title:"Softwate Architecture", description: "Rest, GraphQL - Patterns"
    },
]

const PortfolioEx =  {
    image:"/story.png",
    title:"Story with Javafx",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.",
    link:{ text: "Learn more", ref: "https://github.com/afflorezc/cuento"}
  }

const Portfolios = [
  PortfolioEx,
  PortfolioEx,
  PortfolioEx,
  PortfolioEx
]

const MyPersonalData = [
  {field:"Age:", value:"39"},
  {field: "City:", value:"Medellín"},
  {field: "E-mail:", value:"afflorezc@gmail.com"},
  {field: "Freelance:", value:"Disponible", accented:true},
]

const Social = [
  {link:'https://www.linkedin.com/in/afflorezc', icon:'akar-icons:linkedin-fill'},
  {link:'https://www.github.com/afflorezc', icon:'griddy-icons:github-filled'},
  {link:'https://www.youtube.com/@andrespipe87', icon:'bi:youtube'}
]

export {Languages, ProgLanguages, Frameworks, EducationHistory, SkillCards, 
  PortfolioEx, Portfolios, MyPersonalData, Social}