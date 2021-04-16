// ---------------------------------------------------------
// Importing
// ---------------------------------------------------------

import { dateBlurEvent, premiumChangeEvent, 
         freqChangeEvent, formSubmitEvent } from './js/events.js';
import { Toast } from './js/toast.js';

// ---------------------------------------------------------
// Getting Elements by Id
// ---------------------------------------------------------

// Getting all elements from form
const form = document.getElementById('form');
const dateOfBirth = document.getElementById('dateOfBirth');
const state = document.getElementById('state');
const age = document.getElementById('age');

// Getting all elements from results
const premium = document.getElementById('premium');
const freq = document.getElementById('freq');
const annual = document.getElementById('annual');
const monthly = document.getElementById('monthly');

// ---------------------------------------------------------
// Minor Settings
// ---------------------------------------------------------

// Set Date Field max value to today
dateOfBirth.max = new Date().toISOString().split("T")[0];

// ---------------------------------------------------------
// Event Listeners
// ---------------------------------------------------------

// Adding toast box in the HTML
document.addEventListener('DOMContentLoaded', () => Toast.init());

// Set the value of 'Age' when 'Date' loses focus
dateOfBirth.addEventListener('blur', dateBlurEvent, false);

// Resets value of 'Annual', 'Monthly', 'Freq' when 'Premium' changes
premium.addEventListener('change', premiumChangeEvent, false);

// Set the value of 'Annual' and 'Monthly' when 'Freq' changes
freq.addEventListener('change', freqChangeEvent, false);

// Handles the 'submit' event of the form
form.addEventListener('submit', formSubmitEvent, false);