import SectionWrapper from "@/components/layout/SectionWrapper";

export default function Impressum() {
  return (
    <main>
      <SectionWrapper>
        <h1>Impressum</h1>
        <p>
          <strong>Angaben gemäß § 5 TMG:</strong>
        </p>
        <div className="">
          <p>Fabian Lessmann</p>
          <p>CineEagle</p>
          <p>Musterstraße 12, 40724 Hilden, Deutschland</p>
          <p>Telefon: +49 1511 6773509</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:fabianlessmann@cineeagle.com">
              fabianlessmann@cineeagle.com
            </a>
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
