import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { privacyPolicy } from "@/data/datenschutz";

export default function Datenschutz() {
  return (
    <SectionWrapper>
      <MaxWidthWrapper className="pb-20">
        <h1 className="text-primary font-bold text-3xl mb-6">
          {privacyPolicy.title}
        </h1>

        {privacyPolicy.articles.map((article, articleIndex) => (
          <section key={articleIndex} className="mb-8 max-w-5xl">
            {article.title && (
              <h2 className="text-2xl font-semibold mb-4">
                {articleIndex + 1}. {article.title}
              </h2>
            )}

            {article.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                {section.title && (
                  <h3 className="text-xl font-semibold mb-2">
                    {section.title}
                  </h3>
                )}

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <div key={paragraphIndex} className="mb-6">
                    {paragraph.title && (
                      <h4 className="text-lg font-medium mb-2">
                        {paragraph.title}
                      </h4>
                    )}

                    {/* Texte */}
                    {paragraph.texts &&
                      paragraph.texts.map((text, textIndex) => (
                        <p
                          key={textIndex}
                          className="text-gray-700 mb-2 border-l-4 border-primary pl-4 py-1 leading-relaxed tracking-wide text-base max-md:text-sm"
                        >
                          {text}
                        </p>
                      ))}

                    {/* Adressen (falls vorhanden) */}
                    {paragraph.addresses && paragraph.addresses.length > 0 && (
                      <div className="mb-2 border-l-4 border-yellow-500 pl-4 py-1 text-gray-800">
                        {paragraph.addresses.map((address, addressIndex) => (
                          <div key={addressIndex} className="mb-2">
                            <p className="font-semibold">{address.name}</p>
                            <p>{address.street}</p>
                            <p>
                              {address.postalCode} {address.city}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Links (falls vorhanden) */}
                    {paragraph.links && paragraph.links.length > 0 && (
                      <div className="mb-2 flex flex-col border-l-4 border-blue-500 pl-4 py-1 text-gray-800">
                        {paragraph.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {link.label}: {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>
        ))}
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
