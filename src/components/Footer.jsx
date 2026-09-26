import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <div className="footer-branding">
          <a className="brand brand-footer" href="#beranda">
            <img
              className="brand-logo footer-logo"
              src="/logo.png"
              alt="Logo HIPMI PT Universitas Mahasaraswati"
            />
            <span className="brand-copy">
              <strong>HIPMI</strong>
              <small>PT UNIVERSITAS MAHASARASWATI</small>
            </span>
          </a>
          <p className="footer-description">
            Menumbuhkan pengusaha muda, menghadirkan dampak bersama.
          </p>
        </div>

        <nav className="footer-links" aria-label="Program HIPMI PTUNMAS">
          <h2>Program</h2>
          <a href="#program">Business Visit &amp; Sharing</a>
          <a href="#program">Mentoring Business &amp; Networking</a>
          <a href="#program">Expo &amp; Startup Incubation</a>
          <a href="#program">Seminar &amp; Community Action</a>
        </nav>

        <nav className="footer-links" aria-label="Navigasi footer">
          <h2>Navigasi</h2>
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#program">Program</a>
          <a href="#partner">Kolaborasi</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} HIPMI PTUNMAS. Tumbuh bersama.</span>
        <span>
          Dibuat dengan semangat kolaborasi{" "}
          <span className="footer-heart">✳</span>
        </span>
        <a className="footer-top" href="#beranda">
          Kembali ke atas <ArrowUpRight size={15} />
        </a>
      </div>
    </footer>
  );
}
