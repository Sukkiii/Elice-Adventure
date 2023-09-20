const BankAccount = {
  deposit: 0,
  name: '',

  changeName: function (name) {
    // BankAccount의 이름을 바꾸세요.
    this.name = name;
  },

  saveMoney: function (amount) {
    // amount를 deposit에 더합니다.
    this.deposit += amount;
  },

  withdrawMoney: function (amount) {
    // amount를 deposit에서 뺍니다.
    this.deposit -= amount;
  },

  getDeposit: function () {
    // deposit을 리턴합니다.
    return this.deposit;
  },
}

const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");

const setNameButton = document.getElementById("set-name-button");
const saveButton = document.getElementById("save-button");
const withdrawButton = document.getElementById("withdraw-button");
const result = document.getElementById("result");

setNameButton.addEventListener("click", () => {
  BankAccount.changeName(nameInput.value);
  result.innerHTML = JSON.stringify(BankAccount, null, 2);
});

saveButton.addEventListener("click", () => {
  BankAccount.saveMoney(Number(amountInput.value));
  result.innerHTML = JSON.stringify(BankAccount, null, 2);
});

withdrawButton.addEventListener("click", () => {
  BankAccount.withdrawMoney(Number(amountInput.value));
  result.innerHTML = JSON.stringify(BankAccount, null, 2);
});