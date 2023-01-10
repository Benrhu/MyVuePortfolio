let info = {
  name: "Rubén D",
  logo_name: "Rubén",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "¡Muy buenas!, soy Rubén, programador web fullstack, que básicamente significa que soy capaz de desarrollar webs de forma íntegra sin necesidad de contratar a nadie más. Y eso te ahorra mucho dinero :)",
  links: {
    linkedin: "https://www.linkedin.com/in/rubendiazhuelva/",
    github: "https://github.com/Benrhu"
  },
  skills: [
    {
      title: "UX (Experiencia del usuario)",
      info: ["Tengo bastante experiencia y soy muy detallista con cada aspecto que influye en la experiencia que viven nuestros clientes"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "Desarrollo",
      info: [
        "Tengo amplia experiencia desarrollando webs ideales para hacer vender a PyMEs y autónomos"],
      icon: "fa fa-code"
    },
    {
      title: "Seguridad",
      info: [
        "Me encanta dotar de buena seguridad cualquier tipo de software que desarrollo"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Seguimiento del proceso",
      info: ["Obtendrás constante feedback del progreso de tu web"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Precio económico",
      info: ["Mi modelo de precios es asequible y ayuda a comprender mucho mejor cómo funciona el software"],
      icon: "fas fa-money"
    },
    {
      title: "Tu web en menos de 3 meses",
      info: ["Obtendrás tu web en menos de 3 mess, garantizado."],
      icon: "fas fa-shipping-fast"
    },
  ],
  portfolio: [
    {
      name: "Grouzy Website",
      pictures: [
        {
          img: require("./src/assets/portfolio/diary/1.png")
        }
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web básica",
      github:
        "#",
      visit: "#",
      description:
        "Una web sencilla para una empresa de Desarrollo Web"
    },
    {
      name: "Network Marketing API",
      pictures: [
        {
          img: require("./src/assets/api.png")
        }
      ],
      technologies: ["NodeJS", "Vue 3"],
      category: "Software interno",
      github: "#",
      visit: "#",
      description:
        "Un software interno para una empresa de Network Marketing (MLM)"
    },
    {
      name: "Plantilla para inmobiliarias",
      pictures: [
        {
          img: require("./src/assets/inmo.jpeg")
        }
      ],
      technologies: ["React"],
      category: "Plantilla web",
      github:
        "#",
      visit: "#",
      description:
        "Una plantilla para inmobiliarias totalmente personalizable"
    },
  ],
};

export default info;
