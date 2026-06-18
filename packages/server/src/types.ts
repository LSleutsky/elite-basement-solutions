export interface ContactPayload {
  firstName?: string;
  lastName?: string;
  spouseName?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  email?: string;
  phone?: string;
  service?: string;
  comments?: string;
}

export interface EmailMessage {
  subject: string;
  html: string;
}

/**
 * Transport-agnostic email sender.
 * Implementations decide the provider (Resend, Nodemailer/SMTP, etc.) and the from/to addresses.
 */
export interface EmailStrategy {
  send(message: EmailMessage): Promise<{ error?: unknown }>;
}

export interface ImageKitConfig {
  /** Top-level ImageKit folder, e.g. "elite-basement-solutions". */
  folder: string;
  /** Sub-folders rendered as gallery categories, e.g. ["waterproofing", "mold"]. */
  categories: string[];
}

export interface ServerConfig {
  imageKit: ImageKitConfig;
  /** Maps a contact-form service value to its human-readable label for the email body. */
  serviceLabels: Record<string, string>;
  email: EmailStrategy;
  /** Overrides the PORT env var when set. */
  port?: number;
}
