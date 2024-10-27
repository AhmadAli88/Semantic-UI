import React from 'react'

const Message = () => {
  return (
    <div>
        <div className="ui message">
  <div className="header">
    New Site Features
  </div>
  <ul className="list">
    <li>You can now have cover images on blog pages</li>
    <li>Drafts will now auto-save while writing</li>
  </ul>
</div>
<div className="ui message">
  <div className="header">
    Changes in Service
  </div>
  <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
</div>
<div className="ui icon message">
  <i className="notched circle loading icon"></i>
  <div className="content">
    <div className="header">
      Just one second
    </div>
    <p>We're fetching that content for you.</p>
  </div>
</div>
    </div>
  )
}

export default Message