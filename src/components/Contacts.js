import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacts = (props) => {
  return(
    <div className="contacts">
      <div className="contacts-header">
        <span>Contact</span> List
      </div>
      <div id="cards">
        <div className="card">
          <div className="card-header">
            <div className="contact-name truncate">Akash Kumar Seth fdghfdgfghfgndgfgdfg</div>
            <div className="card-actions">
              <div><FontAwesomeIcon icon="edit"/></div>
              <div><FontAwesomeIcon icon="trash" color="red"/></div>
            </div>
          </div>
          <div className="contact-email">
            <span>Email : </span>
            <div className="truncate">vks18765@gmail.comdfgdfgdgfgfhghrtttr</div>
          </div>
          <div className="contact-mobileNumber"><span>Mobile : +91</span>7408100293</div>
        </div>
      </div>
    </div>
  )
};

export default Contacts;