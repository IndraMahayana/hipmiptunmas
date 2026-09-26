import {
  ArrowUpRight,
  Instagram,
  Mail,
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
            Punya Ide Besar?
            <br />
            <span>Mulai Obrolannya.</span>
          </h2>
          <p>
            Ingin bergabung, berkolaborasi, atau sekadar bertukar pikiran? Kami
            siap mendengarkan dan bertumbuh bersama.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card contact-card-main">
            <span className="contact-symbol">
              <MessageCircle size={22} />
            </span>
            <div>
              <span className="contact-label">HUBUNGI VIA WHATSAPP</span>
              <h3>WhatsApp</h3>
              <p>
                Konsultasi cepat terkait keanggotaan, peluang kolaborasi, maupun
                program kerja.
              </p>
              <a
                href={`https://wa.me/6285735367805?text=${encodeURIComponent(
                  "Halo kak!, Mau tanya-tanya dong tentang kegiatan di HIPMI PT UNMAS dan gimana cara daftarnya. Terima kasih!",
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Hubungi HIPMI PT UNMAS melalui WhatsApp"
              >
                085735367805 <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <a
            className="contact-card contact-card-social"
            href="https://www.instagram.com/hipmiptunmas/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-symbol">
              <Instagram size={22} />
            </span>
            <div>
              <span className="contact-label">IKUTI CERITA KAMI</span>
              <h3>Instagram</h3>
              <p>
                Kabar terbaru kegiatan, info acara, dan dokumentasi komunitas.
              </p>
            </div>
            <ArrowUpRight className="social-arrow" size={18} />
          </a>
          <div className="contact-card contact-card-address">
            <span className="contact-symbol">
              <Mail size={22} />
            </span>
            <div>
              <span className="contact-label">KIRIM EMAIL</span>
              <h3>Email</h3>
              <p>
                Kirimkan proposal, pertanyaan resmi, atau penawaran kerja sama.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hipmiptunmas%40unmas.ac.id"
                target="_blank"
                rel="noreferrer"
              >
                hipmiptunmas@unmas.ac.id <ArrowUpRight size={16} />
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
              <span className="contact-label">LOKASI SEKRETARIAT HIPMI</span>
              <strong>Universitas Mahasaraswati Denpasar</strong>
              <small>Denpasar, Bali</small>
            </div>
            <a
              href="https://maps.google.com/?q=Universitas+Mahasaraswati+Denpasar"
              target="_blank"
              rel="noreferrer"
              aria-label="Buka lokasi Universitas Mahasaraswati Denpasar di Google Maps"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
          <iframe
            title="Peta Universitas Mahasaraswati Denpasar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4078205136993!2d115.22256617456816!3d-8.652706788022126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24083356de733%3A0xb7475eff97f41ce7!2sUniversitas%20Mahasaraswati%20Denpasar!5e0!3m2!1sid!2sid!4v1790411525019!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
