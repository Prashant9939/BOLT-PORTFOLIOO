import React from 'react';
import { Github, Linkedin, Mail, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-semibold text-blue-400">AI/ML Engineer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building the Future with
              <span className="text-blue-400"> AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Specialized in Machine Learning, Deep Learning, and Computer Vision.
              Turning complex data into intelligent solutions.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@example.com" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
              alt="AI Visualization"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}