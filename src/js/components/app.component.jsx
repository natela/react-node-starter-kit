import * as React from 'react';

import {ContactsService} from "../services/contacts.service";
import {DateOfBirth} from "../helpers/dateofbirth.js";
import {updateContacts, selectContact} from "../state/actions";
import {store} from "../state/store.js"

export class AppComponent extends React.Component {

    componentDidMount() {
        ContactsService.getContacts()
            .then((data) => store.dispatch(updateContacts(data.data.contactList)));
    }

    contactClicked(index) {
        store.dispatch(selectContact(index));
        this._showElement(".details");
        this._showElement(".list-toggle");
        this._hideElement(".contacts-list");
    }

    render() {
        let {contacts, selectedContactIndex} = store.getState();
        let selectedContact = contacts[selectedContactIndex];
        return (
            <div className="container">
                <div className="left-col">
                    <div className="contacts">
                        <div className="headline">
                            Contact book
                        </div>
                        <div className="mobile contacts-list">
                            <ul>
                                {contacts.map((contact, i) => <li
                                    key={i}
                                    className={selectedContactIndex == i ? "active" : ""}
                                    onClick={() => this.contactClicked(i)}><span>{contact.name}</span></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <div className="list-toggle mobile"><span onClick={() => {
                        this._hideElement(".details");
                        this._hideElement(".list-toggle");
                        this._showElement(".contacts-list");
                    }}>&#9776;</span></div>
                    <div className="details mobile">
                        <div className="avatar">
                            <img src={selectedContact && selectedContact.gender == "m" ? "/img/male_avatar.svg" : "/img/female_avatar.svg"}></img>
                        </div>
                        <ul className="contact-details">
                            <li>{selectedContact ? selectedContact.name : ""}</li>
                            <li>{selectedContact ? selectedContact.phoneNumber : ""}</li>
                            <li>{selectedContact ? selectedContact.email : ""}</li>
                            <li>Date of Birth: {selectedContact ? new DateOfBirth(selectedContact.dateOfBirth).render() : ""}</li>
                        </ul>
                    </div>
                </div>
            </div>);
    }

    _showElement(selector, show=true) {
        document.querySelector(selector).classList.add(show ? "shown" : "hidden");
        document.querySelector(selector).classList.remove(show ? "hidden" : "shown");
    }

    _hideElement(selector, hide=true) {
        this._showElement(selector, !hide);
    }
}
