"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Server, Facebook } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export default function Home() {
  const { dict } = useLanguage()
  
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
    { name: 'Requirement Management', icon: Database, level: 92 },
    { name: 'ASP.NET API Development', icon: Server, level: 88 },
    { name: 'Process Analysis & Design', icon: Code, level: 90 },
    { name: 'Solution Design', icon: Code, level: 87 },
    { name: 'Figma & Prototyping', icon: Code, level: 85 },
    { name: 'SQL & Database', icon: Database, level: 80 },
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
                <span className="block text-white">{dict.hero.greeting}</span>
                <span className="text-metallic">
                  Bui Chi Cuong
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl mb-8 text-zinc-400 max-w-3xl mx-auto font-light">
                {dict.hero.role}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-lg md:text-xl mb-12 text-zinc-500 max-w-4xl mx-auto leading-relaxed text-justify font-light">
                {dict.hero.description}
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
                  className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-medium hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>{dict.hero.viewProjects}</span>
                  <Code size={20} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent text-white border border-white/10 backdrop-blur-md rounded-full font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>{dict.hero.getInTouch}</span>
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
                  className="p-3 bg-white/5 backdrop-blur-md rounded-full hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 border border-white/10 hover:border-white/30"
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
              {dict.skills.title}
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light">
              {dict.skills.subtitle}
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
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-white/5 rounded-full mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <skill.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{skill.name}</h3>
                  <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-colors">
                    {skill.level}% {dict.skills.proficiency}
                  </div>
                </div>
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
                {dict.about.title}
              </h2>
              <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                <p>
                  {dict.about.p1}
                </p>
                <p>
                  {dict.about.p2}
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-medium hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
                >
                  <span>{dict.about.learnMore}</span>
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
                    <span className="text-zinc-400">{dict.about.experience}</span>
                    <span className="text-white font-mono text-xl">{dict.about.years}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-zinc-400">{dict.about.projectsCompleted}</span>
                    <span className="text-white font-mono text-xl">{dict.about.count}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-zinc-400">{dict.about.businessTools}</span>
                    <span className="text-white font-mono text-xl">{dict.about.count}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">{dict.about.education}</span>
                    <span className="text-white font-mono text-xl">{dict.about.degree}</span>
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
