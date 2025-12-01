"use client"

import { motion } from 'framer-motion'
import { 
  Calendar, MapPin, Award, Heart, Code2, Lightbulb, Settings, Target, BookOpen, Puzzle,
  ClipboardList, GitBranch, BarChart2, Palette, Laptop, TrendingUp, Globe, Layers, Scroll
} from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const experiences = [
    {
      title: "Business Analyst / Backend Developer",
      company: "Health Management System - HMS",
      period: "May 2025 - Aug 2025",
      description: "Led requirements gathering sessions with stakeholders for a healthcare platform designed for personal health monitoring. Created comprehensive SRS documentation, designed 15+ core system workflows, and developed backend APIs using ASP.NET to ensure technical solutions aligned with business needs.",
      technologies: ["ASP.NET", "API Development", "SRS Documentation", "Healthcare Systems"]
    },
    {
      title: "Business Analyst Intern",
      company: "UTA Solution",
      period: "May 2024 - Oct 2024",
      description: "Analyzed client requirements and existing business processes to identify system improvements. Authored comprehensive BRDs, User Stories, and Use Cases. Created wireframes and mockups in Figma, designed UML diagrams, and acted as liaison between stakeholders and technical teams.",
      technologies: ["BRD", "User Stories", "Figma", "UML Diagrams", "Requirements Analysis"]
    },
    {
      title: "Business Analyst",
      company: "Find Jobs 3Do - FJ3Do",
      period: "May 2024 - Jun 2024",
      description: "Conducted stakeholder interviews with recruiters for an HR Tech platform. Designed end-to-end business logic and data models for job posting, candidate management, and application tracking. Created user flows and collaborated with development team on technical specifications.",
      technologies: ["HR Tech", "Data Modeling", "User Flows", "Stakeholder Management"]
    }
  ]

  const achievements = [
    { icon: ClipboardList, text: "Expert in Requirement Management: Gathering, Elicitation, and Documentation (BRD, SRS, User Stories)" },
    { icon: GitBranch, text: "Proficient in Process Analysis & Design: BPMN, Flowcharts, Swimlane Diagrams, Gap Analysis" },
    { icon: Target, text: "Skilled in Solution Design: Use Case Writing, Acceptance Criteria, Data Modeling (ERD)" },
    { icon: Palette, text: "Advanced Prototyping & Visualization: Wireframing, Mockups (Figma, Balsamiq)" },
    { icon: Laptop, text: "Technical Skills: ASP.NET API Development, SQL Server, MySQL, Postman, Git" },
    { icon: TrendingUp, text: "Strong communication skills bridging business stakeholders and technical teams" },
    { icon: Globe, text: "Upper-Intermediate English (Academic Preparatory Level 6 - Summit 2)" },
    { icon: Layers, text: "Strong foundation in software engineering principles and project management" },
    { icon: Scroll, text: "Certified in Project Management Principles, User Experience Research and Design" }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Me
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
              Business Analyst (IT) bridging technology and business needs in Can Tho City
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Avatar Section */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-start gap-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20">
                    <Image
                      src="/avatar.jpg"
                      alt="Bui Chi Cuong - Business Analyst"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 5px' }}
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Code2 size={24} className="text-white" />
                  </div>
                </motion.div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                      Bui Chi Cuong
                    </h1>
                    <p className="text-xl text-primary font-semibold mb-4">
                      Business Analyst & Backend Developer
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        Requirement Management
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        ASP.NET Development
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        Process Analysis
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        Solution Design
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Introduction */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h2 className="text-3xl font-bold mb-6 text-gradient">My Journey</h2>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Hello! I'm Bui Chi Cuong, a proactive and detail-oriented Business Analyst with a strong 
                  Software Engineering background. I'm passionate about bridging business strategy and technology 
                  in dynamic international startup environments. Currently completing my Bachelor of Information 
                  Technology (Software Engineering .NET) at FPT University Campus Can Tho with a GPA of 7.9.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  I specialize in analyzing complex business processes, translating business needs into technical 
                  solutions, and creating comprehensive documentation including BRDs, SRS, User Stories, and Use Cases. 
                  My technical background in ASP.NET API development and backend systems allows me to effectively 
                  communicate with both business stakeholders and development teams.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  With experience across healthcare, HR tech, and recruitment platforms, I bring a systematic 
                  and solution-oriented mindset to optimize processes and drive growth. I'm eager to apply my 
                  skills in requirement management, process analysis, and solution design to help organizations 
                  achieve their strategic objectives through effective technology implementation.
                </p>
              </motion.div>

              {/* Experience */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gradient">Experience</h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-effect p-6 rounded-lg"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 text-justify">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin size={20} className="mr-2 text-primary" />
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>Phong Dien, Can Tho City</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span>1+ years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus</span>
                    <span>Business Analysis</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education</span>
                    <span>Bachelor IT - GPA 7.9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="text-green-500">Open to work</span>
                  </div>
                </div>
              </motion.div>

              {/* Key Achievements */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award size={20} className="mr-2 text-primary" />
                  Key Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 text-sm text-muted-foreground"
                    >
                      <item.icon size={18} className="mt-1 text-primary shrink-0" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart size={20} className="mr-2 text-primary" />
                  Interests
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Settings, label: "Process Optimization" },
                    { icon: Target, label: "Business Innovation" },
                    { icon: BookOpen, label: "Continuous Learning" },
                    { icon: Puzzle, label: "Problem Solving" },
                  ].map((interest, index) => (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <interest.icon size={24} className="mx-auto text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">{interest.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
