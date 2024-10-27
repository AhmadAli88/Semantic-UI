import React from "react";

const Image = () => {
  return (
    <div>
      <div className="ui small image">
        <img src="../assets/react.svg" />
      </div>
      <img className="ui avatar image" src="../assets/react.svg" />
      <span>Username</span>
      <img className="ui medium circular image" src="../assets/react.svg"></img>

      <img
        className="ui medium rounded image"
        src="/images/wireframe/square-image.png"
      ></img>
      <img
        className="ui medium bordered image"
        src="/images/wireframe/white-image.png"
      ></img>
      <div className="ui segment">
        <img className="ui centered medium image" src="../assets/react.svg" />
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
          alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
        <p>
          Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
          definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
          te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
          vide phaedrum, vim vivendum maiestatis in.
        </p>
      </div>
      <img className="ui mini image" src="../assets/react.svg" />
      <img className="ui tiny image" src="../assets/react.svg" />
      <img className="ui small image" src="../assets/react.svg" />
      <img className="ui medium image" src="../assets/react.svg" />
      <img className="ui large image" src="../assets/react.svg" />
      <img className="ui big image" src="../assets/react.svg" />
      <img className="ui huge image" src="../assets/react.svg"></img>
    </div>
  );
};

export default Image;
