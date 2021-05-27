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
