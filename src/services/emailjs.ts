import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const isEmailConfigured = () =>
  Boolean(
    SERVICE_ID &&
      TEMPLATE_ID &&
      PUBLIC_KEY &&
      !SERVICE_ID.startsWith("your_") &&
      !TEMPLATE_ID.startsWith("your_") &&
      !PUBLIC_KEY.startsWith("your_")
  );

/**
 * Send the contact form via EmailJS. Throws if the service is not configured
 * so the caller can show a helpful message and offer the mailto fallback.
 */
export async function sendContactEmail(payload: ContactPayload) {
  if (!isEmailConfigured()) {
    throw new Error("EMAIL_NOT_CONFIGURED");
  }
  return emailjs.send(
    SERVICE_ID!,
    TEMPLATE_ID!,
    {
      from_name: payload.name,
      reply_to: payload.email,
      subject: payload.subject,
      message: payload.message,
    },
    { publicKey: PUBLIC_KEY! }
  );
}
