import * as React from 'react';

import {ExampleService} from "../services/example.service";
import {DateOfBirth} from "../services/dateofbirth.js";
import {contactDetails} from "../state/actions";
import {connect} from 'react-redux';


export class AppComponent extends React.Component {

    componentDidMount() {
        ExampleService.getContacts()
            .then((data) => {
                this.contacts = data.data.contactList;
                this.setState(this.contacts[0]);
                //store.dispatch(contactDetails(this.contacts[0]));
        });
    }

    contactClicked(contact) {
        this.setState(contact);
        //store.dispatch(contactDetails(contact));
    }

    render() {
        return (
            <div className="container">
                <div className="left-col">
                    <div className="contacts">
                        <div className="headline">
                            Contact book {/*}<span className="menu-item">&#9776;</span>*/}
                        </div>
                        <div id="contacts">
                            <ul className="contacts-list">
                                {this.contacts ? this.contacts.map(contact => <li
                                    className={this.state && this.state.name == contact.name ? "active" : ""}
                                    onClick={() => this.contactClicked(contact)}>{contact.name}</li>) : ""}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <div className="details">
                        <div className="avatar">
                            <img src={this.state && this.state.gender == "m" ? "/img/male_avatar.svg" : "/img/female_avatar.svg"}></img>
                        </div>
                        <ul className="contact-details">
                            <li>{this.state ? this.state.name : ""}</li>
                            <li>{this.state ? this.state.phoneNumber : ""}</li>
                            <li>{this.state ? this.state.email : ""}</li>
                            <li>Date of Birth: {this.state ? new DateOfBirth(this.state.dateOfBirth).render() : ""}</li>
                        </ul>
                    </div>
                </div>
            </div>);
    }
}
