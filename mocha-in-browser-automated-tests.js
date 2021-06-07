describe("Multiple Random Number Generator's Function Tests Suite", function() {

    describe("function addRemoveAlertClass", function() {

        it("When an alert p element exists for an input, type number, element, run the function addRemoveAlertClass and then check to see if the input element has the class alert.", function() {
            let inputElement = document.createElement('input');
            let alertP1 = document.createElement('p');

            alertP1.id = 'alertP1';
            alertP1.textContent = "There's a hiccup...."

            let forCreatingRemovingElements = document.getElementById('for-creating-removing-elements');

            forCreatingRemovingElements.appendChild(inputElement);

            forCreatingRemovingElements.appendChild(alertP1);

            addRemoveAlertClass(inputElement, '1');

            let alertClassPresent = inputElement.classList.contains('alert');

            assert.equal(alertClassPresent, true);

            alertP1.remove();

            inputElement.remove();
        });

        it(`When the input has the class "alert" and does not have an associated alert p element that exists for it, addRemoveAlertClass should remove the alert class from it.`, function() {
            let inputElement = document.createElement('input');

            inputElement.classList.add('alert');

            let forCreatingRemovingElements = document.getElementById('for-creating-removing-elements');

            forCreatingRemovingElements.appendChild(inputElement);

            addRemoveAlertClass(inputElement, '');

            let classAlertPresent = inputElement.classList.contains('alert');

            assert.equal(classAlertPresent, false);

            inputElement.remove();
        });
    });

    describe("function removeAlertP", function() {

        it(`When an input, type number, element's value attribute is not empty and a p element with id alertP0 exists for/below the input element, run removeAlertP and then check to see if alertP has been removed, is null.`, function() {
            let inputElement = document.createElement('input');
            let alertP = document.createElement('p');
            let forCreatingRemovingElements = document.getElementById('for-creating-removing-elements');

            inputElement.type = 'number';
            inputElement.value = '8';

            alertP.textContent = "There is an Error...";
            alertP.id = "alertP0";

            forCreatingRemovingElements.appendChild(inputElement);

            forCreatingRemovingElements.appendChild(alertP);

            removeAlertP(inputElement, "0");

            let alertP0 = document.getElementById('alertP0');

            assert.isNull(alertP0);

            inputElement.remove();

            // assert.equal(false);
            // assert(false);
        });
    });

    describe("function alertIncorrectValue", function() {

        it(`If element with id="alertP" exists, return undefined.`, function() {
            let element = document.createElement('p');
            let body = document.querySelector('body');

            element.id = "alertP";

            element.textContent = "I'm here."

            body.prepend(element);

            assert.equal(alertIncorrectValue("", ""), undefined);

            body.removeChild(element);

            // assert(false);
        });

        it(`If alertP element does not exist and the input type number elements value is not equal to '', return undefined.`, function() {
            let inputElement = document.createElement('input');

            inputElement.type = "number";

            inputElement.value = '444492137498712947124651648774738388392';

            assert.equal(alertIncorrectValue(inputElement, ""), undefined);
        });

        it(`If the input element's value attribute's value is empty, '', and alertP is null, create alertP and append it below the inputElement.`, function() {
            let inputElement = document.createElement('input');
            let forCreatingRemovingElements = document.querySelector('#for-creating-removing-elements');

            inputElement.type = "number";
            inputElement.id = 'test';
            inputElement.value = "";
            inputElement.style.marginTop = "20px";

            forCreatingRemovingElements.prepend(inputElement);

            // console.log(inputElement);

            alertIncorrectValue(inputElement, '');

            let alertP = document.getElementById('alertP');

            // assert.equal(alertP.id, "alertP"); // This works. It checks to see if alertP exists by seeing if it has an id that equals alertP, but I should look at chai to see if there is something that will check to see if the element was created, not equal to null.

            assert.isNotNull(alertP);

            forCreatingRemovingElements.removeChild(alertP);
            forCreatingRemovingElements.removeChild(inputElement);

            // assert(false);
        });
    })
    
    describe("function clearInputs", function() {

        it(`Given a list of input elements, clearInputs sets their attribute value to "".`, function() {
            let elementList = [];
            let expectedOutput = [];

            for (let i = 0; i <= 4; i++) {
                let inputElement = document.createElement('input');

                inputElement.value = "Clear me.";

                elementList.push(inputElement);

                expectedOutput.push("");
            }

            // console.log(elementList);
            // console.log(expectedOutput);

            clearInputs(elementList);

            let valueValues = elementList.map(element => element.value);

            expect(valueValues).to.eql(expectedOutput, "Every element's value attribute should be empty, ''");

            // assert(false);
        });
    });

    describe("function changeMinValues", function() {

        it(`If input checkbox element checked attribute's value equals true, set every input element's min attribute to "" that is in the list.`, function() {
            let checkboxElement = document.createElement('input');

            checkboxElement.type = 'checkbox';
            checkboxElement.checked = true;

            // console.log("checkboxElement:", checkboxElement);

            let elementList = [];

            for (let i = 0; i < 3; i++) {
                let inputElement = document.createElement('input');

                inputElement.min = `${i}`;

                elementList.push(inputElement);
            }

            // console.log("Before changeMinValues: ", elementList);

            // console.log(elementList.map(e => e.min));

            changeMinValues(checkboxElement, elementList);

            // console.log("after changeMinValues: ", elementList);

            // console.log(elementList.map(e => e.min));

            let minValues = elementList.map(element => element.value);

            // expect(elementValues).to.have.all.keys([0, 1, 2]); // Doesn't work.

            // expect(elementValues).to.have.lengthOf(3) // This works.

            expect(minValues).to.deep.equal(["",  "", ""]);

            // assert(false);
        });

        it(`If input checkbox element's checked attribut equals false, set every input element's min attribute to "0" that is in the list.`, function() {
            let checkboxElement = document.createElement('input');

            // checkboxElement.checked = false; // Not needed because if there is no checked attribute its default value is false.

            // console.log(checkboxElement.checked);

            let elementList = [];

            for (let i = 0; i < 3; i++) {
                let inputElement = document.createElement('input');

                inputElement.min = `${i}`;

                elementList.push(inputElement);
            }

            changeMinValues(checkboxElement, elementList);

            let minValues = elementList.map(element => element.min);

            // expect(minValues).to.equal(["0", "0", "0"]); // Does not work.

            // expect(minValues).to.deep.equal(["0", "0", "0"]); // This works.

            expect(minValues).to.eql(["0", "0", "0"], `The checkboxElement's checked attribute's value may be causing the error, its current boolean value is ${checkboxElement.checked} and should be false`);

            // assert(false);
        });
    });

    describe("function preventNegativeSign", function() {

        it(`If input's, element's value contain a hypen, negative sign "-", at the beginning of the string, replace the "-" with "" and return the new value.`, function() {
            let inputElement = document.createElement('input');

            inputElement.value = "-1";

            assert.equal(preventNegativeSign(inputElement), "1");
        });

        it(`If mrngAllowNegativeNumbers' checked attribute is true then do not replace "-" sign at the begging of the element's string value and return undefined.`, function() {
            let inputElement = document.createElement('input');

            inputElement.value = "-1"

            mrngAllowNegativeNumbers.checked = true;

            assert.equal(preventNegativeSign(inputElement), undefined);

            mrngAllowNegativeNumbers.checked = false;
        });
    });

    describe("function isChecked", function() {

        it("If the input element's checked attribute's value is false, return false.", function() {
            let inputElement = document.createElement('input');

            assert.equal(isChecked(inputElement), false);
        });

        it("If the input element's checked attribute's value is true, return true.", function() {
            let inputElement = document.createElement('input');

            inputElement.checked = true;

            assert.equal(isChecked(inputElement), true);
        });

        it("Based on mrngAllowNegativeNumbers' current checked attribute's boolean value, should return true if checked is true or false if checked is false.", function() {
            let booleanValue = mrngAllowNegativeNumbers.checked ? true : false;

            assert.equal(isChecked(mrngAllowNegativeNumbers), booleanValue);
        });
    });
});