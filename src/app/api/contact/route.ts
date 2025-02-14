import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  generateInternalEmail,
  generateUserConfirmationEmail,
} from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({
        success: false,
        message: "Alle Felder sind erforderlich.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // Muss false sein für STARTTLS
      auth: {
        user: process.env.GODADDY_EMAIL_USER, // Deine Microsoft 365 E-Mail
        pass: process.env.GODADDY_EMAIL_PASS, // App-Passwort falls 2FA aktiv
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // **1️⃣ Interne E-Mail an dich senden**
    const internalMailOptions = {
      from: "fabianlessmann@cineeagle.com",
      replyTo: email,
      to: "fabianlessmann@cineeagle.com",
      subject: `Neue Kontaktanfrage: ${subject}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
      html: generateInternalEmail(name, email, subject, message),
    };

    const internalMailResponse = await transporter.sendMail(
      internalMailOptions
    );

    // **2️⃣ Wenn interne E-Mail erfolgreich, sende die Bestätigung an den Nutzer**
    if (internalMailResponse.accepted.length > 0) {
      const userMailOptions = {
        from: "fabianlessmann@cineeagle.com",
        to: email, // An den Nutzer
        subject: "Bestätigung Ihrer Anfrage – CineEagle",
        text: `Hallo ${name},\nvielen Dank für Ihre Anfrage! Ich werde mich so schnell wie möglich bei Ihnen melden.\n\nFalls Sie diese Anfrage nicht gestellt haben, ignorieren Sie diese E-Mail bitte.`,
        html: generateUserConfirmationEmail(name, message),
      };

      await transporter.sendMail(userMailOptions);
    }

    return NextResponse.json({
      success: true,
      message: "E-Mails erfolgreich gesendet!",
    });
  } catch (error) {
    console.error("Fehler beim E-Mail-Versand:", error);
    return NextResponse.json({
      success: false,
      message: "Fehler beim Senden der E-Mails.",
    });
  }
}
