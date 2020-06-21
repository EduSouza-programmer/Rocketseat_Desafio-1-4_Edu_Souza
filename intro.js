const user = {
   name: "Mariana",
   transactions: [],
   balance: 0,
};

const isCredit = type => type === "credit";
const isDebit = type => type === "debit";

/* const transaction = {
  type: "credit",
  value: 50.5,
}; */

function createTransaction(type, value) {
   if (isCredit(type)) {
      user.balance += value;
      user.transactions.push({
         type,
         value,
      });
   } else if (isDebit(type)) {
      user.balance -= value;
      user.transactions.push({
         type,
         value,
      });
   } else {
      console.log("*****createTransaction unassessed operation*****");
   }
}

function getHigherTransactionByType(operation) {
   let heightValue = 0;

   if (isDebit(operation) || isCredit(operation)) {
      for (const { type, value } of user.transactions) {
         if (type === operation) {
            if (heightValue <= value) {
               heightValue = value;
            }
         }
      }
      return {
         type: operation,
         value: heightValue,
      };
   } else {
      console.log("*****getHigherTransactionByType unassessed operation*****");
   }
}

function getAverageTransactionValue() {
   let numberTransaction = 0;
   let maxValue = 0;

   for (const { value } of user.transactions) {
      maxValue += value;
      numberTransaction++;
   }
   return maxValue / numberTransaction;
}

function getTransactionsCount() {
   let countCreditTransaction = 0;
   let countDebitTransaction = 0;
   for (const { type } of user.transactions) {
      if (type === "credit") {
         countCreditTransaction++;
      }
      if (type === "debit") {
         countDebitTransaction++;
      }
   }
   return { credit: countCreditTransaction, debit: countDebitTransaction };
}

createTransaction("credit", 50);
createTransaction("credit", 120);
createTransaction("debit", 80);
createTransaction("debit", 30);

console.table(user);

console.log(user.balance);

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());
