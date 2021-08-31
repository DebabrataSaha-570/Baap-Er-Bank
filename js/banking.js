
// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 

    const depositInput = document.getElementById('Deposit-Input')
    const newDepositAmount = depositInput.value;
    // console.log(depositAmount)

    //update deposit total 
    const depositTotal = document.getElementById('deposit-total')

    const previousDepositAmount = depositTotal.innerText;

    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    // depositTotal.innerText = newDepositTotal;
    depositTotal.innerText = newDepositTotal;


    // ............update account balance 

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit inputfield 
    depositInput.value = ''


})

// handle withdraw event handler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-Input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText)
    console.log('new withdraw amount', newWithdrawAmount)

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawText = withdrawTotal.innerText;
    console.log('previous withdraw text', previousWithdrawText)
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    console.log('previous withdraw amount', previousWithdrawTotal)

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // .......update balance 
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText)

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear withdraw input 
    withdrawInput.value = ''
})