// ---------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------

// Import

import { Toast } from './toast.js';

// Gets the age according to the date string

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Calculates the Premium Value per Year

const calculateAnnually = (listValue, value) => {
    switch(listValue) {
        case 'M':
            return value * 12;
        case 'Q':
            return value * 4;
        case 'S':
            return value * 2;
        case 'A':
            return value * 1;
    }
};

// Calculates the Premium Value per Month

const calculateMonthly = (listValue, value) => {
    switch(listValue) {
        case 'M':
            return value / 1;
        case 'Q':
            return value / 3;
        case 'S':
            return value / 6
        case 'A':
            return value / 12;
    }
};

// Sets Results Premium Value when API Call works!
const renderResponse = (res) => {
    if(!res.errors){

        if (res.premium === '0.00') {
            
            premium.value = '';

            Toast.show('Parameters did not retrieve a Premium Value!', 'error');

        } else {

            premium.value = res.premium;

            Toast.show('Parameters retrieved a Premium Value!', 'success');
        }

        premium.dispatchEvent(new Event('change'));
    }
};

export { calculateAnnually, calculateMonthly,
         getAge, renderResponse };