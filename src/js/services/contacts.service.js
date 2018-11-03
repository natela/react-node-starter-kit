export class ContactsService {

    static getContacts() {
        return window.fetch('/api/contacts', {})
            .then(data => data.json());
    }
}
