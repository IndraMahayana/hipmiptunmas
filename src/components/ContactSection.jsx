import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="contact-section section-pad" id="kontak">
      <div className="shell">
        <div className="contact-heading">
          <div className="eyebrow">
            <span className="eyebrow-dot" /> 04 / KONTAK
          </div>
          <h2>
            Punya ide besar?
            <br />
            <span>Mulai obrolannya.</span>
          </h2>
          <p>
            Mau bergabung, berkolaborasi, atau sekadar bertukar cerita? Kami
            senang mendengar darimu.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card contact-card-main">
            <span className="contact-symbol">
              <MessageCircle size={22} />
            </span>
            <div>
              <span className="contact-label">KIRIM PESAN</span>
              <h3>Ngobrol bareng HIPMI</h3>
              <p>
                Hubungi kami untuk informasi keanggotaan, kerja sama, atau
                program.
              </p>
              <a href="mailto:sekretariat@hipmiptunmas.id">
                sekretariat@hipmiptunmas.id <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <a
            className="contact-card contact-card-social"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-symbol">
              <Instagram size={22} />
            </span>
            <div>
              <span className="contact-label">IKUTI CERITA KAMI</span>
              <h3>Instagram</h3>
              <p>Update kegiatan dan cerita dari komunitas.</p>
            </div>
            <ArrowUpRight className="social-arrow" size={18} />
          </a>
          <div className="contact-card contact-card-address">
            <span className="contact-symbol">
              <MapPin size={22} />
            </span>
            <div>
              <span className="contact-label">KUNJUNGI KAMI</span>
              <h3>Sekretariat HIPMI PTUNMAS</h3>
              <p>Silakan hubungi kami untuk alamat dan jadwal kunjungan.</p>
              <a href="#peta">
                Lihat area pada peta <ArrowDown size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="map-panel" id="peta">
          <div className="map-info">
            <span className="map-pin">
              <MapPin size={18} />
            </span>
            <div>
              <span className="contact-label">TEMUKAN KAMI</span>
              <strong>Area Indonesia</strong>
              <small>
                Perbarui lokasi peta setelah alamat sekretariat terkonfirmasi.
              </small>
            </div>
            <a
              href="https://maps.google.com/?q=Indonesia"
              target="_blank"
              rel="noreferrer"
              aria-label="Buka peta Indonesia"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
          <iframe
            title="Peta area Indonesia"
            src="https://maps.google.com/maps?q=Indonesia&t=&z=4&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
