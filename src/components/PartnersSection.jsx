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
    subtitle: "Kolaborasi kampus",
  },
  {
    icon: BriefcaseBusiness,
    title: "Pelaku Usaha",
    subtitle: "Mentor & industri",
  },
  { icon: UsersRound, title: "Komunitas Muda", subtitle: "Gerakan bersama" },
  { icon: Award, title: "Mitra Strategis", subtitle: "Dukungan bertumbuh" },
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
            Lebih banyak
            <br />
            <em>yang bisa kita</em>
            <br />
            wujudkan.
          </h2>
          <p>
            Kami percaya, langkah besar lahir dari kerja bersama. Mari tumbuh
            dan menciptakan peluang yang bermanfaat untuk lebih banyak orang.
          </p>
          <a className="button button-outline-light" href="#kontak">
            Jadi partner kami <ArrowUpRight size={16} />
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
            <span>Terbuka untuk kolaborasi lintas bidang dan komunitas.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
