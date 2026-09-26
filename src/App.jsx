import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import StatsSection from "./components/StatsSection.jsx";
import ProgramsSection from "./components/ProgramsSection.jsx";
import PartnersSection from "./components/PartnersSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import FloatingContact from "./components/FloatingContact.jsx";
import Announcement from "./components/Announcement.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProgramsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
      <Announcement />
    </>
  );
}
