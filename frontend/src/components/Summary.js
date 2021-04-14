import React from "react";

function Summary({ barber, service, appointment }) {
  // add next informations

  return (
    <div>
      <h1>Service</h1>
      <p>{barber.nickname}</p>
    </div>
  );
}

export default Summary;
