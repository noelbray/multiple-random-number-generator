describe("Multiple Random Number Generator's Function Tests Suite", function() {

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