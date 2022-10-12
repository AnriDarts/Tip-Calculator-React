import "./calculator.scss";

import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [started, setStarted] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (bill > 0 || tipPercent > 0 || numberOfPeople > 0) {
      setStarted(true);
    }

    if (bill > 0 && tipPercent > 0 && numberOfPeople > 0) {
      TipCalculator(bill, numberOfPeople, tipPercent);
      setReset(true);
    }
  }, [bill, tipPercent, numberOfPeople]);

  const TipCalculator = (amount, persons, percent) => {
    setTotalAmount(Math.round(amount * percent * 100) / 100);
    setTipAmount(Math.round(((amount * percent) / persons) * 100) / 100);
  };

  const Reset = () => {
    setReset(0);
    setStarted(0);
    setBill(0);
    setTipAmount(0);
    setNumberOfPeople(0);
    setTipPercent(0);
    setTotalAmount(0);
  };
  return (
    <div className="calculator">
      <div className="logo">
        <img src="logo.svg" alt="Main Logo" />
      </div>

      <div className="tip-box">
        <div className="left">
          <div className="wrapper">
            <div className={started ? "amount-input active" : "amount-input"}>
              <div className="labels">
                <div className="amount-label">Bill</div>
                <div
                  className={bill > 0 ? "error-label" : "error-label active"}
                >
                  Can't be zero
                </div>
              </div>
              <input
                type="number"
                className={bill > 0 ? "money" : "money error"}
                placeholder="0.00"
                onChange={(e) => setBill(e.target.value)}
                value={bill > 0 ? bill : ""}
              />
            </div>

            <div className={started ? "select-tip active" : "select-tip"}>
              <div className="labels">
                <div className="select-tip-label">Select Tip %</div>
                <div
                  className={
                    tipPercent > 0 ? "error-label" : "error-label active"
                  }
                >
                  Can't be zero
                </div>
              </div>
              <div className="tips">
                <div
                  className={tipPercent === 0.05 ? "tip active" : "tip"}
                  onClick={() => setTipPercent(0.05)}
                >
                  5%
                </div>
                <div
                  className={tipPercent === 0.1 ? "tip active" : "tip"}
                  onClick={() => setTipPercent(0.1)}
                >
                  10%
                </div>
                <div
                  className={tipPercent === 0.15 ? "tip active" : "tip"}
                  onClick={() => setTipPercent(0.15)}
                >
                  15%
                </div>
                <div
                  className={tipPercent === 0.25 ? "tip active" : "tip"}
                  onClick={() => setTipPercent(0.25)}
                >
                  25%
                </div>
                <div
                  className={tipPercent === 0.5 ? "tip active" : "tip"}
                  onClick={() => setTipPercent(0.5)}
                >
                  50%
                </div>
                <input
                  className="tip custom"
                  type="number"
                  placeholder="Custom"
                  onChange={(e) => setTipPercent(e.target.value / 100)}
                />
              </div>
            </div>

            <div
              className={
                started ? "amount-input people active" : "amount-input people"
              }
            >
              <div className="labels">
                <div className="amount-label">Number Of People</div>
                <div
                  className={
                    numberOfPeople > 0 ? "error-label" : "error-label active"
                  }
                >
                  Can't be zero
                </div>
              </div>

              <input
                type="number"
                className={numberOfPeople > 0 ? "people" : "people error"}
                placeholder="0"
                onChange={(e) => setNumberOfPeople(e.target.value)}
                value={numberOfPeople > 0 ? numberOfPeople : ""}
              />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="wrapper">
            <div className="calculated-data">
              <div className="tip-amount">
                <div className="titles">
                  <div className="main-title">Tip Amount</div>
                  <div className="sub-title">/ person</div>
                </div>

                <div className="amount">
                  {tipAmount > 0 ? "$" + tipAmount.toString() : "$0.00"}
                </div>
              </div>

              <div className="total-amount">
                <div className="titles">
                  <div className="main-title">Total</div>
                  <div className="sub-title">/ person</div>
                </div>

                <div className="amount">
                  {totalAmount > 0 ? "$" + totalAmount.toString() : "$0.00"}
                </div>
              </div>
            </div>

            <button
              className={reset ? "reset active" : "reset"}
              disabled={!reset}
              onClick={() => Reset()}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
