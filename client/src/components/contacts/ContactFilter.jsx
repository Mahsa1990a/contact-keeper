import React, { useContext, useRef } from 'react'; //useRef is a hook
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {

  const contactContext = useContext(ContactContext);

  const text = useRef(''); //initialize ref value

  const onChange = (e) => {
    // we can get the actual value by input:
    text.current.value
  };

  return (
    <form>
      <input ref={text} type="text" placeholder="Filter Contacts ..." onChange={onChange} />
    </form>
  )
}

export default ContactFilter;
