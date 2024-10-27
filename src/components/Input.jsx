import React from "react";

const Input = () => {
  return (
    <div>
      <div className="ui input">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="ui input focus">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="ui left icon input loading">
        <input type="text" placeholder="Search..." />
        <i className="search icon"></i>
      </div>
      <div className="ui icon input">
        <input type="text" placeholder="Search..." />
        <i className="search icon"></i>
      </div>
      <div className="ui transparent input">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="ui mini icon input">
        <input type="text" placeholder="Search mini..." />
        <i className="search icon"></i>
      </div>
      <div className="ui small icon input">
        <input type="text" placeholder="Search small..." />
        <i className="search icon"></i>
      </div>
      <div className="ui large icon input">
        <input type="text" placeholder="Search large..." />
        <i className="search icon"></i>
      </div>
      <div className="ui large icon input">
        <input type="text" placeholder="Search large..." />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default Input;
