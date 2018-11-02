export const CONTACT_DETAILS = "CONTACT_DETAILS"

export function contactDetails(data) {
    return {
        type: CONTACT_DETAILS,
        details: data
    }
}
