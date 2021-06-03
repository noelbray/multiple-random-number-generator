describe("function isChecked", function() {

    it("If the input element's checked attribute's value is false, return false.", function() {
        let inputElement = document.createElement('input');

        assert.equal(isChecked(inputElement), false);
    });

    it("If the input element's checked attribute's value is true, return true.", function() {
        let inputElement = document.createElement('input');

        inputElement.checked = "true";
        assert.equal(isChecked(inputElement), true);
    });

    it("Based on mrngAllowNegativeNumbers' current checked attribute's boolean value, should return true if checked is true or false if checked is false.", function() {
        let booleanValue = mrngAllowNegativeNumbers.checked ? true : false;

        assert.equal(isChecked(mrngAllowNegativeNumbers), booleanValue);
    });
});