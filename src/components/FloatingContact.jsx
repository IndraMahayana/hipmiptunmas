import { MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <a
      className="floating-join"
      href="#kontak"
      aria-label="Hubungi HIPMI PTUNMAS"
    >
      <MessageCircle size={19} />
      <span>Yuk, ngobrol</span>
    </a>
  );
}
