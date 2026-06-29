//storing value
let transactions = [];

let getAddBtn = document.getElementById("addBtn");
getAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
//   console.log(e);

  //get value
  let getTitle = document.getElementById("title").value;
  let getAmount = document.getElementById("amount").value;
  let getCategory = document.getElementById("category").value;
  let getType = document.querySelector('input[name="type"]:checked').value;
  //   console.log(getTitle);
  //   console.log(getAmount);
  //   console.log(getCategory);
  //   console.log(getType);

  //make transaction object
  let transaction = {
    title: getTitle,
    amount: getAmount,
    category: getCategory,
    type: getType,
  };
  transactions.push(transaction);
  console.log(transactions);
});
