import { useContext } from "react";
import { GloabalState } from "../context";

const History = () => {
  const { transactionData } = useContext(GloabalState);
  return (
    <div className="expt-history-div">
      <h2 className="expt-history-heading">
        History <span className="expt-span">(last 3 transaction)</span>
      </h2>
      <div className="exp-transaction-history">
        {transactionData && transactionData.length > 0 ? (
          transactionData.map((data, index) => {
            if (index < 3) {
              return (
                <div key={data.reason} className="expt-transaction">
                  <p className="expt-transaction-text">{data.reason}</p>
                  <p className="expt-transaction-money">{data.amount}</p>
                  <p
                    className={`expt-strip ${
                      data.type == "add" ? "expt-green" : "expt-red"
                    } `}
                  ></p>
                </div>
              );
            }
          })
        ) : (
          <center>
            <h3>Please Start transaction</h3>
          </center>
        )}
      </div>
    </div>
  );
};

export default History;
