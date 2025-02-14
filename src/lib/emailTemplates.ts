export const generateInternalEmail = (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  return `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #497D74; text-align: center;">Neue Kontaktanfrage</h2>
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Betreff:</strong> ${subject}</p>
          <p><strong>Nachricht:</strong></p>
          <blockquote style="border-left: 4px solid #497D74; padding-left: 10px; color: #555;">${message}</blockquote>
  
          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #888;">
            Diese Nachricht wurde über das Kontaktformular auf <a href="https://cineeagle.com" style="color: #497D74;">cineeagle.com</a> gesendet.
          </p>
        </div>
      </div>
    `;
};

export const generateUserConfirmationEmail = (
  name: string,
  message: string
) => {
  return `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #497D74; text-align: center;">Bestätigung Ihrer Anfrage</h2>
          
          <p>Hallo ${name},</p>
          <p>vielen Dank für Ihre Anfrage! Ich werde mich so schnell wie möglich bei Ihnen melden.</p>

          <p><strong>Ihre Nachricht:</strong></p>
          <blockquote style="border-left: 4px solid #497D74; padding-left: 10px; color: #555;">${message}</blockquote>
  
          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #888;">
            Diese Nachricht wurde über das Kontaktformular auf <a href="https://cineeagle.com" style="color: #497D74;">cineeagle.com</a> gesendet. Falls Sie diese Nachricht fälschlicherweise erhalten haben, ignorieren Sie diese bitte.
          </p>
          <p style="font-size: 12px; color: #888;">
            © ${new Date().getFullYear()} CineEagle – Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    `;
};
