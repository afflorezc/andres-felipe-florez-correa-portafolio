const SkillsTitles = {
    "EN":{languages:"Languages", prog:"Programming Languages", extra:"Extra Skills"},
    "ES":{languages:"Lenguajes", prog:"Lenguajes de Programación", extra:"Otras Habilidades"},
    "FR":{languages:"Langues", prog:"Langages de programmation", extra:"Autres Compétences"}
}

const Languages = {
    "EN":[
        { skill: "Spanish", perc: 100 },
        { skill: "English", perc: 85 },
        { skill: "French", perc: 70 },
    ],
    "ES":[
        { skill: "Español", perc: 100 },
        { skill: "Inglés", perc: 85 },
        { skill: "Francés", perc: 70 },
    ],
    "FR":[
        { skill: "Spagnol", perc: 100 },
        { skill: "Anglais", perc: 85 },
        { skill: "Français", perc: 70 },
    ]
};

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

export { SkillsTitles, Languages, ProgLanguages, Frameworks }