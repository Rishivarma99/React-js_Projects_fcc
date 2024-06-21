import { createContext, useState } from "react";

export const GloabalState = createContext(null);

export default function LocalState({ children }) {
  const [transactionData, setTransactionData] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleAddTransaction = (text, amount1, button) => {
    if (text != "" && amount1 != "" && button != "") {
      let oldData = transactionData;

      let newData = [
        {
          reason: text,
          amount: amount1,
          type: button,
        },
        ...oldData,
      ];

      if (button == "add") {
        let newIncome = income + amount1;
        let newBalance = balance + amount1;
        setIncome(newIncome);
        setBalance(newBalance);
      } else if (button == "withdraw") {
        let newExpense = expense + amount1;
        let newbalance = balance - amount1;
        setExpense(newExpense);
        setBalance(newbalance);
      }

      setTransactionData(newData);
    }
  };

  console.log(transactionData);

  return (
    <GloabalState.Provider
      value={{
        transactionData,
        balance,
        expense,
        income,
        handleAddTransaction,
      }}
    >
      {children}
    </GloabalState.Provider>
  );
}
