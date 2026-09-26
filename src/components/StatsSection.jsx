import CountUp from "./CountUp.jsx";

const stats = [
  {
    value: 250,
    label: "Anggota & alumni",
    detail: "Satu ruang, banyak cerita",
  },
  {
    value: 18,
    label: "Program kolaborasi",
    detail: "Belajar sambil bertumbuh",
  },
  {
    value: 12,
    label: "Mitra komunitas",
    detail: "Jaringan yang saling dukung",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section" aria-label="Angka HIPMI PTUNMAS">
      <div className="shell stats-grid">
        <div className="stats-heading">
          <span className="eyebrow eyebrow-light">Kita tumbuh bersama</span>
          <h2>
            Langkah kecil,
            <br />
            <em>arti yang besar.</em>
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
