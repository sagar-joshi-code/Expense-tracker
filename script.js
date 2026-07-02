//targetting element
let getTitle = document.getElementById("title");
let getAmount = document.getElementById("amount");
let getCategory = document.getElementById("category");
let addBtn = document.getElementById("addBtn");

//store values
let transactions = [];

//adding event listner in addBtn
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let getType = document.querySelector('input[name="type"]:checked');

  let transaction = {
    title: getTitle.value,
    amount: Number(getAmount.value),
    category: getCategory.value,
    type: getType.value,
  };
  transactions.push(transaction);
  showTransaction();
  calculateBalance();
  clearForm();
});

function showTransaction() {
  let transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";
  transactions.forEach((transaction, idx) => {
    const div = document.createElement("div");
    div.innerHTML = `${transaction.title} - ${transaction.amount}`;
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", () => {
      transactions.splice(idx, 1);
      showTransaction()
      calculateBalance()
    });
    transactionList.appendChild(div);
    div.appendChild(delBtn);
  });
}

//fucntion to clear input
function clearForm() {
  getTitle.value = "";
  getAmount.value = "";
  getCategory.value = "";
  let getType = document.querySelector('input[name="type"]:checked');

  if (getType) {
    getType.checked = false;
  }
}

function calculateBalance() {
  let income = 0;
  let expense = 0;
  transactions.forEach((transaction) => {
    if (transaction.type === "Income") {
      income += transaction.amount;
    } else {
      expense += transaction.amount;
    }
  });
  let balance = income - expense;
  let incomeAmt = (document.getElementById("incomeAmt").innerHTML =
    `Rs. ${income}`);
  let expenseAmt = (document.getElementById("expenseAmt").innerHTML =
    `Rs. ${expense}`);
  let balanceAmt = (document.getElementById("balanceAmt").innerHTML =
    `Rs. ${balance}`);
}
