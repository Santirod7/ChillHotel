import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GoogleOAuthProvider clientId="650752236712-h8fdclghsgpgols3afttpmoq419ljn11.apps.googleusercontent.com">
    <App />
      </GoogleOAuthProvider>
  </StrictMode>,
)
