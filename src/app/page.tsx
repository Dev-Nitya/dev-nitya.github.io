export default function Home() {
  const projects = [
    {
      title: "📄 Smart Document QA Agent",
      desc: "An AI chatbot that answers questions from PDFs using LangChain, OpenAI embeddings, and FAISS.",
      tech: ["LangChain", "OpenAI", "FAISS", "FastAPI", "React"],
      github: "https://github.com/Dev-Nitya/multiagent-advisor-app",
      demo: "https://your-demo-link.com",
    },
    {
      title: "🤖 Multi-Agent Research Assistant",
      desc: "Built with CrewAI, this assistant coordinates multiple LLM agents to research and summarize topics.",
      tech: ["CrewAI", "LangChain", "OpenAI"],
      github: "https://github.com/Dev-Nitya/document-qa-rag",
      demo: "",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <header className="max-w-4xl mx-auto text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Nitya Malhotra</h1>
        <p className="text-lg text-gray-600">
          Backend Engineer (8 yrs) → Transitioning into Generative AI. Building
          RAG, AI Agents, and LLM-powered apps.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/your-username"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a href="/resume.pdf" className="text-blue-600 hover:underline">
            Resume
          </a>
        </div>
      </header>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-700 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-sm px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {p.github && (
                  <a href={p.github} className="text-blue-600 hover:underline">
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} className="text-blue-600 hover:underline">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-12">
        © {new Date().getFullYear()} Nitya Malhotra
      </footer>
    </main>
  );
}
