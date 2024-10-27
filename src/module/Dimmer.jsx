import React from "react";

const Dimmer = () => {
  return (
    <div>
      <div className="ui segment">
        <h3 className="ui header">Overlayable Section</h3>
        <div className="ui small images">
          <img src="../assets/notfound.jpeg" />
          <img src="../assets/notfound.jpeg" />
          <img src="../assets/notfound.jpeg" />
        </div>
        <p></p>
      </div>
      <div className="ui segment">
        <h3 className="ui header">Overlayable Section</h3>
        <div className="ui small images">
          <img src="../assets/notfound.jpeg" />
          <img src="../assets/notfound.jpeg" />
          <img src="../assets/notfound.jpeg" />
        </div>
        <p></p>
        <div className="ui dimmer">
          <div className="content">
            <h2 className="ui inverted icon header">
              <i className="heart icon"></i>
              Dimmed Message!
            </h2>
          </div>
        </div>
      </div>
      <div className="ui page button">
        <i className="plus icon"></i>Show
      </div>
    </div>
  );
};

export default Dimmer;
