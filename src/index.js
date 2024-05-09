import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import App from './App';
import keycloakInst from './components/keycloak'; // Assuming keycloak is set up there
import { ReactKeycloakProvider } from '@react-keycloak/web';

const initOptions = { onLoad: 'login-required' };

const root = createRoot(document.getElementById('root')); // Create a root element

root.render(
  <ReactKeycloakProvider authClient={keycloakInst} initOptions={initOptions}>
    <App />
  </ReactKeycloakProvider>
);
