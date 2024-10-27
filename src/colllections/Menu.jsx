import React from "react";

const Menu = () => {
  return (
    <div>
      <div className="ui three item menu">
        <a className="active item">Editorials</a>
        <a className="item">Reviews</a>
        <a className="item">Upcoming Events</a>
      </div>
      <div className="ui secondary  menu">
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item">Logout</a>
        </div>
      </div>
      <div className="ui secondary pointing menu">
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
        <div className="right menu">
          <a className="ui item">Logout</a>
        </div>
      </div>
      <div className="ui segment">
        <p></p>
      </div>
      <div className="ui tabular menu">
  <a className="item active">
    Bio
  </a>
  <a className="item">
    Photos
  </a>
</div>
<div className="ui vertical menu">
  <a className="active teal item">
    Inbox
    <div className="ui teal left pointing label">1</div>
  </a>
  <a className="item">
    Spam
    <div className="ui label">51</div>
  </a>
  <a className="item">
    Updates
    <div className="ui label">1</div>
  </a>
  <div className="item">
    <div className="ui transparent icon input">
      <input type="text" placeholder="Search mail..."/>
      <i className="search icon"></i>
    </div>
  </div>
</div>
<div className="ui secondary vertical pointing menu">
  <a className="item">
    Home
  </a>
  <a className="item">
    Messages
  </a>
  <a className="item active">
    Friends
  </a>
</div>
<div className="ui pagination menu">
  <a className="item">
    1
  </a>
  <div className="disabled item">
    ...
  </div>
  <a className="item">
    10
  </a>
  <a className="item active">
    11
  </a>
  <a className="item">
    12
  </a>
</div>
    </div>
  );
};

export default Menu;
