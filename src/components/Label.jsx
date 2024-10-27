import React from "react";

const Label = () => {
  return (
    <div>
      <div className="ui label">
        <i className="mail icon"></i> 23
        <a className="ui image label">
          <img src="../assets/react.svg" />
          Joe
        </a>
        <a className="ui image label">
          <img src="../assets/react.svg" />
          Elliot
        </a>
        <a className="ui image label">
          <img src="../assets/react.svg" />
          Stevie
        </a>
      </div>
      <div className="ui two column grid">
        <div className="column">
          <div className="ui fluid image">
            <a className="ui left corner label">
              <i className="heart icon"></i>
            </a>
            <img src="../assets/react.svg" />
          </div>
        </div>
        <div className="column">
          <div className="ui fluid image">
            <a className="ui red right corner label">
              <i className="save icon"></i>
            </a>
            <img src="../assets/react.svg" />
          </div>
        </div>
      </div>
      <form className="ui fluid form">
        <div className="field">
          <input type="text" placeholder="First name" />
          <div className="ui pointing label">Please enter a value</div>
        </div>
      </form>
      <div className="ui list">
        <div className="item">Apples</div>
        <div className="item">Pears</div>
        <div className="item">Oranges</div>
      </div>
      <div className="ui list">
        <div className="item">
          <i className="users icon"></i>
          <div className="content">Semantic UI</div>
        </div>
        <div className="item">
          <i className="marker icon"></i>
          <div className="content">New York, NY</div>
        </div>
        <div className="item">
          <i className="mail icon"></i>
          <div className="content">
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          </div>
        </div>
        <div className="item">
          <i className="linkify icon"></i>
          <div className="content">
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </div>
        </div>
      </div>
      <div className="ui bulleted list">
        <div className="item">Gaining Access</div>
        <div className="item">Inviting Friends</div>
        <div className="item">
          <div>Benefits</div>
          <div className="list">
            <a className="item" href="#">
              Link to somewhere
            </a>
            <div className="item">Rebates</div>
            <div className="item">Discounts</div>
          </div>
        </div>
        <div className="item">Warranty</div>
      </div>
      <div className="ui ordered list">
        <a className="item">Getting Started</a>
        <a className="item">Introduction</a>
        <div className="item">
          <a>Languages</a>
          <div className="list">
            <a className="item">HTML</a>
            <a className="item">Javascript</a>
            <a className="item">CSS</a>
          </div>
        </div>
        <a className="item">Review</a>
      </div>
      <div className="ui middle aligned divided list">
  <div className="item">
    <img className="ui avatar image" src="../assets/react.svg"/>
    <div className="content">
      <a className="header">Daniel Louise</a>
    </div>
  </div>
  <div className="item">
    <img className="ui avatar image" src="../assets/react.svg"/>
    <div className="content">
      <a className="header">Stevie Feliciano</a>
    </div>
  </div>
  <div className="item">
    <img className="ui avatar image" src="../assets/react.svg"/>
    <div className="content">
      <a className="header">Elliot Fu</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Label;
