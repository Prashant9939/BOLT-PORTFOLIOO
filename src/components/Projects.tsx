import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Image Recognition",
    description: "Deep learning model for real-time object detection using TensorFlow and OpenCV.",
    tech: ["Python", "TensorFlow", "OpenCV", "Docker"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Natural Language Processing Pipeline",
    description: "End-to-end NLP pipeline for sentiment analysis and text classification.",
    tech: ["PyTorch", "BERT", "FastAPI", "AWS"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Real-time analytics dashboard with ML-powered predictions.",
    tech: ["scikit-learn", "React", "D3.js", "Flask"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-white">
                    <GitBranch className="w-4 h-4" />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-gray-400 hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}