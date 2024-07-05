import React from "react";
import Logo from "./components/Logo";
import CalculatorBox from "./components/Calculator/CalculatorBox";
import InputSide from "./components/Calculator/InputSide";
import OutputSide from "./components/Calculator/OutputSide";

function App() {
  return (
    <div className='app'>
      <Logo />
      <CalculatorBox>
        <InputSide />
        <OutputSide />
      </CalculatorBox>
    </div>
  );
}

export default App;
