// components/Dashboard.js
import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Dashboard = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (keycloak.authenticated) {
    return (
      <div className="dashboard">
        <h1>Welcome to Web B</h1>
        <div className="summary">
          <div className="summary-item">
            <h5>Syahiran</h5>
            <p>Test</p>
          </div>
          
        </div>
       
      </div>
    );
  } else {
    keycloak.login();
    return <div>Redirecting to login...</div>;
  }
};

export default Dashboard;
