import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function App() {
  const projects = [
    {
      title: "Vastrado Shopping Website",
      image:
        "Vastrado.webp",
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
      image:
        "whatsapp.jpg",
      tech: ["Python", "pywhatkit"],
      desc: "Automatic WhatsApp message sender.",
    },
  ];

  const skills = [
    "Python",
    "Django",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "GitHub",
  ];

  return (
    <div className="bg-[#050816] min-h-screen text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-20 py-10">
        {/* GLOW EFFECT */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

        {/* NAVBAR */}
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-3xl font-bold">
            {"</>"} Krish Gour
          </h1>

          <div className="hidden md:flex gap-10 text-gray-300">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
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

            <h2 className="text-2xl text-cyan-400 mb-6">
              Full Stack Python Developer | Data Science & Data Anaytic Enthusiast | Al & ML
          
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              I build modern web applications using Django,
              React and cutting-edge technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                Hire Me
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                View Projects
              </button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 text-3xl">
              <FaGithub className="hover:text-cyan-400 cursor-pointer transition" />
              <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
              <FaYoutube className="hover:text-cyan-400 cursor-pointer transition" />
              <FaInstagram className="hover:text-cyan-400 cursor-pointer transition" />
              <FaWhatsapp className="hover:text-cyan-400 cursor-pointer transition" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full"></div>

              <img
                src="profile.jpg"
                alt=""
                className="relative w-[350px] rounded-[40px] border-4 border-cyan-400/30"
              />
            </div>

            {/* TERMINAL */}
            <div className="absolute bottom-[-210px] right-[-30px] bg-[#0b1120] border border-cyan-400/20 p-6 rounded-3xl w-[320px] shadow-2xl backdrop-blur-xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="font-mono text-green-400 space-y-3 text-sm">
                <p>{">"} about</p>
                <p className="text-white">
                  Full Stack Developer
                </p>

                <p>{">"} skills</p>
                <p className="text-white">
                  Python, Django, React, SQL
                </p>

                <p>{">"} passion</p>
                <p className="text-white">
                  Coding • Teaching • Building
                </p>

                <p>{">"} status</p>
                <p className="text-white">
                  Always learning new things...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
<section className="px-6 lg:px-20 py-20">
  <h2 className="text-5xl font-bold mb-4">
    My Tech Stack
  </h2>

  <p className="text-gray-400 text-xl mb-14">
    Technologies I use to build modern and scalable
    applications
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
    {[
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
    ].map((skill, index) => (
      <div
        key={index}
        className="bg-[#111827] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-cyan-400 hover:-translate-y-3 transition duration-300 group"
      >
        {/* LOGO */}
        <img
          src={skill.logo}
          alt={skill.name}
          className="w-16 h-16 mb-5 group-hover:scale-110 transition duration-300"
        />

        {/* NAME */}
        <h3 className="text-2xl font-semibold">
          {skill.name}
        </h3>
      </div>
    ))}
  </div>
</section>

      {/* PROJECTS */}
      <section className="px-6 lg:px-20 py-20">
        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Some projects I've built to solve real world
          problems.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition duration-300 hover:border-cyan-400"
            >
              <img
                src={project.image}
                alt=""
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
      </section>

      {/* KNOWLEDGE */}
      <section className="px-6 lg:px-20 py-20">
        <h2 className="text-5xl font-bold text-center mb-16">
          My Knowledge
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Python",
              percent: "90%",
            },

            {
              name: "Django",
              percent: "85%",
            },

            {
              name: "React",
              percent: "80%",
            },

            {
              name: "JavaScript",
              percent: "75%",
            },

            {
              name: "SQL",
              percent: "80%",
            },

            {
              name: "DSA",
              percent: "70%",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-white/10 p-6 rounded-3xl"
            >
              <div className="flex justify-between mb-4">
                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <span className="text-cyan-400">
                  {item.percent}
                </span>
              </div>

              <div className="w-full bg-gray-700 h-3 rounded-full">
                <div
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full"
                  style={{ width: item.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 lg:px-20 py-20">
        <div className="bg-[#111827] border border-cyan-400/20 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT */}
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Let's Connect 🚀
              </h2>

              <p className="text-gray-400 text-lg mb-8">
                I'm always open to discussing new
                opportunities and projects.
              </p>

              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                Contact Me
              </button>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-400">
                  Email
                </h3>

                <p className="text-xl">
                  krishgour789@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-gray-400">
                  Phone
                </h3>

                <p className="text-xl">
                  +91 6261848268
                </p>
              </div>

              <div>
                <h3 className="text-gray-400">
                  Location
                </h3>

                <p className="text-xl">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-white/10">
        © 2026 Krish Gour • Built with React &
        Tailwind CSS
      </footer>
    </div>
  );
}