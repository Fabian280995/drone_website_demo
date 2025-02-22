import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import LegalInfo from "@/components/ui/legalInfo";

export default function Datenschutz() {
  return (
    <SectionWrapper>
      <MaxWidthWrapper className="pb-20">
        <h1 className="font-bold">Datenschutzerklärung</h1>
        <LegalInfo className="mt-4">
          <p>
            Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
          </p>
        </LegalInfo>
        <LegalInfo title="1. Allgemeine Hinweise">
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.
          </p>
        </LegalInfo>
        <LegalInfo title="2. Datenerfassung">
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Andere Daten werden automatisch oder nach Ihrer
            Einwilligung beim Besuch der Website durch unsere IT-Systeme
            erfasst.
          </p>
        </LegalInfo>
        <LegalInfo title="3. Ihre Rechte">
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
            Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen
            Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>
        </LegalInfo>
        <LegalInfo title="Weitere Informationen">
          <p>
            Bei weiteren Fragen zum Datenschutz können Sie sich jederzeit an uns
            wenden:
          </p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:fabianlessmann@cineeagle.com"
              className="hover:underline "
            >
              fabianlessmann@cineeagle.com
            </a>
          </p>
        </LegalInfo>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
