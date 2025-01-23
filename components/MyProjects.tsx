const projects = [
  {
    title: "Smart RSS Bot",
    description: "AIを用いてRSS記事の要約と関連度を評価するDiscordボット",
    github: "/projects/smartrssbot",
  },
  {
    title: "PauseNormEffect",
    description: "【学部卒業研究】朗読音声合成におけるポーズ長分布の多様性を吸収するための標準化の効果を検証",
    github: "/projects/pause-norm-effect",
  },
];

const MyProjects = () => (
  <section id="projects" className="projects-section">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default MyProjects;

