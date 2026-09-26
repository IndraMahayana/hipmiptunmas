import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="intro-section section-pad" id="tentang">
      <div className="shell intro-grid">
        <div className="section-kicker">
          <span>01 / TENTANG KAMI</span>
          <span className="kicker-line" />
        </div>
        <div className="intro-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" /> KENALI KAMI LEBIH DEKAT
          </div>
          <h2>
            Bukan Sekadar Organisasi,
            <br />
            <span>Ini Tempat Kamu Bertumbuh.</span>
          </h2>
          <div className="intro-bottom">
            <p>
              HIPMI PT UNMAS adalah ruang kolaborasi bagi mahasiswa yang ingin
              belajar dunia usaha, membuka peluang baru, dan menciptakan
              perubahan. Di sini, setiap langkah kecil memiliki ruang untuk
              menjadi sesuatu yang besar.
            </p>
            <a className="text-link" href="#kontak">
              Selengkapnya <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="values-row">
            <div>
              <span className="value-number">01</span>
              <strong>Berani Mencoba</strong>
              <small>Dimulai dari ide yang sederhana.</small>
            </div>
            <div>
              <span className="value-number">02</span>
              <strong>Tumbuh Bersama</strong>
              <small>Belajar dan berkembang tidak harus sendiri.</small>
            </div>
            <div>
              <span className="value-number">03</span>
              <strong>Berdampak Nyata</strong>
              <small>Menciptakan karya yang bernilai dan bermanfaat.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
