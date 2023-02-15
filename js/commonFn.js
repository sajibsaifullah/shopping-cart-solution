function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function setTexElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}
function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTexElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.10).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTexElementValueById('tax-amount', taxAmount);

    // final amount
    const finalAmount = currentSubTotal + taxAmount;
    setTexElementValueById('final-total', finalAmount);
    
}