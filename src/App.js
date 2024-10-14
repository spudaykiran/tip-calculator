import { useState } from "react";

export default function App() {
  return (
    <div>
      <BillCalculator />
    </div>
  );
}

function BillCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  function handleReset() {
    setBill(Number(0));
    setTip1(0);
    setTip2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectTipPercentage tip={tip1} onSetTip={setTip1}>
        How did you like the service ?
      </SelectTipPercentage>
      <SelectTipPercentage tip={tip2} onSetTip={setTip2}>
        How did your friend like the service ?
      </SelectTipPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={(tip1 + tip2) / 2} />
          <Reset onReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="bill">
      <label>How much was the bill ? </label>
      <input
        type="text"
        placeholder="Bill value..."
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectTipPercentage({ children, tip, onSetTip }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="15">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  const totalBill = bill + tip;
  return (
    <h3>
      You pay ${totalBill} ( ${bill} + ${tip} tip )
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
