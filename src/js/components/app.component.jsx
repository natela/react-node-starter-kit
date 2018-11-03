import * as React from 'react';

import {ContactsService} from "../services/contacts.service";
import {DateOfBirth} from "../services/dateofbirth.js";
import {updateContacts, selectContact} from "../state/actions";
import {store} from "../state/store.js"

export class AppComponent extends React.Component {

    componentDidMount() {
        ContactsService.getContacts()
            .then((data) => store.dispatch(updateContacts(data.data.contactList)));
    }

    contactClicked(index) {
        store.dispatch(selectContact(index));
    }

    render() {
        let {contacts, selectedContactIndex} = store.getState();
        let selectedContact = contacts[selectedContactIndex];
        console.log(store.getState());
        return (
            <div className="container">
                <div className="left-col">
                    <div className="contacts">
                        <div className="headline">
                            Contact book
                        </div>
                        <div id="contacts">
                            <ul className="contacts-list">
                                {contacts.map((contact, i) => <li
                                    className={selectedContactIndex == i ? "active" : ""}
                                    onClick={() => this.contactClicked(i)}>{contact.name}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <div className="details">
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
}
