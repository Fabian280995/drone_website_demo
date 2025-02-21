import Banner from "@/components/Banner";
import Contact from "@/components/Contact"; // Importiere die neue Komponente
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";

export default function Portfolio() {
  return (
    <>
      <Banner />
      <Introduction />
      <Services />
      <Workflow />
      <Contact />
    </>
  );
}
