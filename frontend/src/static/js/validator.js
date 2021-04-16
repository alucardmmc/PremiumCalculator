// ---------------------------------------------------------
// Validations on the form
// ---------------------------------------------------------

// Sets the class of the form-control as error

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

// Sets the class of the form-control as success

const setSuccessFor = input => {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

// Checks if theres empty values

const checkEmpty = (input, message) => {
    const value = input.value.trim();

    if (value === '') {
        setErrorFor(input, message);
    } else {
        setSuccessFor(input);
    }

    if (value === '') {
        return false;
    } else {
        return true;
    }
}

// Exporting

export { checkEmpty };
