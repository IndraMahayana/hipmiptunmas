import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  ["Tentang", "#tentang"],
  ["Program", "#program"],
  ["Kolaborasi", "#partner"],
  ["Kontak", "#kontak"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Navigasi utama">
        <a
          className="brand"
          href="#beranda"
          onClick={closeMenu}
          aria-label="HIPMI PTUNMAS, ke beranda"
        >
          <img
            className="brand-logo"
            src="/logo.png"
            alt="Logo HIPMI PTUNMAS"
          />
          <span className="brand-copy">
            <strong>HIPMI</strong>
            <small>PTUNMAS</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#kontak" onClick={closeMenu}>
            Gabung HIPMI <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
