import React from 'react'

const Contacts = ({ contacts, users, userId }) => {
    return (
        <div className="App">

            <div className="App-list">
                <ul className="App-list__container">

                    {contacts.map((contact) => (
                        <li className="App-list__box" key={`list${contact.id}`}>
                            <div className="App-list__persona">
                                <img className="App-list__image" src={contact.avatar} alt="imagen" />
                            </div>
                            <div className="App-list__content">
                                <ul className="App-list__content-card">
                                    <li className="App-list__content-informations">
                                        <span className="App-list__title">Nome:</span>
                                        <span className="App-list__data">{contact.first_name}</span>
                                    </li>
                                    <li className="App-list__content-informations">
                                        <span className="App-list__title">Sobrenome:</span>
                                        <span className="App-list__data">{contact.last_name}</span>
                                    </li>
                                    {/* <li className="App-list__content-informations">
                                        <span className="App-list__title">Email:</span>
                                        <span className="App-list__data">{contact.email}</span>
                                    </li> */}
                                    <li>
                                        <button onClick={() => users(contact.id)}>Ver Email</button>
                                        {
                                            contact.id === userId.id  
                                            ?   <li className="App-list__content-informations">
                                                    <span className="App-list__title">Email:</span>
                                                    <span className="App-list__data">{userId.email}</span>
                                                </li>
                                            : null 
                                        }
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )
};

export default Contacts
