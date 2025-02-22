export interface PrivacyPolicy {
  title: string;
  articles: Article[];
}

export interface Article {
  title?: string;
  sections: Section[];
}

export interface Section {
  title?: string;
  paragraphs: Paragraph[];
}

export interface Paragraph {
  title?: string;
  texts?: string[];
  addresses?: Address[];
  links?: Link[];
}

export interface Address {
  name: string;
  street: string;
  postalCode: string;
  city: string;
}

export interface Link {
  label: string; //bsp.: "E-Mail"
  text: string; // bsp.: "fabianlessmann@cineeagle.com"
  url: string; // bsp.: "mailto:fabianlessmann@cineeagle.com"
}

const firstArticle: Article = {
  title: "Datenschutz auf einen Blick",
  sections: [
    {
      title: "Allgemeine Hinweise",
      paragraphs: [
        {
          texts: [
            "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.",
            "Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
            "Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.",
          ],
        },
      ],
    },
    {
      title: "Datenerfassung auf dieser Website",
      paragraphs: [
        {
          title:
            "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
          texts: [
            "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.",
            "Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.",
          ],
        },
        {
          title: "Wie erfassen wir Ihre Daten?",
          texts: [
            "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.",
            "Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
            "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.",
            "Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).",
            "Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
          ],
        },
        {
          title: "Wofür nutzen wir Ihre Daten?",
          texts: [
            "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.",
            "Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.",
            "Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.",
          ],
        },
        {
          title: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
          texts: [
            "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.",
            "Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.",
            "Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.",
            "Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
            "Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
            "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.",
          ],
        },
      ],
    },
    {
      title: "Analyse-Tools und Tools von Drittanbietern",
      paragraphs: [
        {
          texts: [
            "Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden.",
            "Das geschieht vor allem mit sogenannten Analyseprogrammen.",
            "Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.",
          ],
        },
      ],
    },
  ],
};

const hostingArticle: Article = {
  title: "Hosting",
  sections: [
    {
      paragraphs: [
        {
          texts: [
            "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:",
          ],
        },
      ],
    },
    {
      title: "Externes Hosting",
      paragraphs: [
        {
          texts: [
            "Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.",
            "Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.",
          ],
        },
        {
          texts: [
            "Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).",
            "Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst.",
            "Die Einwilligung ist jederzeit widerrufbar.",
          ],
        },
        {
          texts: [
            "Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.",
          ],
        },
      ],
    },
    {
      title: "Wir setzen folgende(n) Hoster ein:",
      paragraphs: [
        {
          addresses: [
            {
              name: "Musterhosting AG",
              street: "Musterweg 100",
              postalCode: "90210",
              city: "Musterstadt",
            },
          ],
        },
      ],
    },
  ],
};

const generalInfoArticle: Article = {
  title: "Allgemeine Hinweise und Pflichtinformationen",
  sections: [
    {
      title: "Datenschutz",
      paragraphs: [
        {
          texts: [
            "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
            "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.",
            "Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.",
            "Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.",
            "Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
          ],
        },
      ],
    },
    {
      title: "Hinweis zur verantwortlichen Stelle",
      paragraphs: [
        {
          texts: [
            "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
          ],
          addresses: [
            {
              name: "Fabian Lessmann",
              street: "Rethelweg 8",
              postalCode: "40724",
              city: "Hilden",
            },
          ],
          links: [
            {
              label: "Telefon",
              text: "+49 (0) 151 16773509",
              url: "tel:+4915116773509",
            },
            {
              label: "E-Mail",
              text: "fabianlessmann@cineeagle.com",
              url: "mailto:fabianlessmann@cineeagle.com",
            },
          ],
        },
        {
          texts: [
            "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.",
          ],
        },
      ],
    },
    {
      title: "Speicherdauer",
      paragraphs: [
        {
          texts: [
            "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.",
            "Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen).",
            "Im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.",
          ],
        },
      ],
    },
    {
      title:
        "Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website",
      paragraphs: [
        {
          texts: [
            "Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden.",
            "Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.",
            "Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.",
            "Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
            "Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.",
            "Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.",
            "Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.",
          ],
        },
      ],
    },
    {
      title: "Empfänger von personenbezogenen Daten",
      paragraphs: [
        {
          texts: [
            "Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.",
            "Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt.",
            "Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter.",
            "Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.",
          ],
        },
      ],
    },
    {
      title: "Widerruf Ihrer Einwilligung zur Datenverarbeitung",
      paragraphs: [
        {
          texts: [
            "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.",
            "Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.",
            "Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.",
          ],
        },
      ],
    },
    {
      title:
        "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)",
      paragraphs: [
        {
          texts: [
            "WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN.",
            "DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING.",
            "DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.",
            "WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN.",
          ],
        },
      ],
    },
    {
      title: "SSL- bzw. TLS-Verschlüsselung",
      paragraphs: [
        {
          texts: [
            "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.",
            "Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
            "Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
          ],
        },
      ],
    },
    {
      title: "Widerspruch gegen Werbe-E-Mails",
      paragraphs: [
        {
          texts: [
            "Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.",
            "Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.",
          ],
        },
      ],
    },
  ],
};

const dataCollectionArticle: Article = {
  title: "Datenerfassung auf dieser Website",
  sections: [
    {
      title: "Cookies",
      paragraphs: [
        {
          texts: [
            "Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.",
            "Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.",
            "Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.",
            "Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies).",
            "Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).",
          ],
        },
        {
          texts: [
            "Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos).",
            "Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.",
          ],
        },
        {
          texts: [
            "Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.",
            "Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.",
            "Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.",
          ],
        },
        {
          texts: [
            "Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.",
            "Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.",
          ],
        },
        {
          texts: [
            "Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.",
          ],
        },
      ],
    },
    {
      title: "Kontaktformular",
      paragraphs: [
        {
          texts: [
            "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.",
            "Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
          ],
        },
        {
          texts: [
            "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.",
            "In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.",
          ],
        },
        {
          texts: [
            "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).",
            "Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
          ],
        },
      ],
    },
    {
      title: "Anfrage per E-Mail, Telefon oder Telefax",
      paragraphs: [
        {
          texts: [
            "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.",
            "Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
          ],
        },
        {
          texts: [
            "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.",
            "In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.",
          ],
        },
        {
          texts: [
            "Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).",
            "Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.",
          ],
        },
      ],
    },
  ],
};

const pluginsAndToolsArticle: Article = {
  title: "Plugins und Tools",
  sections: [
    {
      title: "YouTube",
      paragraphs: [
        {
          texts: [
            "Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.",
            "Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.",
          ],
        },
        {
          texts: [
            "Des Weiteren kann YouTube verschiedene Cookies auf Ihrem Endgerät speichern oder vergleichbare Technologien zur Wiedererkennung verwenden (z. B. Device-Fingerprinting).",
            "Auf diese Weise kann YouTube Informationen über Besucher dieser Website erhalten.",
            "Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen.",
            "Des Weiteren werden die erfassten Daten im Google-Werbenetzwerk verarbeitet.",
          ],
        },
        {
          texts: [
            "Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen.",
            "Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.",
          ],
        },
        {
          texts: [
            "Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote.",
            "Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.",
            "Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst.",
            "Die Einwilligung ist jederzeit widerrufbar.",
          ],
        },
        {
          texts: [
            "Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube.",
          ],
          links: [
            {
              label: "YouTube Datenschutzerklärung",
              text: "https://policies.google.com/privacy?hl=de",
              url: "https://policies.google.com/privacy?hl=de",
            },
          ],
        },
        {
          texts: [
            "Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF).",
            "Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll.",
            "Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten.",
          ],
          links: [
            {
              label: "EU-US Data Privacy Framework",
              text: "https://www.dataprivacyframework.gov/participant/5780",
              url: "https://www.dataprivacyframework.gov/participant/5780",
            },
          ],
        },
      ],
    },
    {
      title: "Google Fonts (lokales Hosting)",
      paragraphs: [
        {
          texts: [
            "Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden.",
            "Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.",
          ],
        },
        {
          texts: [
            "Weitere Informationen zu Google Fonts finden Sie in der Datenschutzerklärung von Google.",
          ],
          links: [
            {
              label: "Google Fonts FAQ",
              text: "https://developers.google.com/fonts/faq",
              url: "https://developers.google.com/fonts/faq",
            },
            {
              label: "Google Datenschutzerklärung",
              text: "https://policies.google.com/privacy?hl=de",
              url: "https://policies.google.com/privacy?hl=de",
            },
          ],
        },
      ],
    },
    {
      title: "Font Awesome (lokales Hosting)",
      paragraphs: [
        {
          texts: [
            "Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Font Awesome.",
            "Font Awesome ist lokal installiert. Eine Verbindung zu Servern von Fonticons, Inc. findet dabei nicht statt.",
          ],
        },
        {
          texts: [
            "Weitere Informationen zu Font Awesome finden Sie in der Datenschutzerklärung von Font Awesome.",
          ],
          links: [
            {
              label: "Font Awesome Datenschutzerklärung",
              text: "https://fontawesome.com/privacy",
              url: "https://fontawesome.com/privacy",
            },
          ],
        },
      ],
    },
    {
      title: "Quelle",
      paragraphs: [
        {
          texts: [
            "Diese Datenschutzerklärung wurde erstellt mit Hilfe von e-recht24.de.",
          ],
          links: [
            {
              label: "e-recht24",
              text: "https://www.e-recht24.de",
              url: "https://www.e-recht24.de",
            },
          ],
        },
      ],
    },
  ],
};

export const privacyPolicy: PrivacyPolicy = {
  title: "Datenschutzerklärung",
  articles: [
    firstArticle,
    hostingArticle,
    generalInfoArticle,
    dataCollectionArticle,
    pluginsAndToolsArticle,
  ],
};
