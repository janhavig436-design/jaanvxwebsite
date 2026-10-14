import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : new GoogleGenAI();

// AI Style & Beauty Advisor endpoint
app.post('/api/ai-consult', async (req, res) => {
  try {
    const { prompt, mode } = req.body; // mode: 'style', 'skincare', 'outfit'
    
    let systemInstruction = "You are an elite, sophisticated fashion editor, luxury stylist, and master esthetician at Vogue & Velvet magazine. Provide refined, chic, expert advice with an elegant, encouraging tone.";
    
    if (mode === 'skincare') {
      systemInstruction += " Focus on clean beauty, barrier health, active ingredients (hyaluronic acid, niacinamide, bakuchiol), and glowing radiant skin rituals.";
    } else if (mode === 'outfit') {
      systemInstruction += " Focus on capsule wardrobes, quiet luxury, color theory, texture pairing (cashmere, silk, wool), and Parisian elegance.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ result: response.text });
  } catch (error: any) {
    console.error('AI Consult Error:', error);
    res.status(500).json({ error: error.message || 'Failed to generate AI consultation.' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
