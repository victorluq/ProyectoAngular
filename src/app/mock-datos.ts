import { dato } from "./datos"
export const DATOS: dato[] = [
    {
        nombre: "Victor",
        apellido: "Uzcátegui",
        profesion: "Desarrollador Web Full Stack",
        imgperfil: "../../assets/Img/Fotoperfil.jpg",
        sobremi: "¡Hola! soy Victor Luis, apasionado por la tecnología y la ingeniería. Me encuentro en crecimiento profesional como Desarrollador Web Full Stack. Tengo como objetivo mantenerme en constante formación en el área, llevando lo aprendido a la práctica, soy responsable, empático, dedicado, curioso y habituado al trabajo en equipo. Me encantaría formar parte de proyectos que me permitan ampliar mis habilidades y conocimientos, así como también colaborar con el equipo de trabajo para conseguir soluciones concretas que sirvan a la organización.",
        descripcion_habilidades: "Cuento con habilidades tanto técnicas como blandas, las cuales puedo desarrollar en mi ambito profesional, siendo de mucha ayuda para la organización.",
        descripcion_proyectos: "Estos son lgunos de los proyectos que he realizado con la implementación de distintas tecnologías. Actualmente me encuentro desarrollando nuevos proyectos que apliarán mi portafolio web.",
        descripcion_contacto: "Si tienes algún proyecto en el que te gustaría que participe, te invito a contactarme por medio del siguiente formulario, de igual forma puedes hacer uso del mismo para dejarme cualquier comentario o simplemente para saludarme.",
    
        educations: [
            {
                id: 1,
                imgEdu: "../../assets/Img/arg-programa.png",
                sizeImg: "120%",
                titulo: "Desarrollador Web Full Stack Jr. (Yo Programo)",
                inicio: "Junio 2022",
                fin: "Enero 2023",
                institucion: "Ministerio de Desarrollo Productivo - Argentina Programa",
                descripcionEdu: "Formación en desarrollo, con prácticas en Front-End (estático y dinámico), Bases de Datos, POO, Back-End (Java EE y Java Spring Boot) y Dev Ops."
            },
              {
                id: 2,
                imgEdu: "../../assets/Img/arg-programa.png",
                sizeImg: "120%",
                titulo: "Trainer Primeros pasos en Programación (Sé Programar)",
                inicio: "Septiembre 2021",
                fin: "Noviembre 2021",
                institucion: "Ministerio de Desarrollo Productivo - Argentina Programa",
                descripcionEdu: "Fundamentos básicos de la programación, programación imparativa (JvaScript) y programación con objetos (Ruby)."
            },
            {
                id: 3,
                imgEdu: "../../assets/Img/logoUnefa.png",
                sizeImg: "60%",
                titulo: "Ingeniero Civil.",
                inicio: "Noviembre 2005",
                fin: "Diciembre 2010",
                institucion: "Universidad Nacional Experimental Politecnica de la Fuerza Armada Nacional.",
                descripcionEdu: "Completé con éxito todas las materias, con buen promedio en calificaciones. Desarrollé pasantias industriales de modo satisfactorio en el Sistema Ferroviario Ezequiel Zamora en Aragua-Venezuela."
            }
        ],
    
        experiencias: [
            {
                id: 1,
                imgExp: "../../assets/Img/freelancer.png",
                sizeImg: "80%",
                puesto: "Full Stack Developer.",
                inicio: "Octubre 2022",
                fin: "Actualmente",
                empresa: "Freelancer",
                descripcionExp: "Desarrollado de proyectos personales con el propósito de poner en práctica mis habilidades y conocimientos."
            },
            {
                id: 2,
                imgExp: "../../assets/Img/ANSV.png",
                sizeImg: "100%",
                puesto: "Analista de Seguridad Vial",
                inicio: "Marzo 2018",
                fin: "Actualmente",
                empresa: "Agencia NAcional de Seguridad Vial",
                descripcionExp: "Ejecución de Auditorias de Infraestructura de Seguridad Vial en Rutas NAcionales, Provinciales y entornos urbanos."
            }
    
        ],
    
        "habilidadesFront": [
            {
                id: 1,
                habilidad: "HTML",
                icono: "fa-brands fa-html5",
                nivel: "Avanzado",
                porcentajeProgreso: "95%"
            },
            {
                id: 2,
                habilidad: "CSS",
                icono: "fa-brands fa-css3-alt",
                nivel: "Avanzado",
                porcentajeProgreso: "95%"
            },
            {
                id: 3,
                habilidad: "JavaScript",
                icono: "fa-brands fa-square-js",
                nivel: "Intermedio",
                porcentajeProgreso: "60%"
            },
            {
                id: 4,
                habilidad: "Bootstrap",
                icono: "fa-brands fa-bootstrap",
                nivel: "Avanzado",
                porcentajeProgreso: "95%"
            },
            {
                id: 5,
                habilidad: "Angular",
                icono: "fa-brands fa-angular",
                nivel: "Intermedio",
                porcentajeProgreso: "60%"
            }
        ],
    
        habilidadesBack: [
            {
                id: 1,
                habilidad: "Java/Spring Boot",
                icono: "fa-brands fa-java",
                nivel: "Básico",
                porcentajeProgreso: "45%"
            },
            {
                id: 2,
                habilidad: "MySQL",
                icono: "fa-solid fa-database",
                nivel: "Básico",
                porcentajeProgreso: "45%"
            }
        ],
    
        habilidadesSoft: [
            {
                id: 1,
                habilidad: "Creatividad e innovación",
                icono: "fa-solid fa-lightbulb",
                nivel: "En los trabajos que realizo",
                porcentajeProgreso: "100%"
            },
            {
                id: 2,
                habilidad: "Productividad y gestión de tiempo",
                icono: "fa-solid fa-clock",
                nivel: "En las tareas que me asignan",
                porcentajeProgreso: "100%"
            },
            {
                id: 3,
                habilidad: "Colaboración y trabajo en equipo",
                icono: "fa-solid fa-handshake",
                nivel: "Con mi equipo de trabajo",
                porcentajeProgreso: "100%"
            },
            {
                id: 4,
                habilidad: "Empatía",
                icono: "fa-solid fa-hand-holding-heart",
                nivel: "Con los que me rodean",
                porcentajeProgreso: "100%"
            },
            {
                id: 5,
                habilidad: "Autodidacta",
                icono: "fa-solid fa-laptop-code",
                nivel: "Con lo que me apasiona",
                porcentajeProgreso: "100%"
            }
        ],
    
        proyectos: [
            {
                id: 1,
                Titulo: "Portfolio Web - Argentina Programa",
                Descripcion: "Proyecto Integrador como trabajo final del Curso de Desarrollo Web Full Stack - Yo Programo, realizado con herramientas como HTML, CSS, Bootstrap y JS(Angular).",
                imgproyecto: "../../assets/Img/proyecto.png",
                URLlivedemo: "",
                URLrepositorio: "",
                fecha: "Septiembre 2022"
            },
            {
                id: 2,
                Titulo: "Task List - Proyecto Personal",
                Descripcion: "Aplicación Task List, con funciones que permiten agregar y eliminar tareas, además de aplicar recordatorio. Se realizó con herramientas como HTML, CSS y Angular ",
                imgproyecto: "../../assets/Img/Task-List.png",
                URLlivedemo: "",
                URLrepositorio: "",
                fecha: "Octubre 2022"
            }
        ]
    }
]