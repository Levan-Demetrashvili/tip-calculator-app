import React, { useState } from "react";
import Logo from "./components/Logo";
import CalculatorBox from "./components/Calculator/CalculatorBox";
import NumberInput from "./components/Calculator/NumberInput";
import SelectTipRate from "./components/Calculator/SelectTipRate";
import Result from "./components/Calculator/Result";

export default function App() {
  const [bill, setBill] = useState(null);
  const [tipRate, setTipRate] = useState(0);
  const [numPeople, setNumPeople] = useState(null);

  const tipPerPerson = bill && tipRate && numPeople ? (bill * tipRate) / 100 / numPeople : 0;
  const totalPerPerson = bill && tipRate && numPeople ? (bill + (bill * tipRate) / 100) / numPeople : 0;

  function reset() {
    setBill(null);
    setTipRate(0);
    setNumPeople(null);
  }

  return (
    <div className='app'>
      <Logo />
      <CalculatorBox>
        <Section className='input-side'>
          <NumberInput purpose='bill' title='Bill' inputIconAlt='dollar' value={bill} setValue={setBill} />
          <SelectTipRate tipRate={tipRate} setTipRate={setTipRate} />
          <NumberInput purpose='num-people' title='Number of People' inputIconAlt='person' value={numPeople} setValue={setNumPeople} />
        </Section>
        <Section className='output-side'>
          <div>
            <Result amount={tipPerPerson}> Tip Amount </Result>
            <Result amount={totalPerPerson}> Total</Result>
          </div>
          <button className='reset' onClick={reset}>
            RESET
          </button>
        </Section>
      </CalculatorBox>
    </div>
  );
}

function Section({ children, className }) {
  return <section className={className}>{children}</section>;
}
