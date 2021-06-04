describe("Multiple Random Number Generator's Function Tests Suite", function() {

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