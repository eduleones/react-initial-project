import React from 'react'

const Contacts = ({ contacts }) => {
    return (
        <div className="App">

            <div className="App-list">
                <ul className="App-list__container">

                    {contacts.map((contact) => (
                        <li className="App-list__box">
                            <div className="App-list__persona">
                                <img className="App-list__image" src={contact.avatar} alt="imagen" />
                            </div>
                            <div className="App-list__content">
                                <ul className="App-list__content-card">
                                    <li className="App-list__content-informations">
                                        <span className="App-list__title">MARCA:</span>
                                        <span className="App-list__data">{contact.brand}</span>
                                    </li>
                                    <li className="App-list__content-informations">
                                        <span className="App-list__title">MODELO:</span>
                                        <span className="App-list__data">{contact.model}</span>
                                    </li>
                                    <li className="App-list__content-informations">
                                        <span className="App-list__title">PREÇO:</span>
                                        <span className="App-list__data">R$: {contact.price}</span>
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
