import React from "react";
function element({ image, name, }) {
    return (
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <p> {name} </p>
      </div>
    );
  }
export default element;