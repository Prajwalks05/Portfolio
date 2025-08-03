"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Code,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const codingAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 120,
  w: 800,
  h: 600,
  nm: "Coding Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Code Lines",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [400, 300, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: {
                a: 1,
                k: [
                  { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0, 8] },
                  { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 30, s: [200, 8] },
                  { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [200, 8] },
                  { t: 90, s: [0, 8] },
                ],
              },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 4 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.6, 0.4, 1, 1] },
              o: { a: 0, k: 100 },
            },
            {
              ty: "tr",
              p: { a: 0, k: [-100, -50] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
    },
  ],
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "skills", "projects", "education", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    "C",
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Flutter",
    "Dart",
    "HTML",
    "CSS",
    "Bootstrap",
    "AWS",
    "GitHub",
    "MS Office",
    "Blender (3D)",
  ]

  const projects = [
    {
      title: "Weather App",
      description:
        "Real-time weather information app with temperature, humidity, wind speed, and sunrise/sunset times. Built with OpenWeatherMap API for accurate data.",
      link: "https://prajwalshetty05.github.io/weather-app.github.io/weatherapp.html",
      tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    },
    {
      title: "E-book Library",
      description:
        "Free e-book library platform built with React. Features responsive design with Bootstrap and provides easy access to browse and read e-books.",
      link: "https://ebookbyte.vercel.app/",
      tech: ["React", "HTML", "CSS", "Bootstrap",""],
    },
    {
      title: "Inventory Management System",
      description:
        "Unix-based web application for supermarket inventory management. Tracks products, quantities, and essential inventory details with Unix commands.",
      link: "https://prajwalks05.github.io/Unix_inventory_management_system/",
      tech: ["Unix", "Web Development", "System Management"],
    },
    {
      title: "PrimeWalls",
      description:
        "Cross-platform wallpaper application for Android and Windows. Features daily refresh, favorites, and Windows wallpaper automation via local scripts.",
      link: "https://primewalls.vercel.app/",
      tech: ["Flutter", "Dart", "Cross-platform"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering",
      institution: "B.M.S College of Engineering, Bengaluru",
      status: "Currently Pursuing – 5th Semester",
      year: "Present",
    },
    {
      degree: "Diploma",
      field: "Computer Science and Engineering",
      institution: "JNNCE, Shimoga",
      status: "Completed",
      year: "2024",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      field: "",
      institution: "Podar International School, Shimoga",
      status: "Completed",
      year: "2021",
    },
  ]

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-white">
              
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              className="md:hidden bg-slate-900/95 backdrop-blur-md"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-2 w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />

        {/* Floating Animation Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-12 h-12 bg-purple-400/10 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-40 w-24 h-24 bg-blue-400/10 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Prajwal K S
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Computer Science Engineering Student & Full Stack Developer
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Animated illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main coding animation container */}
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Animated code editor mockup */}
                <div className="absolute inset-0 bg-slate-800/80 rounded-2xl border border-slate-700 backdrop-blur-sm overflow-hidden">
                  {/* Editor header */}
                  <div className="h-8 bg-slate-700 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Code content with typing animation */}
                  <div className="p-4 font-mono text-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span>{" "}
                      <span className="text-white">=</span> <span className="text-green-400">{"{"}</span>
                    </motion.div>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                      className="overflow-hidden whitespace-nowrap ml-4"
                    >
                      <span className="text-blue-300">name</span>
                      <span className="text-white">:</span> <span className="text-yellow-300">'Prajwal K S'</span>
                      <span className="text-white">,</span>
                    </motion.div>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                      className="overflow-hidden whitespace-nowrap ml-4"
                    >
                    </motion.div>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                      className="overflow-hidden whitespace-nowrap ml-4"
                    >
                      <span className="text-blue-300">passion</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-yellow-300">'Building Amazing Apps'</span>
                    </motion.div>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      <span className="text-green-400">{"}"}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Floating elements around the editor */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
                >
                  <Code className="text-white" size={24} />
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    x: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center"
                >
                  <span className="text-white font-bold">JS</span>
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-white/60" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate Computer Science Engineering student currently pursuing my B.E. at B.M.S College of
                  Engineering, Bengaluru. With a strong foundation in programming and web development, I love creating
                  innovative solutions and bringing ideas to life through code.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My journey in technology started with a diploma in Computer Science, and I've been continuously
                  learning and building projects that solve real-world problems. I'm particularly interested in
                  full-stack development, mobile app development, and emerging technologies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="mr-2" size={18} />
                    <span>prajwalshetty592005@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="mr-2" size={18} />
                    <span>9110271665</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-2" size={18} />
                    <span>Bengaluru, Karnataka</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <User size={120} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="w-full py-3 px-4 text-center bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between">
                        {project.title}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 mb-4 text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-purple-500/30 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg bg-transparent"
              >
                <a
                  href="https://github.com/Prajwalks05?tab=stars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={20} />
                  View All Projects on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {edu.degree} {edu.field && `- ${edu.field}`}
                          </h3>
                          <p className="text-purple-400 mb-2">{edu.institution}</p>
                          <p className="text-gray-400">{edu.status}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                            {edu.year}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>
            <div className="text-center mb-12">
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                Feel free to reach out through any of the channels below!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.a
                href="mailto:prajwalshetty592005@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <Mail className="text-purple-400 mb-4" size={48} />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-center">prajwalshetty592005@gmail.com</p>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/prajwal-shetty-a64236296"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <Linkedin className="text-purple-400 mb-4" size={48} />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-300 text-center">Connect with me</p>
              </motion.a>
              <motion.a
                href="https://github.com/Prajwalks05"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <Github className="text-purple-400 mb-4" size={48} />
                <h3 className="text-white font-semibold mb-2">GitHub</h3>
                <p className="text-gray-300 text-center">View my repositories</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Prajwal K S. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
