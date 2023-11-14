//this is the ux to show the user notifications
//this calls the backend via the api routes to get the notifications
import React, { useEffect, useState } from "https://esm.sh/react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      const response = await fetch("https://tryunblocked.com/api/notifications");
      const data = await response.json();
      setNotifications(data);
    };

    getNotifications();
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      {notifications.map((notification, index) => (
        <div key={index}>
          <h2>{notification.title}</h2>
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;