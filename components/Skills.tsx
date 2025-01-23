import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faHtml5, faCss3Alt, faJsSquare, faDocker, faLinux, faGolang } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faDharmachakra } from "@fortawesome/free-solid-svg-icons"; // Solid系のアイコン

const skills = [
  // 使えるスキル
  {
    category: "実務経験",
    items: [
      { name: "Python", icon: faPython },
      { name: "SQL", icon: faDatabase },
      { name: "Docker/Docker-Compose", icon: faDocker },
      { name: "Unix (Linux)", icon: faLinux },
    ],
  },
  // 初学経験
  {
    category: "初学経験",
    items: [
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3Alt },
      { name: "JavaScript", icon: faJsSquare },
      { name: "Go", icon: faGolang },
      { name: "Kubernetes", icon: faDharmachakra }, // Kubernetesの代替アイコン
    ],
  },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2>Skills</h2>
    {skills.map((skillCategory) => (
      <div key={skillCategory.category}>
        <h3>{skillCategory.category}</h3>
        <div className="skills-grid">
          {skillCategory.items.map((skill) => (
            <div key={skill.name} className="skill-card">
              {skill.icon ? (
                <FontAwesomeIcon icon={skill.icon} size="2x" />
              ) : (
                <img
                  src={`/icons/${skill.name.toLowerCase()}.png`}
                  alt={skill.name}
                  className="custom-icon"
                />
              )}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Skills;
