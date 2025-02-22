import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ImpressumInfo from "@/components/ui/legalInfo";

export default function Impressum() {
  return (
    <SectionWrapper id="impressum">
      <MaxWidthWrapper className="pb-20">
        <h1 className="font-bold">Impressum</h1>
        <ImpressumInfo title="Angaben gemäß § 5 TMG">
          <p>
            Fabian Lessmann
            <br />
            CineEagle (Einzelunternehmer)
            <br />
            Rethelweg 8
            <br />
            40724 Hilden
          </p>
        </ImpressumInfo>

        <ImpressumInfo title="Kontakt">
          <p>
            Telefon:{" "}
            <a
              href="tel:+4915116773509"
              className="hover:underline text-blue-500"
            >
              +49 1511 6773509
            </a>
            <br />
            Telefax: +49 (0) 123 44 55 99
            <br />
            E-Mail:{" "}
            <a
              href="mailto:fabianlessmann@cineeagle.com"
              className="text-blue-500 hover:underline"
            >
              fabianlessmann@cineeagle.com
            </a>
          </p>
        </ImpressumInfo>

        <ImpressumInfo title="Redaktionell verantwortlich">
          <p>
            Fabian Lessmann
            <br />
            Rethelweg 8
            <br />
            40724 Hilden
          </p>
        </ImpressumInfo>

        <ImpressumInfo title="EU-Streitschlichtung">
          <p>
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </ImpressumInfo>

        <ImpressumInfo title="Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle">
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </ImpressumInfo>

        <ImpressumInfo title="Quellen">
          <p>
            <a
              href="https://www.e-recht24.de"
              className="hover:underline text-blue-500"
            >
              e-recht24.de
            </a>
          </p>
        </ImpressumInfo>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
