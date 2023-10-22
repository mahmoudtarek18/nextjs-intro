import React from "react";

const page = ({ params, searchParams }) => {
  return (
    <div>
      <h1>params {JSON.stringify(params)}</h1>
      <h1>searchParams {JSON.stringify(searchParams)}</h1>
    </div>
  );
};

export default page;
