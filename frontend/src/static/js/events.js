// ---------------------------------------------------------
// Event Functions
// ---------------------------------------------------------

// Import:
import { checkEmpty } from './validator.js';
import { getAge, calculateAnnually, calculateMonthly } from './helper.js';
import { showPremium } from './apiHandler.js';

// id: dateOfBirth
// event: blur
// desc: Set the value of 'Age' when 'Date' loses focus

const dateBlurEvent = (e) => {

    e.preventDefault();

    const value = getAge(e.target.value);

    if (Number.isNaN(value)) {
        age.value = '';
    } else {
        age.value = value;
    }
};

// id: premium
// event: change
// Resets value of 'Annual', 'Monthly', 'Freq' when 'Premium' changes

const premiumChangeEvent = (e) => {

    e.preventDefault();

    freq.value = '';
    annual.value = '';
    monthly.value = '';

};

// id: freq
// event: change
// Set the value of 'Annual' and 'Monthly' when 'Freq' changes

const freqChangeEvent = (e) => {
    e.preventDefault();

    const value = e.target.value;

    if (value && premium.value) {
        annual.value = calculateAnnually(value, premium.value).toFixed(2);
        monthly.value = calculateMonthly(value, premium.value).toFixed(2);
    } else {
        annual.value = '';
        monthly.value = '';
    }
};

// id: form
// event: submit
// Set the value of 'Annual' and 'Monthly' when 'Freq' changes
const formSubmitEvent = (e) => {
    e.preventDefault();

    // Empty Values Check
    const dateCheck = checkEmpty(dateOfBirth, 'Date of Birth cannot be blank');
    const stateCheck = checkEmpty(state, 'State cannot be blank');
    const ageCheck = checkEmpty(age, 'Age cannot be blank');

    if ((dateCheck && stateCheck && ageCheck) === false) {
        return false;
    }
    
    showPremium();
};

export { dateBlurEvent, premiumChangeEvent, freqChangeEvent, formSubmitEvent };