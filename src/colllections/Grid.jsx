import React from "react";

const Grid = () => {
  return (
    <div>
      <div className="ui grid">
        <div className="four wide column"></div>
        <div className="four wide column"></div>
        <div className="four wide column"></div>
        <div className="four wide column"></div>
      </div>
      <div className="ui four column grid">
  <div className="row">
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
  </div>
  <div className="column"></div>
  <div className="column"></div>
  <div className="column"></div>
  <div className="column"></div>
</div>
<div className="ui grid">
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
</div>
<div className="ui grid">
  <div className="three column row">
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
  </div>
  <div className="eight column row">
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
  </div>
</div>
<div className="ui relaxed grid">
  <div className="three column row">
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
  </div>
  <div className="eight column row">
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
  </div>
</div>
<div className="ui three column grid">
  <div className="column">
    <div className="ui segment">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </div>
  <div className="column">
    <div className="ui segment">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </div>
  <div className="column">
    <div className="ui segment">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </div>
</div>
    </div>
  );
};

export default Grid;
