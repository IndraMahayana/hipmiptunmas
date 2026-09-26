import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Handshake,
  Lightbulb,
  Rocket,
} from "lucide-react";

const programs = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Business Visit & Sharing",
    description:
      "Kelas praktis dan sesi berbagi untuk mengasah pola pikir serta keterampilan membangun bisnis.",
    tag: "Belajar",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Business Connect",
    description:
      "Temukan partner, mentor, dan peluang kolaborasi lewat ruang temu yang suportif.",
    tag: "Terhubung",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Youngpreneur Lab",
    description:
      "Ruang uji ide untuk mengubah gagasan segar menjadi solusi dan usaha yang berkelanjutan.",
    tag: "Bertumbuh",
  },
  {
    number: "04",
    icon: Compass,
    title: "Impact Project",
    description:
      "Aksi nyata bersama komunitas untuk menghadirkan dampak positif di sekitar kita.",
    tag: "Berdampak",
  },
];

export default function ProgramsSection() {
  return (
    <section className="program-section section-pad" id="program">
      <div className="shell">
        <div className="section-topline">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> 02 / PROGRAM KERJA
            </div>
            <h2>
              Ruang untuk ide,
              <br />
              <span>aksi, dan koneksi.</span>
            </h2>
          </div>
          <p>
            Program yang dirancang untuk membekali, mempertemukan, dan mendorong
            pengusaha muda kampus melangkah lebih jauh.
          </p>
        </div>
        <div className="program-grid">
          {programs.map(({ number, icon: Icon, title, description, tag }) => (
            <article className="program-card" key={number}>
              <div className="program-card-top">
                <span>{number} / 04</span>
                <span className="program-icon">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
              </div>
              <div>
                <span className="program-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <a href="#kontak" aria-label={`Tanya tentang ${title}`}>
                <ArrowUpRight size={19} />
              </a>
            </article>
          ))}
        </div>
        <div className="program-footnote">
          <span>
            *Nama dan deskripsi program dapat disesuaikan dengan agenda resmi
            HIPMI PTUNMAS.
          </span>
          <a className="text-link" href="#kontak">
            Punya ide program? <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
