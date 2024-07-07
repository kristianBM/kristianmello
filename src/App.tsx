import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "ToDoList",
      description:
        "Welcome to ToDoList, a personal task management application designed to help you stay organized and productive. With ToDoList, you can easily add, edit, and delete tasks, ensuring that you keep track of all your important activities. Whether you're planning your daily chores, managing work assignments, or tracking long-term projects, ToDoList provides a simple and intuitive interface to manage your tasks efficiently.",
      imageUrl: "https://raw.githubusercontent.com/kristianBM/kristianmello/master/src/assets/jpg/project-todolist.jpg",
      projectUrl: "/todolist",
    },
    {
      id: 2,
      title: "TicketHub",
      description:
        "Welcome to TicketHub, an innovative marketplace for events designed to connect event organizers with attendees effortlessly. With uTickets, you can explore a wide range of events, from concerts and sports games to theater performances and community gatherings. Our platform makes it easy for event organizers to list their events and for users to discover, purchase, and manage their tickets all in one place.",
      imageUrl: "https://raw.githubusercontent.com/kristianBM/kristianmello/master/src/assets/jpg/project-tickethub.jpg",
      projectUrl: "/tickethub",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Kristian Mello</a>
        </div>
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      <section className="hero">
        <div className="hero-social-icons">
          <a
            href="https://www.linkedin.com/in/kristian-mello-bonfim-733b42214/"
            target="_blank"
          >
            {" "}
            <FaLinkedin />
          </a>
          <a href="https://github.com/kristianBM" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/kristianmello/" target="_blank">
            <FaInstagram />
          </a>
          <a href="mailto:kristianmello.dev@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <div className="hero-content">
          <h1>HEY, I'M KRISTIAN MELLO</h1>
          <p>
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
          <a href="#projects" className="projects-button">
            Projects
          </a>
          <div className="mouse"></div>
        </div>
      </section>

      <section className="about-me" id="about">
        <h2>About Me</h2>
        <div className="underline"></div>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
        <div className="about-me-content">
          <div className="know-me">
            <h3>Get to know me!</h3>
            <div className="know-me-text">
              <p>
                I'm a <strong>Fullstack Web Developer</strong>, building and
                managing both the front-end and back-end of websites and web
                applications to ensure the success of the overall product. Check
                out some of my work in the <strong>Projects</strong> section.
              </p>

              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
            </div>
            <a
              href="/src/assets/pdf/Kristian Mello - Resume.pdf"
              target="_blank"
              className="know-me-button"
            >
              Resume
            </a>
          </div>

          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-list">
              <div className="skill-card">Java</div>
              <div className="skill-card">PHP</div>
              <div className="skill-card">Spring Framework</div>
              <div className="skill-card">SQL</div>
              <div className="skill-card">React</div>
              <div className="skill-card">JavaScript / TypeScript</div>
              <div className="skill-card">HTML</div>
              <div className="skill-card">CSS</div>
              <div className="skill-card">Git</div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-intro">
          <h2>Projects</h2>
          <div className="underline"></div>
          <span>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </span>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-row" key={project.id}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* <a
                  href={project.projectUrl}
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Case Study
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Kristian Mello</h3>
            <p>
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product.
            </p>
          </div>
          <div className="footer-right">
            <h3>Social</h3>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/kristian-mello-bonfim-733b42214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/kristianBM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/kristianmello/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a href="mailto:kristianmello.dev@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="underline-2"></div>
        <span>© Copyright 2024 . Made by </span>{" "}
        <a href="/" className="copyright">
          {" "}
          Kristian Mello
        </a>
      </footer>
    </>
  );
}

export default App;
