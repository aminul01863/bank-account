document.getElementById("deposit-btn").addEventListener("click", function () {
  //   deposit input
  const depositField = document.getElementById("user-deposit");
  const newDepositAmount = depositField.value;
  // deposit value
  const depositTotalAmount = document.getElementById("deposit-amount");
  const previousDepositTotal = depositTotalAmount.innerText;
  const currentDepositAmount =
    parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
  depositTotalAmount.innerText = currentDepositAmount;

  // total balance
  const balance = document.getElementById("balance");
  const newBalance = balance.innerText;
  const totalBalance = parseFloat(newBalance);
  const totalNewBalance = totalBalance + parseFloat(newDepositAmount);
  console.log(totalNewBalance);
  balance.innerText = totalNewBalance;
  depositField.value = " ";
});

// withdraw

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw");
  const newWithdrawAmount = withdrawInput.value;

  const withdrawBalance = document.getElementById("withdraw-amount");
  const totalWithdraw = withdrawBalance.innerText;
  const currentWithdraw =
    parseFloat(totalWithdraw) + parseFloat(newWithdrawAmount);
  withdrawBalance.innerText = currentWithdraw;

  const totalBalance = document.getElementById("balance");
  const newTotalBalance = totalBalance.innerText;
  const totalWithdrawBalance = parseFloat(newTotalBalance);
  const newBalance = totalWithdrawBalance - parseFloat(newWithdrawAmount);
  console.log(newBalance);
  totalBalance.innerText = newBalance;
  withdraw.value = " ";
});
