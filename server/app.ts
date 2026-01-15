import "react-router";
import { createRequestHandler } from "@react-router/express";
import express from "express";
import { Resend } from "resend";

declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_EXPRESS: string;
  }
}

export const app = express();

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      spouseName,
      streetAddress,
      city,
      state,
      zipCode,
      email,
      phone,
      service,
      comments
    } = req.body;

    if (!firstName || !lastName || !streetAddress || !city || !state || !zipCode || !phone) {
      res.status(400).json({ error: "Missing required fields" });

      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const serviceMap: Record<string, string> = {
      waterproofing: "Waterproofing",
      "mold-remediation": "Mold Remediation",
      "basement-renovations": "Basement Renovations",
      other: "Other"
    };

    const serviceName = serviceMap[service as string] || "Not specified";

    const { error } = await resend.emails.send({
      from: "Elite Basement Solutions <contact@elitebasementsolutions.com>",
      to: ["elitebasementsolutionsinc@gmail.com"],
      subject: "CONTACT FORM SUBMISSION",
      html: `
        <h2>Contact Information</h2>

        <p><strong>Name:</strong> ${firstName}${spouseName ? ` & ${spouseName}` : ""} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>

        <h2>Address</h2>
        <p>${streetAddress}<br>${city}, ${state} ${zipCode}</p>

        <h2>Service Requested</h2>
        <p>${serviceName}</p>

        ${comments ? `<h3>Additional Comments</h3><p>${comments}</p>` : ""}
      `
    });

    if (error) {
      console.error("Resend error:", error);

      res.status(500).json({ error: "Failed to send email" });

      return;
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({ error: "Internal server error" });
  }
});

app.use(
  createRequestHandler({
    build: () => import("virtual:react-router/server-build"),
    getLoadContext() {
      return {
        VALUE_FROM_EXPRESS: "Hello from Express"
      };
    }
  })
);
