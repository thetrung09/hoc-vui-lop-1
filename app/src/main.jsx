import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import './styles.css';
import App from './App.jsx';
import { loadAudio } from './lib/audio.js';

loadAudio().finally(() => {
  createRoot(document.getElementById('root')).render(<App />);
});
