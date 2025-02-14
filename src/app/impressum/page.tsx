import React from "react";
import PaddingBox from "@/components/layout/PaddingBox";

export default function Impressum() {
  return (
    <PaddingBox
      vertical="xl"
      horizontal="sm"
      className="max-w-screen mx-auto flex items-center justify-center h-screen"
    >
      <div className="p-8 border-2 border-primary flex flex-col gap-4">
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
      </div>
    </PaddingBox>
  );
}
