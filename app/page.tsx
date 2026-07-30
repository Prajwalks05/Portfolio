"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Menu,
  X,
  Code,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Cloud,
  Database,
  Terminal,
  Cpu,
  ExternalLink,
} from "lucide-react";
import Grainient from "../components/Grainient"; // Adjust import path if needed

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "skills", "projects", "education", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "Cloud Computing", icon: Cloud },
    { name: "Docker", icon: Terminal },
    { name: "Java", icon: Code },
    { name: "Python", icon: Code },
    { name: "Flutter Dart", icon: Code },
    { name: "React JS", icon: Cpu },
    { name: "Node.js", icon: Cpu },
    { name: "Express JS", icon: Cpu },
    { name: "SQL/NO-SQL", icon: Database },
    // { name: "System Architecture", icon: Cloud },
    { name: "Microservices", icon: Terminal },
  ];

  const projects = [
    {
      title: "Database Inference Engine with NLP",
      description: [
        "Engineered a natural language-to-SQL inference pipeline deploying n8n, Ollama (Qwen2.5 1.5B), and Python on AWS EC2 instance.",
        " Secured data architecture by containerizing the orchestration layer via Docker and utilizing internal bridge networking to query a host-native MySQL database with zero public exposure.",
      ],
      tech: ["AWS EC2", "Docker", "MySQL", "NLP", "JavaScript"],
      link: "https://github.com/Prajwalks05/Database_Inference_Engine_with_NLP",
    },
    {
      title: "Secure Serverless File Sharing Platform",
      description:
        "Engineered a 100% serverless microservices backend using AWS CDK, Node.js, API Gateway, and Lambda. Optimized data flow by bypassing backend compute, utilizing Amazon S3 Pre-Signed URLs for direct file transfers and DynamoDB for access metadata. Secured API endpoints with Amazon Cognito.",
      tech: ["AWS CDK", "Node.js", "Lambda", "S3", "DynamoDB", "Cognito"],
      link: "https://github.com/Prajwalks05/Temp_Drive",
    },
    {
      title: "Customer Sales Analysis Platform",
      description:
        "Built a full-stack analytics platform using React, Node.js, Express.js, and MongoDB. Containerized both frontend and backend environments using Docker for consistent cross-environment deployment. Deployed the application securely to the cloud using serverless AWS Fargate (ECS) and Amazon ECR.",
      tech: ["React", "Node.js", "MongoDB", "Docker", "AWS Fargate"],
      link: "https://github.com/Prajwalks05/Sales-and-Customer-Analysis-Dashboard",
    },
    {
      title: "E-book Library",
      description:
        "Built a responsive platform using React Vite, HTML, CSS, Bootstrap, and Supabase. Designed a clean UI for browsing and reading e-books while ensuring cross-device performance.",
      tech: ["React Vite", "Supabase", "Bootstrap"],
      link: "https://ebookbyte.vercel.app/",
    },
    {
      title: "Prime Walls - Wallpaper App",
      description:
        "Developed a cross-platform wallpaper app using Flutter (Android & Windows). Added features like search, favourites, HD downloads. Automated wallpaper setting using Windows local scripts.",
      tech: ["Flutter", "Windows Scripts", "Cross-platform"],
      link: "https://primewalls.vercel.app/",
    },
  ];

  const education = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "B.M.S College of Engineering, Bengaluru",
      status: "Current Semester: 7",
      year: "2024 - Present",
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "JNNCE, Shivamogga",
      status: "",
      year: "2021 - 2024",
    },
    {
      degree: "10th",
      institution: "Podar International School, Shivamogga",
      status: "",
      year: "2021",
    },
  ];

  const navItems = [
    { id: "home", label: "Home", icon: Terminal },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-800 font-sans overflow-hidden relative selection:bg-blue-500/20">
      {/* Dynamic React Bits Grainient Background fixed to match reference texture */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#b3b3e3]">
        <Grainient
          color1="#b3b3e3"
          color2="#9e98bb"
          color3="#eab1ef"
          timeSpeed={1}
          colorBalance={0.0}
          warpStrength={2.3}
          warpFrequency={7.8}
          warpSpeed={2.8}
          warpAmplitude={50.0}
          blendAngle={0.0}
          blendSoftness={0.2}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.08}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.5}
          gamma={1.0}
          saturation={1.0}
          centerX={0.13}
          centerY={0.0}
          zoom={0.95}
          className="w-full h-full opacity-100 mix-blend-normal"
        />
      </div>

      {/* Glassmorphic Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/60 backdrop-blur-md border-white/80 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 tracking-tight drop-shadow-sm"
            >
              Prajwal K S
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-white/80 text-blue-700 shadow-sm border border-white/60"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 hover:text-slate-900 p-2 rounded-lg hover:bg-white/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/80 backdrop-blur-lg border-b border-white/50 overflow-hidden shadow-lg"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 w-full text-left px-4 py-3 rounded-xl transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-50/80 text-blue-700 font-medium"
                        : "text-slate-700 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10 pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight drop-shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building High-Availability <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                Cloud Architectures
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-800 font-medium mb-8 max-w-2xl leading-relaxed drop-shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Aspiring Software Engineer with a strong foundation in Computer
              Science and a focus on Cloud Computing. Interested in architecting
              scalable and resilient microservices using AWS and
              containerization tools
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] transition-all duration-300"
              >
                Explore Systems
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto bg-white/70 hover:bg-white/90 border border-white text-slate-800 px-8 py-3.5 rounded-xl font-medium backdrop-blur-md shadow-sm transition-all duration-300"
              >
                Initialize Contact
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-[500px] h-[500px]">
              {/* Light Mode Terminal Mockup */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-3xl border border-white shadow-lg overflow-hidden flex flex-col">
                <div className="h-10 border-b border-white/60 flex items-center px-4 bg-white/50 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="ml-4 text-xs font-mono text-slate-500 flex-1 text-center pr-10">
                    architecture.yaml
                  </div>
                </div>
                <div className="p-6 font-mono text-sm flex-1 text-slate-800">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.2, delayChildren: 1 }}
                    className="space-y-2 font-medium"
                  >
                    <p>
                      <span className="text-blue-700 font-bold">services:</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-indigo-700 font-bold">
                        api_gateway:
                      </span>
                    </p>
                    <p className="pl-8 text-slate-700">type: aws_api_gateway</p>
                    <p className="pl-8 text-slate-700">auth: cognito</p>
                    <br />
                    <p className="pl-4">
                      <span className="text-indigo-700 font-bold">
                        compute:
                      </span>
                    </p>
                    <p className="pl-8 text-slate-700">type: fargate_cluster</p>
                    <p className="pl-8 text-slate-700">
                      containers: [frontend, backend]
                    </p>
                    <br />
                    <p className="pl-4">
                      <span className="text-indigo-700 font-bold">
                        database:
                      </span>
                    </p>
                    <p className="pl-8 text-slate-700">type: dynamodb_table</p>
                    <p className="pl-8 text-slate-700">
                      billing_mode: PAY_PER_REQUEST
                    </p>
                    <br />
                    <motion.div
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-2 h-4 bg-blue-600 inline-block mt-2"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-700 drop-shadow-md"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 tracking-tight drop-shadow-sm">
              Core Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="relative flex items-center space-x-3 bg-white/70 hover:bg-white/90 border border-white shadow-sm hover:shadow-md backdrop-blur-md px-6 py-4 rounded-2xl transition-all duration-300">
                    <skill.icon className="text-blue-600" size={20} />
                    <span className="font-semibold text-slate-800">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 tracking-tight drop-shadow-sm">
              Engineered Systems
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-3xl bg-white/70 border border-white shadow-sm backdrop-blur-md hover:bg-white/90 hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors inline-flex items-center gap-2 group/link"
                      >
                        {project.title}
                        <ExternalLink className="w-5 h-5 text-blue-500 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover/link:translate-x-0" />
                      </a>
                    </h3>
                    <p className="text-slate-800 font-medium mb-8 leading-relaxed relative z-10">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-bold text-blue-800 bg-white/60 border border-blue-200 rounded-lg shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a
                href="https://github.com/Prajwalks05"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white/70 border border-white hover:border-blue-300 text-slate-800 hover:text-blue-700 hover:bg-white/90 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 backdrop-blur-md shadow-sm"
              >
                <Github className="w-5 h-5" />
                <span>View All Repositories</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 tracking-tight drop-shadow-sm">
              Academic Profile
            </h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-white">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-50 text-blue-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 backdrop-blur-md">
                    <GraduationCap size={18} />
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/70 border border-white shadow-sm backdrop-blur-md hover:bg-white/90 hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="font-bold text-slate-900 text-lg">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-bold text-blue-800 bg-white/60 px-2.5 py-1 rounded-md mt-2 md:mt-0 whitespace-nowrap border border-blue-100 shadow-sm">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-slate-800 font-semibold text-sm mb-1">
                      {edu.institution}
                    </p>
                    {edu.status && (
                      <p className="text-slate-700 font-medium text-sm">
                        {edu.status}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="p-10 md:p-16 rounded-3xl bg-white/60 border border-white shadow-lg backdrop-blur-xl relative overflow-hidden text-center">
              <h4 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 tracking-tight drop-shadow-sm">
                Catch up on
              </h4>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto relative z-10">
                <motion.a
                  href="mailto:prajwalks.cs24@bmsce.ac.in"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/70 border border-white shadow-sm hover:shadow-md hover:bg-white/90 transition-all backdrop-blur-md group"
                >
                  <Mail
                    className="text-blue-600 mb-4 group-hover:scale-110 transition-transform"
                    size={32}
                  />
                  <h3 className="text-slate-900 font-bold mb-1">Email</h3>
                  <p className="text-slate-700 font-medium text-sm">
                    prajwalks.cs24...
                  </p>
                </motion.a>

                <motion.a
                  href="tel:9110271665"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/70 border border-white shadow-sm hover:shadow-md hover:bg-white/90 transition-all backdrop-blur-md group"
                >
                  <Phone
                    className="text-blue-600 mb-4 group-hover:scale-110 transition-transform"
                    size={32}
                  />
                  <h3 className="text-slate-900 font-bold mb-1">Phone</h3>
                  <p className="text-slate-700 font-medium text-sm">
                    9110271665
                  </p>
                </motion.a>

                <motion.a
                  href="https://github.com/Prajwalks05"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/70 border border-white shadow-sm hover:shadow-md hover:bg-white/90 transition-all backdrop-blur-md group"
                >
                  <Github className="text-blue-600 mb-4 group-hover:scale-110 transition-transform w-8 h-8" />
                  <h3 className="text-slate-900 font-bold mb-1">GitHub</h3>
                  <p className="text-slate-700 font-medium text-sm">
                    @Prajwalks05
                  </p>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 text-center relative z-10 border-t border-white/60 bg-white/40 backdrop-blur-md mt-12">
        <p className="text-slate-800 font-semibold text-sm">
          © {new Date().getFullYear()} Prajwal K S.
        </p>
      </footer>
    </div>
  );
}
