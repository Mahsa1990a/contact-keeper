import React from 'react';

const ContactItem = ({ contact }) => {

  const { id, name, email, phone, type } = contact;

  return (
    <div className='card bg-light'>
      <h3 className="text-primary text-left">
        {name}{' '} 
        <span style={{ float: 'right' }} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
          {/* It mmeans do first letter Upercase and the rest keep regular: */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {/* If there is email ... */}
        {email && (<li>
          <i className="fas fa-envelope-open"></i> {email}
        </li>)}
        {phone && (<li>
          <i className="fas fa-phone"></i> {phone}
        </li>)}
      </ul>
    </div>
  )
}

export default ContactItem;
