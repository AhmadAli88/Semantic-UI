import React from "react";

const MyButton = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <button classNameName="ui button">Follow</button>
      <button classNameName="ui primary button">Save</button>
      <button classNameName="ui button">Discard</button>
      <button classNameName="ui secondary button">Okay</button>
      <button classNameName="ui icon button">
        <i classNameName="cloud icon"></i>
      </button>
      <button classNameName="ui basic button">
        <i classNameName="icon user"></i>
        Add Friend
      </button>
      <button classNameName="ui primary basic button">Primary</button>
      <button classNameName="ui secondary basic button">Secondary</button>
      <button classNameName="ui positive basic button">Positive</button>
      <button classNameName="ui negative basic button">Negative</button>
      <button className="ui disabled button">
        <i className="user icon"></i>
        Followed
      </button>
      <button className="ui primary loading button">Loading</button>
      <button className="small ui button">Small</button>
      <button className="ui teal button">Teal</button>
      <button className="circular ui icon button">
        <i className="icon settings"></i>
      </button>
    </div>
  );
};

export default MyButton;
