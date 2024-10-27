import React from "react";

const Reveal = () => {
  return (
    <div>
      <div className="ui fade reveal">
        <div className="visible content">
          <img src="../assets/notfound.jpeg" className="ui small image" />
        </div>
        <div className="hidden content">
          <img src="../assets/react.svg" className="ui small image" />
        </div>
      </div>
      <div className="ui move reveal">
        <div className="visible content">
          <img src="../assets/notfound.jpeg" className="ui small image" />
        </div>
        <div className="hidden content">
          <img src="../assets/react.svg" className="ui small image" />
        </div>
      </div>
      <div className="ui move up reveal">
  <div className="visible content">
    <img src="../assets/notfound.jpeg" className="ui small image"/>
  </div>
  <div className="hidden content">
    <img src="../assets/react.svg" className="ui small image"/>
  </div>
</div>
    </div>
  );
};

export default Reveal;
