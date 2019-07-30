import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div className="App">

            <div className="App-list">
                <ul className="App-list__container">

                    {contacts.slice(0, 20).map((contact) => (
                        <li className="App-list__box">
                            <div className="App-list__persona">
                                <img className="App-list__image" src={contact.url} alt="teste"/>
                            </div>
                            <div className="App-list__content">                                
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{contact.title}</h5>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )
};

export default Contacts