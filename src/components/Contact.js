import React from 'react';
import '../css/Contact.css'
function Contact({image, title, content, width, height}) {
  return (
    <div className="contact shadow p-3 bg-white rounded" style={{width, height}} >
      <div className="image-container">
       <img src={image} alt=""/>
      </div>
      <div>
      <h2>{title}</h2>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Contact;