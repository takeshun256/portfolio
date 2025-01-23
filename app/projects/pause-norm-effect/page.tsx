import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";

const technologies = [
  { name: "Python", icon: faPython },
  { name: "Pytorch", icon: faPython },
  { name: "Hydra", icon: faPython },
  { name: "Optuna", icon: faPython },
  { name: "Librosa", icon: faPython },
];

const PauseNormEffect = () => (
  <section className="project-details-section">
    <header className="project-header">
      <h1>PauseNormEffect</h1>
      <p className="project-summary">
        朗読音声合成におけるポーズ長分布の多様性を吸収するための標準化の効果を検証するプロジェクトです。
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

      <h2>概要</h2>
      <p>
        このプロジェクトは以下の論文の実験コードです：
        <br />
        竹下隼司・松崎拓也, 2024,{" "}
        <a
          href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_4Xin234/_article/-char/ja"
          target="_blank"
          rel="noopener noreferrer"
        >
          朗読音声合成におけるポーズ長分布の多様性を吸収するための標準化の効果
        </a>
        , 第38回人工知能学会全国大会論文集。
      </p>

      <h2>背景</h2>
      <p>
        音声合成では、ポーズが自然な朗読を再現するのが課題でした。この研究では、ポーズ位置と長さを予測するモデルを開発し、ポーズの多様性を吸収するための標準化の効果を検証しました。今後、修士研究として音声合成モデルの開発・組み込み及び精度向上に取り組みます。
      </p>

      <h2>工夫した点</h2>
      <p>
        朗読者や作品によるポーズ分布の違い、文中・文間での違いを考慮し、BERTとLSTMモデルを組み合わせて特徴を反映しました。また、精度を細かく検証しました。
      </p>

      <a
        href="https://github.com/takeshun256/PauseNormEffect"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub
      </a>
    </div>
  </section>
);

export default PauseNormEffect;
