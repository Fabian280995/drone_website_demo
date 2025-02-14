import React from "react";
import PaddingBox from "@/components/layout/PaddingBox";

export default function Impressum() {
  return (
    <PaddingBox vertical="xl" horizontal="lg">
      <h1>Impressum</h1>
      <p>
        <strong>Angaben gemäß § 5 TMG:</strong>
      </p>
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
    </PaddingBox>
  );
}
