import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

function Alerts() {

  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    // We want to check to see if there is any alerts in the arr
    alerts.length > 0 && alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`} >
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;