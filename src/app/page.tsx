interface Project {
  title: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
}

export default function Home() {
  const projects = [
    {
      title: "Smart Document QA Agent",
      shortDesc:
        "AI chatbot that answers questions from PDFs using LangChain and OpenAI embeddings.",
      fullDesc:
        "A sophisticated RAG (Retrieval-Augmented Generation) system that enables users to upload PDF documents and ask natural language questions about their content. The system uses OpenAI embeddings to create vector representations of document chunks, stores them in FAISS for efficient similarity search, and employs LangChain to orchestrate the question-answering pipeline. Features include document preprocessing, intelligent chunking strategies, and context-aware response generation.",
      tech: ["LangChain", "OpenAI", "FAISS", "FastAPI", "React", "Python"],
      github: "https://github.com/Dev-Nitya/multiagent-advisor-app",
      demo: "",
      features: [
        "PDF document processing and chunking",
        "Vector embeddings with FAISS indexing",
        "Context-aware question answering",
        "RESTful API with FastAPI",
        "Modern React frontend",
      ],
    },
    {
      title: "Multi-Agent Research Assistant",
      shortDesc:
        "CrewAI-powered system with coordinated LLM agents for research and summarization.",
      fullDesc:
        "An advanced multi-agent system built with CrewAI that orchestrates multiple specialized LLM agents to conduct comprehensive research on any given topic. Each agent has a specific role (researcher, analyst, writer) and they collaborate to gather information, analyze findings, and produce well-structured research summaries. The system demonstrates the power of agent coordination and task delegation in AI workflows.",
      tech: ["CrewAI", "LangChain", "OpenAI", "Python", "Streamlit"],
      github: "https://github.com/Dev-Nitya/document-qa-rag",
      demo: "",
      features: [
        "Multi-agent coordination with CrewAI",
        "Specialized agent roles and responsibilities",
        "Automated research workflow",
        "Structured output generation",
        "Interactive Streamlit interface",
      ],
    },
  ];

  return (
    <main
      className="min-h-screen bg-black text-white"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      {/* Hero Section */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              Nitya Malhotra
            </h1>
            <div className="h-1 w-24 bg-white mx-auto"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Backend Engineer (8 years) → Transitioning into Generative AI
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Building RAG systems, AI agents, and LLM-powered applications that
              bridge traditional software engineering with cutting-edge AI
            </p>

            {/* Links */}
            <div className="flex justify-center gap-8 pt-8">
              <a
                href="https://github.com/Dev-Nitya"
                className="group flex items-center gap-2 text-white transition-colors border border-white px-6 py-3 hover:bg-white hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/nitya-malhotra"
                className="group flex items-center gap-2 text-white transition-colors border border-white px-6 py-3 hover:bg-white hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                className="group flex items-center gap-2 text-white transition-colors border border-white px-6 py-3 hover:bg-white hover:text-black"
              >
                <span>Resume</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-white mx-auto"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Nitya Malhotra. Crafted with Next.js &
            Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group">
      <div className="border border-gray-800 hover:border-gray-600 transition-all duration-300 overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Project Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-500 font-mono">
                  0{index + 1}
                </span>
                <div className="h-px bg-gray-800 flex-1"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {project.shortDesc}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:ml-8">
              {project.github && (
                <a
                  href={project.github}
                  className="group/link flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Code</span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="group/link flex items-center justify-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 transition-all text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mb-8">
            <p className="text-gray-400 leading-relaxed">{project.fullDesc}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-300">
              Key Features
            </h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-gray-400">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 border border-gray-700 text-gray-300 text-sm font-mono hover:border-gray-500 hover:bg-gray-900 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
