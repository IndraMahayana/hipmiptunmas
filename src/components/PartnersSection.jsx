import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Building2,
  Handshake,
  UsersRound,
} from "lucide-react";

const partners = [
  {
    icon: Building2,
    title: "Institusi Pendidikan",
    subtitle: "Sinergi Akademis & Kampus",
  },
  {
    icon: BriefcaseBusiness,
    title: "Pelaku Usaha",
    subtitle: "Praktisi & Dunia Industri",
  },
  { icon: UsersRound, title: "Komunitas Muda", subtitle: "Organisasi & Komunitas Pemuda" },
  { icon: Award, title: "Mitra Strategis", subtitle: "Dukungan Ekosistem Bisnis" },
];

export default function PartnersSection() {
  return (
    <section className="partner-section section-pad" id="partner">
      <div className="shell partner-layout">
        <div className="partner-copy">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" /> 03 / KOLABORASI
          </div>
          <h2>
            Lebih Banyak Hal
            <br />
            <em>Bisa Kita Wujudkan</em>
            <br />
            Bersama.
          </h2>
          <p>
            Kami percaya gagasan besar tercipta melalui sinergi. Mari
            berkolaborasi menciptakan peluang baru dan dampak positif yang lebih
            luas.
          </p>
          <a className="button button-outline-light" href="#kontak">
            Menjadi Mitra Kami <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="partner-cards">
          {partners.map(({ icon: Icon, title, subtitle }, index) => (
            <div className="partner-card" key={title}>
              <span className="partner-card-icon">
                <Icon size={21} strokeWidth={1.7} />
              </span>
              <div>
                <strong>{title}</strong>
                <small>{subtitle}</small>
              </div>
              <span className="partner-index">0{index + 1}</span>
            </div>
          ))}
          <div className="partner-note">
            <span className="partner-note-mark">✳</span>
            <span>Terbuka untuk kolaborasi lintas disiplin, instansi, dan komunitas.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
