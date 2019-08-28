import uuidv1 from 'uuid/v1';

const existingCustomerId = '932bc00d-50c0-499d-a169-7667cf7c7bf1';
const existingCustomerPhoneNumber = '5551234567';
const existingCustomerPassword = 'quadpay';
const asyncDelayMs = 250;

/**
 * Return a promise to execute a preconfigured delay to simulate network call latency.
 */
function delay() {
    return new Promise(resolve => setTimeout(resolve, asyncDelayMs));
}

/**
 * This module simulates a real API.  Obviously, things are hardcoded in here and it's not actually contacting
 * a real API.  However, the methods are made asynchronous as if they are responding like legitimate services.
 * You should not edit this file at all, but feel free to review it to determine test cases and understand
 * API request expectations to use while completing the assignment.
 */
export default {
    /**
     * Retrieve the array of payment sources from the API for the specified customer ID.
     * If none are defined, an empty array is returned.
     */
    retrievePaymentSources: async (customerId) => {
        var toReturn = [];
        if (customerId == existingCustomerId) {
            toReturn = [
                {
                    id: 'e284dd5a-af2c-489c-bd36-2e1d01f45be0',
                    name: 'Aaron Rodgers',
                    type: 'credit',
                    lastFour: '4242',
                    brand: 'visa',
                },
                {
                    id: '04c49e8c-359c-43a5-b005-fb4e3f9e9ce3',
                    name: 'Aaron Rodgers',
                    type: 'debit',
                    lastFour: '1111',
                    brand: 'mastercard',
                },
            ];
        }

        await delay();
        return toReturn;
    },

    /**
     * Attempt to login the user with the specified credentials.  If they are valid, the user's
     * account will be returned.  If they are invalid (or the user does not exist), false will be returned.
     */
    login: async (username, password) => {
        var toReturn = false;
        if (username === existingCustomerPhoneNumber && password === existingCustomerPassword) {
            toReturn = {
                id: existingCustomerId,
                phoneNumber: existingCustomerPhoneNumber,
                firstName: 'Aaron',
                lastName: 'Rodgers',
                email: 'aaronrodgers@quadpay.com',
                billingAddress: {
                    line1: '1265 Lombardi Ave',
                    city: 'Green Bay',
                    state: 'WI',
                    postalCode: '54304',
                    country: 'USA',
                },
                shippingAddress: {
                    line1: '33 Irving Pl',
                    line2: 'Floor 10',
                    city: 'New York',
                    state: 'NY',
                    postalCode: '10003',
                    country: 'USA',
                },
            };
        }

        await delay();
        return toReturn;
    },

    /**
     * Completes the order with the specified order, customer, and payment source IDs.
     * Returns true if successful.  Throws an error if any of the parameters are invalid.
     */
    completeOrder: async (orderId, customerId, paymentSourceId) => {
        if (!orderId) {
            throw new Error('Cannot complete order without order ID');
        } else if (!customerId) {
            throw new Error('Cannot complete order without customer ID');
        } else if (!paymentSourceId) {
            throw new Error('Cannot complete order without payment source ID');
        }

        await delay();
        return true;
    },

    /**
     * Adds or updates the specified customer and returns the customer's ID if successful.
     */
    addOrUpdateCustomer: async (customer) => {
        if (!customer) {
            throw new Error('Cannot add undefined customer');
        } else if (!customer.phoneNumber || !customer.email || !customer.billingAddress || !customer.shippingAddress) {
            throw new Error('Cannot add invalid customer');
        }

        await delay();
        return uuidv1();
    },

    /**
     * Adds the specified card as a payment source and returns the unique ID of that payment source.
     */
    addPaymentSource: async (card) => {
        if (!card) {
            throw new Error('Cannot add undefined card');
        } else if (!card.name) {
            throw new Error('Cannot add card with no cardholder name');
        } else if (!card.number) {
            throw new Error('Cannot add card with no number');
        } else if (!card.expiration) {
            throw new Error('Cannot add card with no expiration');
        } else if (!card.cvv) {
            throw new Error('Cannot add card with no CVV');
        }

        await delay();
        return uuidv1();
    },
};
