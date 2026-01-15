import compression from "compression";
import express from "express";
import morgan from "morgan";
import path from "path";
import { Resend } from "resend";

const DEVELOPMENT = process.env.NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || "3000");

const app = express();

app.use(compression());
app.disable("x-powered-by");
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

if (DEVELOPMENT) {
  console.log("Starting development server");

  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true }
    })
  );

  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule("./server/app.ts");
      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === "object" && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
} else {
  console.log("Starting production server");

  app.use(morgan("tiny"));
  app.use("/assets", express.static("build/client/assets", { immutable: true, maxAge: "1y" }));
  app.use(express.static("build/client", { maxAge: "1h" }));

  // SPA fallback - serve index.html for all non-API routes
  app.use((req, res) => {
    res.sendFile(path.join(process.cwd(), "build/client/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
