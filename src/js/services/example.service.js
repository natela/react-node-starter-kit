export class ExampleService {

    static getContacts() {
        return window.fetch('/api/contacts', {})
            .then(data => data.json());
    }
}
