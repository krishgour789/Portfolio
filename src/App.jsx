import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function App() {
  const projects = [
    {
      title: "Vastrado Shopping Website",
      image: "Vastrado.webp",
      tech: ["Django", "HTML", "CSS", "JavaScript"],
      desc: "Full-featured ecommerce website built using Django.",
    },

    {
      title: "Rail Project",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
      tech: ["React", "Django", "PostgreSQL"],
      desc: "Railway reservation system with React & Django.",
    },

    {
      title: "To-Do List",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      tech: ["React", "Tailwind"],
      desc: "Beautiful and responsive to-do app.",
    },

    {
      title: "WhatsApp Auto Message",
      image: "whatsapp.jpg",
      tech: ["Python", "pywhatkit"],
      desc: "Automatic WhatsApp message sender.",
    },
  ];

  const skills = [
    {
      name: "Python",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },

    {
      name: "Django",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },

    {
      name: "React",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },

    {
      name: "JavaScript",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },

    {
      name: "HTML",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },

    {
      name: "CSS",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },

    {
      name: "Tailwind",
      logo:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },

    {
      name: "GitHub",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <div className="bg-[#050816] min-h-screen text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>
      </div>

      {/* HERO SECTION */}
      <motion.section
        id="home"
        className="relative px-6 lg:px-20 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        {/* NAVBAR */}
        <nav className="flex justify-between items-center mb-20">
          <h1 className="text-3xl font-bold">
            {"</>"} Krish Gour
          </h1>

          <div className="hidden md:flex gap-10 text-gray-300">

            <a
              href="#home"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
            >
              Home
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#certificates"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
            >
              Certificates
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
            >
              Contact
            </a>
          </div>

          <button className="border border-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-500 transition">
            Download CV
          </button>
        </nav>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-cyan-400 text-xl mb-4">
              👋 Hi, I'm
            </p>

            <h1 className="text-6xl lg:text-7xl font-extrabold mb-6">
              Krish{" "}
              <span className="text-purple-500">
                Gour
              </span>
            </h1>

            {/* TYPING EFFECT */}
            <TypeAnimation
              sequence={[
                "Full Stack Python Developer",
                2000,
                "React Developer",
                2000,
                "Django Developer",
                2000,
                "AI & ML Enthusiast",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl text-cyan-400 mb-6"
            />

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              I build modern web applications using
              Django, React and cutting-edge
              technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-8">

              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-2xl font-semibold hover:scale-110 hover:shadow-[0_0_40px_cyan] transition duration-300">
                Hire Me
              </button>

              <a href="#projects">
                <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                  View Projects
                </button>
              </a>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 text-3xl">

              <FaGithub className="hover:text-cyan-400 hover:scale-125 cursor-pointer transition duration-300" />

              <FaLinkedin className="hover:text-cyan-400 hover:scale-125 cursor-pointer transition duration-300" />

              <FaYoutube className="hover:text-cyan-400 hover:scale-125 cursor-pointer transition duration-300" />

              <FaInstagram className="hover:text-cyan-400 hover:scale-125 cursor-pointer transition duration-300" />

              <FaWhatsapp className="hover:text-cyan-400 hover:scale-125 cursor-pointer transition duration-300" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full"></div>

              <img
                src="profile.jpg"
                alt="profile"
                className="relative w-[350px] rounded-[40px] border-4 border-cyan-400/30 animate-bounce"
              />
            </div>

          </div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="px-6 lg:px-20 py-20"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-5xl font-bold mb-4">
          My Tech Stack
        </h2>

        <p className="text-gray-400 text-xl mb-14">
          Technologies I use to build modern and scalable applications
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-cyan-400 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition duration-300 group"
            >

              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-5 group-hover:scale-110 transition duration-300"
              />

              <h3 className="text-2xl font-semibold">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>
      </motion.section>

      {/* CERTIFICATES */}
      <motion.section
        id="certificates"
        className="px-6 lg:px-20 py-20"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-5xl font-bold text-center mb-4">
          Certificates
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Certifications and achievements
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Python Certificate",
              org: "Coursera",
              image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            },

            {
              title: "React Development",
              org: "Udemy",
              image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            },

            {
              title: "Django Bootcamp",
              org: "Infosys Springboard",
              image:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            },
          ].map((cert, index) => (
            <div
              key={index}
              className="group bg-[#111827] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-500"
            >

              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {cert.title}
                </h3>

                <p className="text-cyan-400 mb-5">
                  {cert.org}
                </p>

                <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-3 rounded-xl font-semibold hover:scale-105 transition">
                  View Certificate
                </button>

              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="px-6 lg:px-20 py-20"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Some projects I've built
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-4 transition duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 mb-6">
                  {project.desc}
                </p>

                <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                  Live Demo
                </button>

              </div>
            </div>
          ))}

        </div>
      </motion.section>

      {/* STATS */}
      <section className="px-6 lg:px-20 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#111827] p-10 rounded-3xl text-center border border-white/10">
            <h2 className="text-5xl font-bold text-cyan-400">
              10+
            </h2>

            <p className="text-gray-400 mt-4">
              Projects Completed
            </p>
          </div>

          <div className="bg-[#111827] p-10 rounded-3xl text-center border border-white/10">
            <h2 className="text-5xl font-bold text-cyan-400">
              8+
            </h2>

            <p className="text-gray-400 mt-4">
              Technologies Learned
            </p>
          </div>

          <div className="bg-[#111827] p-10 rounded-3xl text-center border border-white/10">
            <h2 className="text-5xl font-bold text-cyan-400">
              100%
            </h2>

            <p className="text-gray-400 mt-4">
              Passion For Coding
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 lg:px-20 py-20"
      >

        <div className="bg-[#111827] border border-cyan-400/20 rounded-3xl p-12">

          <h2 className="text-5xl font-bold mb-6">
            Let's Connect 🚀
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            I'm always open to discussing new opportunities and projects.
          </p>

          <div className="space-y-4">
            <p>Email: krishgour789@gmail.com</p>
            <p>Phone: +91 6261848268</p>
            <p>Location: Bhopal, India</p>
          </div>

        </div>
      </section>

      {/* SCROLL BUTTON */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 bg-cyan-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaArrowUp />
      </button>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-white/10">
        © 2026 Krish Gour • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}