import nodemailer from "nodemailer";

import { EmailStrategy } from "@elite/server/types";

interface NodemailerOptions {
  from: string;
  to: string[];
}

/**
 * Nodemailer/SMTP email transport.
 *
 * @param from - The email sender for the contact form.
 * @param to - The email the contact form submission will go to.
 *
 * @returns {object} The email contact form submission details.
 */
export const nodemailerEmail = ({ from, to }: NodemailerOptions): EmailStrategy => ({
  async send({ subject, html }) {
    const host = process.env.SMTP_HOST;
    const port = Number.parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      return {
        error: new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.")
      };
    }

    try {
      const transport = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass }
      });

      await transport.sendMail({ from, to, subject, html });

      return {};
    } catch (error) {
      return { error };
    }
  }
});
