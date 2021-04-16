// ---------------------------------------------------------
// API Handler
// ---------------------------------------------------------

// Import:
import { renderResponse } from './helper.js';
import { Toast } from './toast.js';

// Sets Results Premium Value when API Call works!

const showPremium = async () => {

    const bt = document.getElementById('subBt');

    bt.disabled = true;

    const data = JSON.stringify({
        birthDate: dateOfBirth.value,
        state: state.value,
        age: age.value
    });
      
    try {
        const response = await fetch('https://localhost:44381/api/Premium', {
            method: 'POST',
            body: data,
            headers: {
              'Content-type': 'application/json'
            }
          });
      
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log('Error: ' + error);

        Toast.show('Oops! An error has occurred retrieving the Premium Value!', 'error');
    }

    bt.disabled = false;
};

export { showPremium };