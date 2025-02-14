import Banner from "@/components/Banner";
import Contact from "@/components/Contact"; // Importiere die neue Komponente
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="home">
        <Banner />
        {/* <CustomersSlider /> */}
        <Introduction />
        <Services />
        <Workflow />
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
