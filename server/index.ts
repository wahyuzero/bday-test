import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Helper to get __dirname in ES module environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the Express application
const app = express();

// Determine the path to the static files (frontend build output)
// In production (after esbuild), the 'public' directory will be relative to this file's location.
// In development, it's relative to the project root.
const staticPath = path.resolve(__dirname, "public");

// Serve static files from the determined path
app.use(express.static(staticPath));

// Handle client-side routing (SPA fallback) - serve index.html for all routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Export the app instance for Vercel/Serverless Function environment
// Vercel will handle the server listening internally.
export default app;

// For local development/testing (optional, but good practice to keep the original logic for local run)
if (process.env.NODE_ENV !== 'production' && process.env.VITE_DEV_SERVER !== 'true') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}