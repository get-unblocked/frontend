import React from "https://esm.sh/react";

const StorageData = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default StorageData;