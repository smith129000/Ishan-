import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/reservations", (req, res) => {
    const { name, email, date, time, guests, notes } = req.body;
    console.log("New Reservation:", { name, email, date, time, guests, notes });
    
    // In a real app, we'd save to a database.
    // For now, we'll just return success.
    res.status(201).json({ 
      message: "Reservation received successfully!",
      reservation: { name, date, time, guests }
    });
  });

  app.post("/api/inquiries", (req, res) => {
    const { name, email, message } = req.body;
    console.log("New Inquiry:", { name, email, message });
    res.status(201).json({ message: "Inquiry sent successfully!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
