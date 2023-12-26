

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


export const App = () => {
  
  return (
    <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 30,
            color: '#010101'
          }}
        >
        <div>
        <h1>Phonebook</h1>
        <ContactForm />
  
        <h2>Contacts</h2>
        <Filter />
        <ContactList  />
        </div>
        </div>
  )

};





