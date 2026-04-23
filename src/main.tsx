import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// fontes hospedadas localmente — elimina dependência do Google Fonts
import '@fontsource-variable/inter/index.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/500.css'
import '@fontsource/playfair-display/500-italic.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/600-italic.css'
import '@fontsource/playfair-display/700.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
