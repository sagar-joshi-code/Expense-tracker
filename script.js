//targetting element
let getTitle = document.getElementById("title");
let getAmount = document.getElementById("amount");
let getCategory = document.getElementById("category");
let addBtn = document.getElementById("addBtn");
let transactionList = document.getElementById("transactionList");

//store values
let transactions = [];

//adding event listner in addBtn
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let getType = document.querySelector('input[name="type"]:checked');

  let transaction = {
    title: getTitle.value,
    amount: getAmount.value,
    category: getCategory.value,
    type: getType.value,
  };
  transactions.push(transaction);
  console.log(transactions);
});
