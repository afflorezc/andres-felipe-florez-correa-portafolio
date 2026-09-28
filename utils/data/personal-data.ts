const Avatar ={
    "EN":{
        myName:"I'm Andrés Flórez",
        fullName:"Andrés F. Flórez C.",
        profession:"of Software Engineering",
        fullProfession:"Software Engineering Student",
        role:"Student"
    },
    "ES":{
        myName:"Soy Andrés Flórez",
        fullName:"Andrés F. Flórez C.",
        profession:"de Ingeniería de Sistemas",
        fullProfession:"Estudiante de Ingeniería de Sistemas",
        role:"Estudiante"
    },
    "FR":{
        myName:"Je suis Andrés Flórez",
        fullName:"Andrés F. Flórez C.",
        profession:"de L'Ingénierie Informatique",
        fullProfession:"Étudiant de L'Ingénierie Informatique",
        role:"Étudiant"
    },
};

const ProfileDetails = {
    "EN":{
        profile:"Software engineering fourth year student at University of Antioquia,"
                +" with experience in software development academic projects. Click below"
                +" to know more about me!",

        message:"I am a fourth year Student of Software engineering at University of Antioquia. I have"
                +" experience in software development through academic projects. I have worked in"
                +" backend deveploment using Java and Spring Boot with the use of the RESTful and GraphQL,"
                +" design and implementation of data base models in SQL using PostgreSQL and MySQL,"
                +" basic frontend implementation with frameworks like React with Vite or Next.js and"
                +" integrating the user interface via the api's consumption. I have 8+ years of"
                +" experience working as online tutor, improving my analytical, quick learning"
                +" problem solving and clear communication skills.",
    },
    "ES":{
        profile:"Estudiante de octavo semestre de Ingeniería de Sistemas en la Universidad de Antioquia,"
                +" con experiencia en programación y desarrollo de proyectos académicos funcionales.",

        message:"Soy estudiante de octavo semestre de Ingeniería de Sistemas en la Universidad de Antioquia,"
                +" con experiencia en programación y desarrollo de proyectos académicos funcionales."
                +" He trabajado principalmente en backend con Java y Spring Boot (APIs REST y GraphQL)," 
                +" modelamiento de bases de datos relacionales con SQL y consumo de APIs desde interfaces"
                +" básicas en React o Next.js. Cuento con más de 8 años de experiencia en tutorías académicas,"
                +" lo que ha fortalecido mis habilidades analíticas, de aprendizaje rápido, solución de problemas"
                +" y comunicación clara. ",
    },
    "FR":{
        profile:"",
        message:"",
    },
}

const MyPersonalData ={
    "EN": [
        {field:"Age:", value:"39"},
        {field: "City:", value:"Medellín"},
        {field: "E-mail:", value:"afflorezc@gmail.com"},
        {field: "Freelance:", value:"Disponible", accented:true},
        ],
    "ES": [ 
        {field:"Edad:", value:"39"},
        {field: "Ciudad:", value:"Medellín"},
        {field: "E-mail:", value:"afflorezc@gmail.com"},
        {field: "Freelance:", value:"Disponible", accented:true},
        ],
    "FR": [
        {field:"Age:", value:"39"},
        {field: "Ville/Village:", value:"Medellín"},
        {field: "E-mail:", value:"afflorezc@gmail.com"},
        {field: "Freelance:", value:"Disponible", accented:true},
        ]
};

const Social = [
  {link:'https://www.linkedin.com/in/afflorezc', icon:'akar-icons:linkedin-fill'},
  {link:'https://www.github.com/afflorezc', icon:'griddy-icons:github-filled'},
  {link:'https://www.youtube.com/@andrespipe87', icon:'bi:youtube'}
];

export {Avatar, ProfileDetails, MyPersonalData, Social}