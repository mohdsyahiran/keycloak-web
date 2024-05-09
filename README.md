### `npm start`

Also update keycloak config in your keycloak.jsx file

### `How to setup Keycloak in docker`
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:24.0.4 start-dev