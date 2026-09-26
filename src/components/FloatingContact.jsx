import { ArrowUpRight, Megaphone, X } from "lucide-react";
import { useState } from "react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const recruitmentLink =
    "https://www.instagram.com/p/DdU1tOhgfS4/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==";
  const seminarLink =
    "https://www.instagram.com/p/DdtKnUgATqw/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==";

  return (
    <div className={`floating-promos${isOpen ? " is-open" : ""}`}>
      {isOpen && (
        <section
          className="floating-promo-panel"
          aria-label="Info dan pendaftaran HIPMI"
        >
          <div className="floating-promo-heading">
            <div>
              <span>HIPMI PT UNMAS</span>
              <h2>Mulai langkahmu</h2>
            </div>
            <button
              className="floating-promo-close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup informasi pendaftaran"
            >
              <X size={18} />
            </button>
          </div>
          <article className="floating-promo-item">
            <div>
              <h3>Open Recruitment</h3>
              <p>Gabung HIPMI PT UNMAS &amp; kembangkan bisnismu.</p>
            </div>
            <a href={recruitmentLink} target="_blank" rel="noreferrer">
              Daftar Sekarang <ArrowUpRight size={14} />
            </a>
          </article>
          <article className="floating-promo-item">
            <div>
              <h3>Seminar &amp; Workshop</h3>
              <p>Tingkatkan skill wirausahamu. Kuota terbatas!</p>
            </div>
            <a href={seminarLink} target="_blank" rel="noreferrer">
              Amankan Slot <ArrowUpRight size={14} />
            </a>
          </article>
        </section>
      )}
      <button
        className="floating-join"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Tutup info pendaftaran" : "Buka info pendaftaran"}
      >
        {isOpen ? <X size={18} /> : <Megaphone size={18} />}
        <span>{isOpen ? "Tutup" : "Info & Pendaftaran"}</span>
      </button>
    </div>
  );
}
