import React from 'react';
import { Code2, Database, Brain, Cloud } from 'lucide-react';

const skills = {
  "Machine Learning": {
    icon: Brain,
    items: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "NLTK"]
  },
  "Programming": {
    icon: Code2,
    items: ["Python", "JavaScript", "C++", "R", "Julia"]
  },
  "Data Engineering": {
    icon: Database,
    items: ["SQL", "MongoDB", "Apache Spark", "Hadoop", "Redis"]
  },
  "Cloud & DevOps": {
    icon: Cloud,
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "MLOps"]
  }
};

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
            <div key={category} className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}