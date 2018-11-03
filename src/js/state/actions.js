export const SELECT_CONTACT  = "SELECT_CONTACT"
export const UPDATE_CONTACTS = "UPDATE_CONTACTS"

export function selectContact(index) {
    return {
        type: SELECT_CONTACT,
        index
    }
}

 export function updateContacts(contacts) {
     return {
         type: UPDATE_CONTACTS,
         contacts
     }
 }
