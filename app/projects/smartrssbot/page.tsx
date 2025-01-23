import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faDocker, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faDatabase} from "@fortawesome/free-solid-svg-icons"; 

const technologies = [
  { name: "Python", icon: faPython },
  { name: "SQL", icon: faDatabase },
  { name: "ChatGPT API", icon: faRobot },
  { name: "RAG", icon: faDatabase }, // RAGはデータベースアイコンで代用
  { name: "Discord Bot", icon: faDiscord },
  { name: "Docker", icon: faDocker },
];

const SmartRSSBot = () => (
  <section className="project-details-section">
    <header className="project-header">
      <h1>SmartRSSBot</h1>
      <p className="project-summary">
        SmartRSSBotは、Discord上でRSSフィードを定期的に取得し、AIを用いて記事の関連度を評価するDiscordボットです。
      </p>
    </header>

    <div className="project-content">
      <h2>使用技術</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-card">
            <FontAwesomeIcon icon={tech.icon} size="2x" className="tech-icon" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>

      <h2>開発人数</h2>
      <p className="developer-count">1人</p>

      <h2>背景</h2>
      <p>
        個人開発の知識データベースとしてDiscordで運用をしており、日々最新の情報を自分1人で整理しリサーチするのは課題でした。
        そこでチェックしたい人物の記事や分野の記事を自動でAIが取捨選択しレコメンドしてくれることで、自身の知りたい情報を効率的に知ることができるものを作りました。
      </p>

      <h2>工夫した点</h2>
      <p>
        GPT-4による記事内容と個人の趣向との関連度評価機能及び記事内容への質疑応答機能を可能にするために、
        RAG技術とLangChainライブラリを用いて知識をストックし取得可能なAIを実装した点。
      </p>

      <h2>動作画面</h2>
      <div className="screenshot-section">
        <img
          src="/images/smart-rss-bot2.png"
          alt="SmartRSSBot 動作画面"
          className="screenshot"
          style={{ width: "100%" }}
        />
        <img
          src="/images/smart-rss-bot1.png"
          alt="SmartRSSBot 動作画面 2"
          className="screenshot"
          style={{ width: "100%" }}
        />
      </div>

      <a
        href="https://github.com/takeshun256/SmartRSSBot"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub
      </a>
    </div>
  </section>
);

export default SmartRSSBot;
