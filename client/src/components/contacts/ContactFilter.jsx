import React, { useContext, useRef, useEffect } from 'react'; //useRef is a hook
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {

  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef(''); //initialize ref value

  // If filtered is equal to null, I want the value to be empty, don't want to keep text inside of it
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    // we can get the actual value by input: text.current.value
    if (text.current.value !== '') {
      filterContacts(e.target.value); //e.target.value => which is actual text
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input ref={text} type="text" placeholder="Filter Contacts ..." onChange={onChange} />
    </form>
  )
}

export default ContactFilter;
