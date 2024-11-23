import Contact from "@/components/Contact"; // Importiere die neue Komponente
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/NewHero";
import Services from "@/components/Services";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* <div id="home" className="h-20 bg-background" /> */}
      <main id="home">
        <Hero>
          <Services />
        </Hero>
        <Gallery />
        <Contact />
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} FPV Drohnenflüge. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
