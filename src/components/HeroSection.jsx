import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  Lightbulb,
  Sparkles,
  UsersRound,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" /> Wadah pengusaha muda kampus
          </div>
          <h1>
            Berani mulai.
            <br />
            <em>Bertumbuh</em> bersama.
          </h1>
          <p className="hero-lead">
            Tempat ide bertemu aksi. Kami menyiapkan generasi pengusaha muda
            yang berdaya, saling menguatkan, dan membawa dampak.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#tentang">
              Kenali HIPMI <ArrowRight size={17} />
            </a>
            <a className="text-link text-link-light" href="#program">
              Jelajahi program <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-social-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>R</span>
              <span>A</span>
              <span>D</span>
              <span>+</span>
            </div>
            <div>
              <strong>Energi muda, potensi tanpa batas</strong>
              <small>Belajar · Berjejaring · Bertumbuh</small>
            </div>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Ilustrasi semangat bertumbuh bersama"
        >
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="art-sun" />
          <div className="art-panel art-panel-main">
            <div className="art-panel-top">
              <span className="mini-label">RUANG UNTUK</span>
              <Sparkles size={18} />
            </div>
            <div className="art-display">
              IDE
              <br />
              <span>JADI AKSI.</span>
            </div>
            <div className="art-bottom">
              <span>Mulai dari sini</span>
              <ArrowDownRight size={19} />
            </div>
          </div>
          <div className="art-note note-top">
            <span className="note-icon">
              <Lightbulb size={17} />
            </span>
            <span>
              <strong>Ide segar</strong>
              <small>Jadi peluang baru</small>
            </span>
          </div>
          <div className="art-note note-bottom">
            <span className="note-icon note-icon-dark">
              <UsersRound size={17} />
            </span>
            <span>
              <strong>Teman seperjalanan</strong>
              <small>Melangkah lebih jauh</small>
            </span>
          </div>
          <div className="art-stamp">
            TUMBUH
            <br />
            BERSAMA<span>✳</span>
          </div>
          <div className="art-spark spark-a">✳</div>
          <div className="art-spark spark-b">✳</div>
        </div>
      </div>
      <div className="hero-bottom shell">
        <span>RUANG BERTUMBUH BAGI PENGUSAHA MUDA</span>
        <a href="#tentang" aria-label="Scroll ke tentang">
          <ArrowDown size={17} />
        </a>
        <span>BERDAYA · BERKARYA · BERDAMPAK</span>
      </div>
    </section>
  );
}
