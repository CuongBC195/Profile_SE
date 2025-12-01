"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Server, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skills = [
    { name: 'Requirement Management', icon: Database },
    { name: 'ASP.NET API Development', icon: Server },
    { name: 'Process Analysis & Design', icon: Code },
    { name: 'Solution Design', icon: Code },
    { name: 'Figma & Prototyping', icon: Code },
    { name: 'SQL & Database', icon: Database },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient Silver Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
                <span className="block text-white">Hello, I'm</span>
                <span className="text-metallic">
                  Bui Chi Cuong
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl mb-8 text-zinc-400 max-w-3xl mx-auto font-light">
                Business Analyst & Backend Developer
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-lg md:text-xl mb-12 text-zinc-500 max-w-4xl mx-auto leading-relaxed text-justify font-light">
                A proactive and detail-oriented Business Analyst with a strong Software Engineering background, 
                passionate about bridging business strategy and technology in dynamic international startup environments. 
                Experienced in analyzing complex business processes, translating business needs into technical solutions, 
                and creating thorough documentation (BRDs, User Stories). Eager to apply a systematic and solution-oriented 
                mindset to optimize processes and drive growth.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/projects"
                  className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors inline-flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <Code size={20} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact"
                  className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Get In Touch</span>
                  <Mail size={20} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex justify-center space-x-6 pt-8"
            >
              {[
                { Icon: Github, href: "https://github.com/CuongBC195", label: "GitHub" },
                { Icon: Facebook, href: "https://www.facebook.com/chicuong.bui.03", label: "Facebook" },
                { Icon: Mail, href: "mailto:cuongbc.work@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5"
                  aria-label={label}
                >
                  <Icon size={24} className="text-zinc-400 hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown size={32} className="text-white/20" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group flex items-center space-x-6"
              >
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <skill.icon size={32} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-medium text-white tracking-wide">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                <p>
                  I'm a Business Analyst (IT) with a solid technical background and 
                  1+ year of experience in bridging business requirements with technical solutions. 
                  I specialize in requirements analysis, business documentation, and stakeholder communication.
                </p>
                <p>
                  Currently pursuing my Bachelor of Information Technology at FPT University Can Tho, 
                  I combine academic knowledge with practical experience in Java, ASP.NET development, 
                  and business analysis tools like Figma, Draw.io, and Postman.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10"
              >
                <Link 
                  href="/about"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowDown size={16} className="rotate-[-90deg]" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-panel p-10 rounded-3xl border border-white/10">
                <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-zinc-400">Experience</span>
                    <span className="text-white font-mono text-xl">1 year+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-zinc-400">Projects Completed</span>
                    <span className="text-white font-mono text-xl">8+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-zinc-400">Business Tools</span>
                    <span className="text-white font-mono text-xl">8+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Education</span>
                    <span className="text-white font-mono text-xl">Bachelor IT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
