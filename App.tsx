import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

function App() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const projects = [
    {
      title: "Sentiment Analysis Dashboard",
      description: "A machine learning application that analyzes sentiment from text using natural language processing. Built with Python and scikit-learn, featuring a simple web interface.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "scikit-learn", "NLP", "HTML", "CSS"],
      demoUrl: "https://github.com",  // Replace with actual demo URL
      githubUrl: "https://github.com"  // Replace with actual GitHub URL
    },
    {
      title: "Image Classification App",
      description: "A deep learning project that classifies images using a pre-trained neural network. Features a user-friendly interface for uploading and analyzing images.",
      image: "https://images.unsplash.com/photo-1485796826113-174aa68fd81b?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "TensorFlow", "Deep Learning", "HTML", "JavaScript"],
      demoUrl: "https://github.com",  // Replace with actual demo URL
      githubUrl: "https://github.com"  // Replace with actual GitHub URL
    }
  ];

  const socialLinks = {
    github: "https://github.com",  // Replace with your GitHub profile
    linkedin: "https://linkedin.com",  // Replace with your LinkedIn profile
    email: "vatsal@example.com"  // Replace with your email
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">Portfolio</span>
            <div className="space-x-6">
              <a href="#about" className="hover:text-purple-200 transition-colors">About</a>
              <a href="#projects" className="hover:text-purple-200 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-200 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Vatsal Pareshkumar</h1>
          <p className="text-xl mb-8">AI Enthusiast | Machine Learning Developer</p>
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-purple-50 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            <p className="mb-4">
              I'm a passionate AI enthusiast with a deep interest in machine learning, deep learning, and artificial intelligence. 
              My focus is on developing intelligent systems that can make a positive impact on the world.
            </p>
            <p>
              When I'm not working on AI projects, you can find me reading research papers, participating in AI competitions,
              or exploring the latest developments in the field of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 scroll-mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <Code2 className="w-4 h-4 mr-1" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 scroll-mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${socialLinks.email}`}
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-center text-gray-600">
              Feel free to reach out if you'd like to collaborate on AI projects, discuss machine learning, or just connect.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Vatsal Pareshkumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
