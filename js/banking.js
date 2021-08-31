// handle deposit button event 

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 

    const depositInput = document.getElementById('Deposit-Input')
    const depositAmount = depositInput.value;
    console.log(depositAmount)

    const depositTotal = document.getElementById('deposit-total')
    depositTotal.innerText = depositAmount;

    // clear the deposit inputfield 
    depositInput.value = ''
})