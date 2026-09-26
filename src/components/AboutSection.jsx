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
            <span className="eyebrow-dot" /> Kenalan lebih dekat
          </div>
          <h2>
            Bukan cuma organisasi.
            <br />
            <span>Ini tempat kamu bertumbuh.</span>
          </h2>
          <div className="intro-bottom">
            <p>
              HIPMI PTUNMAS adalah ruang kolaborasi bagi mahasiswa yang ingin
              belajar dunia usaha, saling membuka peluang, dan menciptakan
              perubahan. Di sini, setiap langkah kecil punya ruang untuk jadi
              sesuatu yang besar.
            </p>
            <a className="text-link" href="#kontak">
              Cerita kami <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="values-row">
            <div>
              <span className="value-number">01</span>
              <strong>Berani mencoba</strong>
              <small>Mulai dari ide sederhana.</small>
            </div>
            <div>
              <span className="value-number">02</span>
              <strong>Tumbuh bersama</strong>
              <small>Belajar tak harus sendiri.</small>
            </div>
            <div>
              <span className="value-number">03</span>
              <strong>Berdampak nyata</strong>
              <small>Karya yang berarti.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
