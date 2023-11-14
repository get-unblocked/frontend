//this is the ux to show the user the data they have stored in the app
//this calls the backend via the api routes to get the data

import React, { useEffect, useState } from "https://esm.sh/react";
import StorageData from '../components/StorageData.tsx';

const Storage = () => {
  const [storageData, setStorageData] = useState([]);

  useEffect(() => {
    const getStorageData = async () => {
      const response = await fetch("https://tryunblocked.com/api/storage");
      const data = await response.json();
      setStorageData(data);
    };

    getStorageData();
  }, []);

  return (
    <div>
      <h1>Storage Data</h1>
      {storageData.map((item, index) => (
        <StorageData key={index} data={item} />
      ))}
    </div>
  );
};

export default Storage;