import UniversityLogo from './components/UniversityLogo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Thắm</h1>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#education" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-pulse">
              Thắm
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Nguyễn Đức Thắm
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-4 font-light">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
            📍 Hanoi, Vietnam
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Computer engineering student at HUST with a passion for creating elegant, user-centered web applications. Specializing in modern JavaScript frameworks and cloud technologies.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I'm a Computer Engineering student at Hanoi University of Science and Technology (HUST) with a deep passion for full-stack web development. I specialize in building scalable, responsive applications using React, Next.js, and Node.js.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                My journey in software development began with a curiosity about how things work on the web. Since then, I've worked on various projects ranging from e-commerce platforms to AI-powered applications, always striving to write clean, maintainable code.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, reading tech blogs, or experimenting with new frameworks and tools. I believe in continuous learning and sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-slate-600 dark:text-slate-300">Years Coding</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl font-bold text-indigo-600 mb-2">25+</div>
                <div className="text-slate-600 dark:text-slate-300">Projects Built</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl font-bold text-purple-600 mb-2">3.74</div>
                <div className="text-slate-600 dark:text-slate-300">CPA at HUST</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl font-bold text-pink-600 mb-2">∞</div>
                <div className="text-slate-600 dark:text-slate-300">Cups of Coffee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Full Stack Developer Intern",
                company: "TechViet Solutions",
                period: "June 2024 - Present",
                location: "Hanoi, Vietnam",
                description: "Developing and maintaining web applications using React and Node.js. Collaborated with senior developers on implementing new features and optimizing application performance.",
                achievements: [
                  "Built RESTful APIs serving 10,000+ daily requests",
                  "Improved page load time by 40% through code optimization",
                  "Implemented responsive UI components used across 5+ projects"
                ],
                tech: ["React", "Node.js", "PostgreSQL", "Docker"]
              },
              {
                title: "Frontend Developer",
                company: "HUST Innovation Lab",
                period: "Jan 2024 - May 2024",
                location: "Hanoi, Vietnam",
                description: "Part of a student team building educational web applications for university courses. Focused on creating intuitive user interfaces and interactive learning experiences.",
                achievements: [
                  "Developed 3 interactive course modules used by 500+ students",
                  "Implemented real-time collaboration features using WebSocket",
                  "Mentored 2 junior developers on React best practices"
                ],
                tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"]
              },
              {
                title: "Web Development Teaching Assistant",
                company: "Hanoi University of Science and Technology",
                period: "Sep 2023 - Dec 2023",
                location: "Hanoi, Vietnam",
                description: "Assisted professor in teaching Web Development course. Conducted lab sessions, graded assignments, and provided one-on-one help to students.",
                achievements: [
                  "Supported 60+ students in learning HTML, CSS, and JavaScript",
                  "Created supplementary learning materials and code examples",
                  "Achieved 95% student satisfaction rating"
                ],
                tech: ["HTML/CSS", "JavaScript", "Git", "VS Code"]
              }
            ].map((job, index) => (
              <div key={index} className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">
                    <p className="font-medium">{job.period}</p>
                    <p className="text-sm">{job.location}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {job.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "EduConnect - Learning Platform",
                description: "A comprehensive online learning platform connecting students and instructors. Features include video lessons, real-time chat, progress tracking, and interactive quizzes.",
                tech: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
                gradient: "from-blue-500 to-cyan-500",
                github: "https://github.com/Ductham95/educonnect",
                demo: "https://educonnect-demo.vercel.app"
              },
              {
                title: "TaskMaster Pro",
                description: "Advanced task management application with Kanban boards, team collaboration, deadline tracking, and productivity analytics. Built as my final year project.",
                tech: ["React", "TypeScript", "Firebase", "Material-UI"],
                gradient: "from-indigo-500 to-purple-500",
                github: "https://github.com/Ductham95/taskmaster-pro",
                demo: "https://taskmaster-pro.netlify.app"
              },
              {
                title: "WeatherVN",
                description: "Real-time weather application for Vietnam with detailed forecasts, weather alerts, and interactive maps. Includes air quality index and UV index data.",
                tech: ["Vue.js", "Express", "OpenWeather API", "Leaflet"],
                gradient: "from-purple-500 to-pink-500",
                github: "https://github.com/Ductham95/weather-vn",
                demo: "https://weathervn.netlify.app"
              },
              {
                title: "Portfolio CMS",
                description: "Content management system specifically designed for developers to showcase their portfolios. Features markdown support, project galleries, and blog functionality.",
                tech: ["Next.js", "Sanity.io", "Tailwind CSS"],
                gradient: "from-pink-500 to-rose-500",
                github: "https://github.com/Ductham95/portfolio-cms",
                demo: ""
              },
              {
                title: "CodeSnippet Manager",
                description: "Personal code snippet manager with syntax highlighting, tagging system, and search functionality. Helps developers organize and quickly access frequently used code.",
                tech: ["React", "MongoDB", "Express", "Prism.js"],
                gradient: "from-emerald-500 to-teal-500",
                github: "https://github.com/Ductham95/code-snippet-manager",
                demo: ""
              },
              {
                title: "HUST Student Portal",
                description: "Unofficial student portal for HUST students featuring course schedules, grade tracking, event calendar, and campus news aggregation.",
                tech: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
                gradient: "from-cyan-500 to-blue-500",
                github: "https://github.com/Ductham95/hust-portal",
                demo: ""
              }
            ].map((project, index) => (
              <div key={index} className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg`}>
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "React", level: 95, color: "blue" },
              { name: "TypeScript", level: 90, color: "indigo" },
              { name: "Node.js", level: 85, color: "green" },
              { name: "Next.js", level: 92, color: "purple" },
              { name: "Python", level: 80, color: "yellow" },
              { name: "PostgreSQL", level: 85, color: "cyan" },
              { name: "AWS", level: 75, color: "orange" },
              { name: "Docker", level: 80, color: "pink" }
            ].map((skill, index) => (
              <div key={index} className="group p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-slate-800 dark:text-white">{skill.name}</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
              <div className="flex items-start gap-4 mb-6">
                <UniversityLogo />
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                    Bachelor of Compute Engineering
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    Hanoi University of Science and Technology
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 mb-4">
                    2022 - 2026 (Expected) | CPA: 3.74/4.0
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-200">Relevant Coursework:</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                  <li>Data Structures & Algorithms</li>
                  <li>Web Development & Mobile Applications</li>
                  <li>Database Management Systems</li>
                  <li>Software Engineering</li>
                  <li>Cloud Computing & DevOps</li>
                  <li>Machine Learning Fundamentals</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                    AWS
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                      AWS Certified Cloud Practitioner
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Amazon Web Services • 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                    ⚛️
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                      React Developer Certification
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Meta • 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                    TS
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                      Advanced TypeScript Programming
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Udemy • 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    🐳
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                      Docker & Kubernetes Essentials
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Linux Foundation • 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white">
              Achievements & Awards
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🏆</div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  1st Place - HUST Hackathon
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Built AI-powered study assistant in 24 hours
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">November 2024</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🌟</div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  Dean's List
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Top 10% of class for 4 consecutive semesters
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">2022-2024</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">💻</div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  Open Source Contributor
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  50+ contributions to popular GitHub repositories
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">2023-Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
            Have a project in mind? Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="mailto:ductham2004@gmail.com" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              📧 Send Email
            </a>
            <a href="/resume.pdf" download className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              📄 Download Resume
            </a>
            <a href="https://github.com/Ductham95" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300">
              💻 GitHub Profile
            </a>
          </div>
          <div className="flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/%C4%91%E1%BB%A9c-th%E1%BA%AFm-nguy%E1%BB%85n-595774397/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 text-slate-600 dark:text-slate-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-400 dark:hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-110 text-slate-600 dark:text-slate-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="https://github.com/Ductham95" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-600 hover:text-white transition-all duration-300 hover:scale-110 text-slate-600 dark:text-slate-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Nguyễn Đức Thắm. Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
