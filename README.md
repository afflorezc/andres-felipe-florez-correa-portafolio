# Portafolio Personal

## Descripción

Este proyecto es un desarrollo básico de un SPA que consolida un portafolio personal básico. 
Se aplican las técnicas del diseño atómico para la reutilización de código, implementando los
componentes más pequeños (átomos), mediante los cuales se forman componentes compuestos (moleculas)
para lograr desarrollar secciones de página (organisms) mediante la agregación sucesiva de elementos.
Todos estos conceptos se aplican mediante el uso del framework de desarrollo web Next.js y la estructuración de archivos vista en clase, como buenas prácticas para reutilización de componentes entre proyectos. Para los estilos se manejaron las clases estándar de Tailwind.

## Caracteristicas

Se parte de un diseño establecido y unas pautas fijas respecto a la interfaz final de usuario, cambiando el color del tema dado por los de preferencia. Esta interfaz tiene dos temáticas de color para temas Claro y Oscuro, que se adaptan únicamente a la configuración del navegador. 

### Interfaz

- **Responsividad:** El diseño se adapta a varios tamaños de pantalla, renderizando objetos de manera preferencial (ocultando panel izquierdo en móvil y tablets) y reubicando el flujo de los elementos en dichos dispositivos.

- **Estética:** Se eligieron paletas de colores profesionales y sencillas, sin contrastes fuertes o colores exóticos. Dos paletas se aplicaron para los temas Claro u oscuros de pantalla, los cuales se aplican automáticamente según las preferencias establecidas en el dispositivo.

## Organización de código

Se sigue la nomenclatura estándar para el desarrollo, ubicando las carpetas de átoms, molecules y organisms dentro de un directorio denominado components. Las carpetas internas buscan mantener una lógica adecuada sobre las funciones de los componentes que se encontrarán en dichos archivos. La estructura general de dichos componentes es la siguiente:

```
portfolio/
├── app                             # Directorio principal de la App
├── ...                             # Documentación del proyecto y archivos de configuración
├── components/                     # Componentes
|   ├── atoms/
|   |    ├── Avatar                 # Avatar circular con foto
|   |    ├── bars/SkillLevel        # Barra de porcentaje para hábilidades 
|   |    ├── Buttons                # Botones principales o textos funcionales (o enlaces)
|   |    ├── icons/
|   |    |   ├── CardIcon           # Iconos de conocimientos para Cards
|   |    |   └── SocialNetworkLink  # Iconos de enlace a redes
|   |    └──  text/
|   |        ├── Parragraphs        # Textos 
|   |        └── Titles             # Tutulos principales
|   ├── molecules/ 
|   |    ├── Card                   # Diferentes Cards de la app
|   |    ├── information/
|   |    |   ├── Details            # Información de detalle para modales
|   |    |   ├── Education          # Detalles de educación con fecha
|   |    |   ├── PersonalInfo       # Datos personales principales (edad, ciudad..)
|   |    |   └── SectionStart       # Textos introductorios de cada sección
|   |    ├── Modal                  # Cuadro modal general
|   |    └── Skill                  # Detalles de una hábilidad (con o sin barra)
|   └── organism/                
|        ├── Info                   # Secciones de información educativa y personal
|        ├── lists
|        |   ├── Cards              # Listado de las diferentes Cards 
|        |   ├── EducationList      # Listado de información educativa detallada 
|        |   └── SkillsList         # Listado de hábilidades (con o sin barras)
|        └──  Sections              # Secciones principales de la página
├── utils/data                             
│   └── ...                         # Información general del portafolio para renderizar  
 ...          
```
En la estructura se muestra la carpeta de data en la que se ubican varios archivos con la información que compone el portafolio, es decir, todos los datos personales, de estudios, hábilidades y portafolios, con las descripciones y detalles respectivos.

## Como ejecutar

Clone el repositorio desde una terminal bash mediante

```bash 
    git clone https://github.com/202602-Ingeniria-Web-Udea/andres-felipe-florez-correa-portafolio.git
```
O descargue la carpeta comprimida desde la plataforma web de github.com. Descomprima el contenido y abra la carpeta principal del proyecto (portfolio) en una terminal o en su IDE de preferencia. Asegurese de contar con los aplicativos de gestión de dependencias de node en sus versiones más recientes, ya sea npm, yarn, pnpm o bun. Asegurese que el proyecto contenga los archivos de configuración de paquetes *package.json* y *package-lock.json*. Una vez comprobado puede instalar las dependencias o modules de node mediante

```bash
npm install 
# or
npm i
# or
yarn install
# or
yarn 
# or
npnm install
# or
npnm i
# etc
```

Encienda el servidor de desarrollo

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra en su navegador de preferencia la URL: [http://localhost:3000](http://localhost:3000) 