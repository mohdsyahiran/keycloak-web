// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080',
  realm: 'test',
  clientId: 'webAppB',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
