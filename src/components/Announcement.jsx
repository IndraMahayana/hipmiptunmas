import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const announcements = [
  {
    title: "Open Recruitment Anggota HIPMI PT UNMAS",
    image: "/openreqanggota.webp",
    href: "https://www.instagram.com/p/DdU1tOhgfS4/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    title: "Seminar & Workshop HIPMI PT UNMAS",
    image: "/openreqseminar.webp",
    href: "https://www.instagram.com/p/DdtKnUgATqw/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
];

export default function Announcement() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const dialogRef = useRef(null);

  const showPrevious = useCallback(() => {
    setActiveIndex(
      (index) => (index - 1 + announcements.length) % announcements.length,
    );
  }, []);
  const showNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % announcements.length);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const link = event.target.closest("a[href]");
      if (link && !dialogRef.current?.contains(link)) setIsOpen(true);
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, showNext, showPrevious]);

  if (!isOpen) return null;

  const activeAnnouncement = announcements[activeIndex];

  return (
    <div className="announcement-backdrop">
      <section
        ref={dialogRef}
        className="announcement-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Informasi pendaftaran HIPMI PT UNMAS"
        onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
        onTouchEnd={(event) => {
          if (touchStart === null) return;
          const distance = event.changedTouches[0].clientX - touchStart;
          if (Math.abs(distance) > 45) {
            if (distance > 0) showPrevious();
            else showNext();
          }
          setTouchStart(null);
        }}
      >
        <button
          className="announcement-close"
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Tutup informasi"
        >
          <X size={21} />
        </button>
        <a
          className="announcement-poster-link"
          href={activeAnnouncement.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Lihat informasi: ${activeAnnouncement.title}`}
        >
          <img
            className="announcement-poster"
            src={activeAnnouncement.image}
            alt={activeAnnouncement.title}
          />
        </a>
        <button
          className="announcement-arrow announcement-arrow-previous"
          type="button"
          onClick={showPrevious}
          aria-label="Informasi sebelumnya"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="announcement-arrow announcement-arrow-next"
          type="button"
          onClick={showNext}
          aria-label="Informasi berikutnya"
        >
          <ChevronRight size={24} />
        </button>
        <div className="announcement-pagination" aria-label="Pilih pengumuman">
          {announcements.map((announcement, index) => (
            <button
              key={announcement.image}
              className={`announcement-dot${index === activeIndex ? " is-active" : ""}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Tampilkan pengumuman ${index + 1}: ${announcement.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
          <span aria-live="polite">
            {activeIndex + 1} / {announcements.length}
          </span>
        </div>
      </section>
    </div>
  );
}
