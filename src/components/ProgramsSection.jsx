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
      "Wadah pembelajaran praktis dan sesi berbagi pengalaman langsung dari para praktisi untuk mengasah mindset wirausaha.",
    tag: "BELAJAR",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Mentoring Business & Networking",
    description:
      "Temukan mitra bisnis, mentor berpengalaman, dan peluang kolaborasi baru dalam ekosistem yang mendukung.",
    tag: "TERHUBUNG",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Expo & Startup Incubation",
    description:
      "Program inkubasi dan pameran karya untuk mematangkan ide bisnis menjadi usaha yang bernilai serta berkelanjutan.",
    tag: "BERTUMBUH",
  },
  {
    number: "04",
    icon: Compass,
    title: "Seminar & Community Action",
    description:
      "Aksi nyata berbasis wirausaha sosial untuk memberikan solusi dan dampak positif bagi masyarakat.",
    tag: "BERDAMPAK",
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
              Ruang untuk Ide,
              <br />
              <span>Aksi, dan Koneksi.</span>
            </h2>
          </div>
          <p>
            Program strategis yang dirancang untuk membekali keterampilan,
            memperluas jejaring, dan mengakselerasi potensi wirausaha mahasiswa
            Unmas Denpasar.
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
            *Nama dan agenda program disesuaikan dengan kalender kegiatan resmi
            HIPMI PT UNMAS.
          </span>
          <a className="text-link" href="#kontak">
            Punya Ide Program? <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
