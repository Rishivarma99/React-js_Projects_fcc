import LocalState from "./context";
import Header from "./et-componenets";
import Balance from "./et-componenets/index2";
import History from "./et-componenets/index3";
import AddTransaction from "./et-componenets/index4";
import "./style.css";
const ExpenseTracker = () => {
  return (
    <LocalState>
      <div className="expt-main">
        <Header></Header>
        <Balance></Balance>
        <AddTransaction></AddTransaction>
        <History></History>
      </div>
    </LocalState>
  );
};
export default ExpenseTracker;
