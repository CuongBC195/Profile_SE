"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Star, GitBranch } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export default function Projects() {
  const { dict } = useLanguage()
  
  const projects = [
    {
      id: 1,
      title: "Health Management System (HMS)",
      description: dict.projectsPage.hms.description,
      image: "/api/placeholder/600/400",
      technologies: ["ASP.NET", "API Development", "System Integration", "Healthcare"],
      category: dict.projectsPage.categories.businessAnalysis,
      status: dict.projectsPage.status.completed,
      date: "2025-05",
      github: "#",
      demo: "https://drive.google.com/drive/folders/1UqghZoeAkJJVve4epWOXtrhpxjD6IyXw?usp=drive_link",
      featured: true,
      stats: {
        stars: 0,
        forks: 0,
        commits: 0
      }
    },
    {
      id: 2,
      title: "Mom and Baby E-commerce Platform (MAB)",
      description: dict.projectsPage.mab.description,
      image: "/api/placeholder/600/400",
      technologies: ["Java Jakarta Servlet", "E-commerce", "UI/UX Design", "Market Research"],
      category: dict.projectsPage.categories.businessAnalysis,
      status: dict.projectsPage.status.completed,
      date: "2024-09",
      github: "#",
      demo: "https://drive.google.com/drive/folders/1NhwHYROQCG1931IIwczhnyMU0rje01Gy?usp=drive_link",
      featured: true,
      stats: {
        stars: 0,
        forks: 0,
        commits: 0
      }
    },
    {
      id: 3,
      title: "Find Jobs 3Do Recruitment Platform (FJ3Do)",
      description: dict.projectsPage.fj3do.description,
      image: "/api/placeholder/600/400",
      technologies: ["Java Jakarta Servlet", "System Design", "User Experience", "Platform Architecture"],
      category: dict.projectsPage.categories.businessAnalysis,
      status: dict.projectsPage.status.completed,
      date: "2024-06",
      github: "#",
      demo: "https://drive.google.com/drive/folders/1f2_IqbdBIkalpLwUGT-NBjBHbSPbFM0W?usp=drive_link",
      featured: false,
      stats: {
        stars: 0,
        forks: 0,
        commits: 0
      }
    }
  ]

  const categories = [
    dict.projectsPage.categories.all,
    dict.projectsPage.categories.businessAnalysis,
    dict.projectsPage.categories.systemDesign,
    dict.projectsPage.categories.requirementsAnalysis
  ]
  const [selectedCategory, setSelectedCategory] = useState(dict.projectsPage.categories.all)

  const filteredProjects = projects.filter(project => 
    selectedCategory === dict.projectsPage.categories.all || project.category === selectedCategory
  )

  const featuredProjects = projects.filter(project => project.featured)

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
              {dict.projectsPage.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
              {dict.projectsPage.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {dict.projectsPage.featured.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {dict.projectsPage.featured.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-lg overflow-hidden group flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-gray-800/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">💻</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-md text-xs rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-zinc-300 border border-white/10 backdrop-blur-md rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star size={16} className="mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <GitBranch size={16} className="mr-1" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      {project.stats.commits} commits
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-auto">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-lg hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>{dict.projectsPage.buttons.liveDemo}</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-transparent text-white border border-white/10 backdrop-blur-md rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                    >
                      <Github size={16} />
                      <span>{dict.projectsPage.buttons.code}</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              {dict.projectsPage.allProjects.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {dict.projectsPage.allProjects.subtitle}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-white/10 text-white border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                    : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-lg overflow-hidden group flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-gray-800/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">⚡</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs rounded-full backdrop-blur-md border ${
                      project.status === dict.projectsPage.status.completed 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-white/5 text-zinc-300 border border-white/10 backdrop-blur-md text-xs rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 text-zinc-400 border border-white/10 backdrop-blur-md rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 text-zinc-400 border border-white/10 backdrop-blur-md rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-auto">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded text-sm hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                    >
                      <ExternalLink size={14} />
                      <span>{dict.projectsPage.buttons.demo}</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-transparent text-white border border-white/10 backdrop-blur-md rounded text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                    >
                      <Github size={14} />
                      <span>{dict.projectsPage.buttons.code}</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
