import { useContext, useRef, useState } from "react";
import { GloabalState } from "../context";

const AddTransaction = () => {
  const text = useRef("");
  const amount = useRef("");
  const { handleAddTransaction } = useContext(GloabalState);

  const [text1, setText1] = useState("");
  const [amount1, setAmount1] = useState("");

  const handleAdd = () => {
    const presentText = text.current.value;
    const presentAmount = parseInt(amount.current.value, 10);
    handleAddTransaction(presentText, presentAmount, "add");
    setAmount1("");
    setText1("");
  };
  const handleWithdraw = () => {
    const presentText = text.current.value;
    const presentAmount = parseInt(amount.current.value, 10);
    handleAddTransaction(presentText, presentAmount, "withdraw");
    setAmount1("");
    setText1("");
  };

  return (
    <div className="expt-addtrans-main">
      <h2 className="expt-history-heading">Add Transaction</h2>
      <div className="expt-addtrans-div">
        <form action="submit" className="expt-addtrans-div-form">
          <div>
            <label htmlFor="text" className="expt-label">
              Text
            </label>
            <input
              type="text"
              className="expt-input"
              placeholder="Enter reason for transaction"
              ref={text}
              value={text1}
              onChange={(event) => setText1(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="amount" className="expt-label">
              Amount
            </label>
            <input
              type="number"
              className="expt-input"
              placeholder="Enter amount "
              ref={amount}
              value={amount1}
              onChange={(event) => setAmount1(event.target.value)}
            />
          </div>
          <div className="expt-button-div">
            <button
              type="button"
              className="btn btn-success expt-button"
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-danger expt-button"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
