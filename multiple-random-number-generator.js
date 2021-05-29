const mrngAllowNegativeNumbers = document.getElementById('mrng-allow-negative-numbers');
const mrngNumberOfRuns = document.getElementById('mrng-number-of-runs');
const mrngMinNumber = document.getElementById('mrng-min-number');
const mrngMaxNumber = document.getElementById('mrng-max-number');
const mrngRunButton = document.getElementById('mrng-run-button');
const mrngOutput = document.querySelector('.mrng-output');
const mrngNumberInputs = document.querySelectorAll('input[type=number]');

// Test Element Connection: 

// mrngOutput.textContent = "Test Successful, multiple-random-number-generator.js linked."
// mrngAllowNegativeNumbers.checked = "checked"; 
// mrngNumberOfRuns.value = "10";
// mrngMinNumber.value = 44444444444444444444444444444;
// mrngMaxNumber.value = 2e88;
// mrngRunButton.style.backgroundColor = "white";

// addEventListeners:

mrngAllowNegativeNumbers.addEventListener(
    'blur',
    () => {
        if(mrngAllowNegativeNumbers.checked) {
            mrngNumberOfRuns.min = "";
            mrngMinNumber.min = "";
            mrngMaxNumber.min = "";
        }
        else {
            mrngNumberOfRuns.min = "0";
            mrngMinNumber.min = "0";
            mrngMaxNumber.min = "0";
        }
    }
);

[...mrngNumberInputs].forEach(
    (input, index) => {
        input.addEventListener(
            'input',
            () => {
                preventNegativeSign(input);
                alertIncorrectValue(input, index);
            }
        );        
    }
)

mrngAllowNegativeNumbers.addEventListener(
    'input',
    () => {
        clearInputs();
        changeMinValues(mrngAllowNegativeNumbers);
    }
)

// Helper Functions:

function alertIncorrectValue(inputElement, index) {
    let alertP = document.getElementById(`alertP${index}`);
    let inputValue = inputElement.value;

    if (alertP || inputValue !== '') return;

    if (inputValue === '' && !alertP) {
        let alertP = document.createElement('p');
        alertP.id = `alertp${index}`;
        alertP.textContent = "Please enter a valid number."
        inputElement.parentElement.appendChild(alertP);
    }
}

function clearInputs(inputElements = [...mrngNumberInputs]) {
    inputElements.forEach(
        input => input.value = ""
    )
}

function changeMinValues(checkBoxElement, inputNumberElements = mrngNumberInputs) {
    let inputElementsArray = [...inputNumberElements]
    if (isChecked(checkBoxElement)) {
        inputElementsArray.forEach(
            input => input.min = ""
        )
        return;
    }
    inputElementsArray.forEach(
        input => input.min = "0"
    )
    return; 
}

function preventNegativeSign(element) {
    if(!isChecked(mrngAllowNegativeNumbers) && element.value.includes('-')) {
        let negativeReplacement = element.value.replace(/^-/, '');

        element.value = negativeReplacement;

        return negativeReplacement;
    }
    return;
}

function isChecked(element) {
    return element.checked ? true : false;
}

function includesNegativeSign() {
    const inputValues = [...mrngNumberInputs].map(input => input.value);
    const someNegative = inputValues.some(value => value.includes("-"));
    if (mrngAllowNegativeNumbers.checked && someNegative) {
        return true;
    }
    return false;
}