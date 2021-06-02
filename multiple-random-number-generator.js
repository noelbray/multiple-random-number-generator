const mrngAllowNegativeNumbers = document.getElementById('mrng-allow-negative-numbers');
const mrngNumberOfRuns = document.getElementById('mrng-number-of-runs');
const mrngMinNumber = document.getElementById('mrng-min-number');
const mrngMaxNumber = document.getElementById('mrng-max-number');
const mrngRunButton = document.getElementById('mrng-run-button');
const mrngOutput = document.querySelector('.mrng-output');
const mrngNumberInputs = document.querySelectorAll('input[type=number]');
const mrngOutputIntegers = document.getElementById('mrng-output-integers');

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
                removeAlertP(input, index);
                addRemoveAlertClass(input, index);
            }
        );        
    }
);

mrngAllowNegativeNumbers.addEventListener(
    'input',
    () => {
        clearInputs();
        changeMinValues(mrngAllowNegativeNumbers);
    }
);

mrngRunButton.addEventListener(
    'click',
    () => {

        if (numberInputsHaveNumbers() === false) {
            alert('One or more input fields are empty. Please make sure all input fields have a valid number.');
            [...mrngNumberInputs].forEach(
                input => {
                    if (input.value === '') {
                        input.classList.add('alert');
                    }
                }
            )
            return;
        }

        if (+mrngMaxNumber.value < +mrngMinNumber.value) {
            alert('Please input a maximum number that is greater than the minimum number.');
            mrngMaxNumber.value = "";
            mrngMaxNumber.classList.add('alert');
            return;
        }

        numbersToGenerate();
    }
);

// Helper Functions:

function numbersToGenerate() {
    let loopCount = +mrngNumberOfRuns.value;

    mrngOutput.innerText = "";

    // mrngOutput.style.whiteSpace = "nowrap";
    // white-space: nowrap; causes an element to accept whitespace, line breaks (\n) and such. // I found this out after reading https://forum.freecodecamp.org/t/how-to-add-new-line-in-string/17763
    // Instead of setting whiteSpace through the DOM, I set it in the CSS rule for .mrng-output.
    // For some reason this isn't working with innerHTML nor textContent, but only with innerText.

    for (let i = 0; i < loopCount; i++) {
        mrngOutput.innerText += `${randomNumberGenerator()}\n`;
    }
}

function randomNumberGenerator(checkBoxInput = mrngOutputIntegers) {
    let min = parseFloat(mrngMinNumber.value);

    let max = parseFloat(mrngMaxNumber.value);

    if(isChecked(checkBoxInput)) {
        let integer = Math.floor(Math.random() * (max - min + 1) + min);

        return integer;
    }
    else {
        let floatingPointNumber = Math.fround(Math.random() * (max - min) + min);

        return floatingPointNumber;
    }
}

function numberInputsHaveNumbers(listOfElements = mrngNumberInputs) {
    let inputArray = [...listOfElements];
    return inputArray.every(
        input => input.value !== ''
    );
}

function addRemoveAlertClass(inputElement, index) {
    let alertP = document.getElementById(`alertP${index}`);
    let inputClassList = inputElement.classList;

    if(alertP) {
        inputClassList.add('alert');
    }
    else {
        inputClassList.remove('alert');
    }
}

function removeAlertP(inputElement, index) {
    let alertP = document.getElementById(`alertP${index}`);
    let inputValue = inputElement.value;

    if (inputValue !== '' && alertP) {
        alertP.remove();
    }
}

function alertIncorrectValue(inputElement, index) {
    let alertP = document.getElementById(`alertP${index}`);
    let inputValue = inputElement.value;

    if (alertP || inputValue !== '') return;

    if (inputValue === '' && !alertP) {
        let alertP = document.createElement('p');
        alertP.id = `alertP${index}`;
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