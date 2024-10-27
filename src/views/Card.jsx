import React from 'react'

const Card = () => {
  return (
    <div><div class="ui card">
    <div class="image">
      <img src="../assets/react.svg"/>
    </div>
    <div class="content">
      <a class="header">Kristy</a>
      <div class="meta">
        <span class="date">Joined in 2013</span>
      </div>
      <div class="description">
        Kristy is an art director living in New York.
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        22 Friends
      </a>
    </div>
  </div>
  <div class="ui card">
  <div class="content">
    <div class="right floated meta">14h</div>
    <img class="ui avatar image" src="../assets/notfound.jpeg"/> Elliot
  </div>
  <div class="image">
    <img/>
  </div>
  <div class="content">
    <span class="right floated">
      <i class="heart outline like icon"></i>
      17 likes
    </span>
    <i class="comment icon"></i>
    3 comments
  </div>
  <div class="extra content">
    <div class="ui large transparent left icon input">
      <i class="heart outline icon"></i>
      <input type="text" placeholder="Add Comment..."/>
    </div>
  </div>
</div>
<div class="ui card">
  <div class="content">
    <div class="header">Project Timeline</div>
  </div>
  <div class="content">
    <h4 class="ui sub header">Activity</h4>
    <div class="ui small feed">
      <div class="event">
        <div class="content">
          <div class="summary">
             <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
          </div>
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
             <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
             <a>Helen Troy</a> added two pictures
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="extra content">
    <button class="ui button">Join Project</button>
  </div>
</div>
<div class="ui card">
  <div class="ui slide masked reveal image">
    <img src="../assets/notfound.jpeg" class="visible content"/>
    <img src="../assets/react.svg" class="hidden content"/>
  </div>
  <div class="content">
    <a class="header">Team Fu &amp; Hess</a>
    <div class="meta">
      <span class="date">Created in Sep 2014</span>
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="users icon"></i>
      2 Members
    </a>
  </div>
</div>
<div class="ui four cards">
  <a class="red card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="orange card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="yellow card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="olive card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="green card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="teal card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="blue card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="violet card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="purple card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="pink card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="brown card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="grey card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
  <a class="black card">
    <div class="image">
      <img src="../assets/notfound.jpeg"/>
    </div>
  </a>
</div>
  </div>
  )
}

export default Card