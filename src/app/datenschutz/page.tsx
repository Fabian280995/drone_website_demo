import React from "react";
import PaddingBox from "@/components/layout/PaddingBox";

export default function Datenschutz() {
  return (
    <PaddingBox vertical="xl" horizontal="lg">
      <h1>Datenschutzerklärung</h1>
      <p>
        Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren
        personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
      </p>
      <h2>1. Allgemeine Hinweise</h2>
      <p>
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
        Website entnehmen.
      </p>
      <h2>2. Datenerfassung</h2>
      <p>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Andere Daten werden automatisch oder nach Ihrer Einwilligung
        beim Besuch der Website durch unsere IT-Systeme erfasst.
      </p>
      <h2>3. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie
        ein Recht auf Berichtigung oder Löschung dieser Daten.
      </p>
      <p>
        Bei weiteren Fragen zum Datenschutz können Sie sich jederzeit an uns
        wenden:
      </p>
      <p>
        E-Mail:{" "}
        <a href="mailto:fabianlessmann@cineeagle.com">
          fabianlessmann@cineeagle.com
        </a>
      </p>
    </PaddingBox>
  );
}
