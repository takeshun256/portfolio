const projects = [
  {
    title: "松尾・岩澤研究室：リフォームプラットフォーム PoC",
    description: "【2023年6月〜12月】AIによる営業支援サービスのPoCプロジェクトに参画。AI企業及び技術調査、生成AI利用やスタートアップ企業の技術調査及びPoCに携わりました。",
    github: "https://weblab.t.u-tokyo.ac.jp",
  },
  {
    title: "松尾研究所：画像認識（インターン）",
    description: "【2023年6月〜12月】Pythonを用いた画像認識の開発エンジニアとして参画。部屋間取りの画像認識を担当。",
    github: "https://matsuo-institute.com",
  },
  {
    title: "株式会社Shinonome： 画像認識",
    description: "【2022年〜2024年3月】画像認識で水道会社の接続図番の電子化を行い、前後処理及び精度向上のチームリーダーを務めました。",
    github: "https://shinonome.com",
  },
  {
    title: "株式会社Shinonome：音声合成",
    description: "【2021年5月〜2023年10月】アナウンサーのAI音声合成モデルを作成し、音声合成モデル開発のチームリーダーを務めました。",
    github: "https://shinonome.com",
  },
  {
    title: "株式会社Shinonome：感情分類",
    description: "【2024年】非言語的な赤ちゃんの音声の感情分類モデルの作成に従事しました。",
    github: "https://shinonome.com",
  },
  {
    title: "株式会社Airion：画像処理",
    description: "【2024年12月〜】医療画像処理の最適化。医療画像の評価基準の調査及び、評価基準の作成に従事。",
    github: "https://airion.co.jp",
  },
  {
    title: "Geniac LLM開発プロジェクト: LLM大規模データ前処理",
    description: "【2024年1月〜3月】Geniac LLM開発プロジェクトに参画。大規模データの前処理の1チームリーダーを務めました。",
    github: "https://weblab.t.u-tokyo.ac.jp/geniac_llm",
  },
  {
    title: "世界モデルと知能 2022: ポスター発表最優秀賞",
    description: "【2022年2月〜5月】世界モデルと知能 2022にてポスター発表最優秀賞を受賞しました。世界モデルによる自然音声の模倣に関する開発を行いました。",
    github: "https://deeplearning.jp/en/lectures/world-model-2022",
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

