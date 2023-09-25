import "./navbar.css";
import resume from "../document/resume.pdf";

const Navbar = () => {
  const pages = [
    {
      name: "Home",
      link: "/portfolio/#home",
    },

    {
      name: "Projects",
      link: "#projects",
    },

    {
      name: "About",
      link: "#about",
    },

    {
      name: "Contact",
      link: "#contact",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/sniperrabiul/",
    },
    {
      name: "Github",
      link: "https://github.com/mdraabiul",
    },
    {
      name: "Resume",
      link: resume,
    },

    {
      name: "Admin",
      link: "/admin",
    },
  ];

  return (
    <nav className="navbar">
      <a href="/portfolio/#home" className="title">
        <span></span>
        <p>Rabiul</p>
      </a>

      {pages.map((page, index) => (
        <a key={index} href={page.link} id={`link-${index}`}>
          {console.log(page.link)}
          {page.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
