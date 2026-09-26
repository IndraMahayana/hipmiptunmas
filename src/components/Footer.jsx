import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <a className="brand brand-footer" href="#beranda">
          <span className="brand-mark">
            H<span>P</span>
          </span>
          <span className="brand-copy">
            <strong>HIPMI</strong>
            <small>PTUNMAS</small>
          </span>
        </a>
        <p>
          Menumbuhkan pengusaha muda,
          <br />
          menghadirkan dampak bersama.
        </p>
        <a className="footer-top" href="#beranda">
          Kembali ke atas <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} HIPMI PTUNMAS. Tumbuh bersama.</span>
        <span>
          Dibuat dengan semangat kolaborasi{" "}
          <span className="footer-heart">✳</span>
        </span>
      </div>
    </footer>
  );
}
