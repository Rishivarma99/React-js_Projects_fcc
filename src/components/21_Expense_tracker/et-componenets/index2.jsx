import { useContext } from "react";
import { GloabalState } from "../context";

const Balance = () => {
  const { balance, expense, income } = useContext(GloabalState);

  return (
    <div className="expt-balance-main">
      <div className="expt-balance-display">
        <p className="expt-balance-text expt-text">Your Balance</p>
        <p className="expt-balance expt-money">RS.{balance}</p>
      </div>
      <div className="expt-income-main">
        <div className="expt-income-div">
          <div>
            <p className="expt-income-text expt-text">Income</p>
            <p className="expt-income expt-money">{income}</p>
          </div>
        </div>
        <div className="expt-expense-div">
          <div>
            <p className="expt-expense-text expt-text">Expense</p>
            <p className="expt-expense expt-money">{expense}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Balance;
