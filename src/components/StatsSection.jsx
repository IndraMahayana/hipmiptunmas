import CountUp from "./CountUp.jsx";

const stats = [
  {
    value: 400,
    label: "Anggota & Alumni",
    detail: "Satu wadah, beragam kisah sukses",
  },
  {
    value: 29,
    label: "Program Kolaborasi",
    detail: "Wadah belajar dan bertumbuh",
  },
  {
    value: 34,
    label: "Mitra & Komunitas",
    detail: "Jaringan relasi yang saling mendukung",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section" aria-label="Angka HIPMI PTUNMAS">
      <div className="shell stats-grid">
        <div className="stats-heading">
          <span className="eyebrow eyebrow-light">Kita tumbuh bersama</span>
          <h2>
            Langkah Kecil,
            <br />
            <em>Arti yang Besar.</em>
          </h2>
        </div>
        {stats.map(({ value, label, detail }) => (
          <div className="stat-item" key={label}>
            <strong>
              <CountUp value={value} />
            </strong>
            <span>{label}</span>
            <small>{detail}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
