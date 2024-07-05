import React from "react";

export default function InputSide() {
  return (
    <section className='input-side'>
      <NumberInput purpose='bill' title='Bill' inputIconAlt='dollar' />
      <SelectTipRate />
      <NumberInput purpose='num-people' title='Number of People' inputIconAlt='person' />
    </section>
  );
}

function NumberInput({ purpose, title, inputIconAlt }) {
  return (
    <div className={purpose}>
      <label className='input-title' for={purpose}>
        {title}
      </label>
      <div className='input-wrapper'>
        <img src={`./images/icon-${inputIconAlt}.svg`} alt={`${inputIconAlt} icon`} />
        <input type='number' className='input-number' id={purpose} min={0} placeholder='0' />
      </div>
    </div>
  );
}

function SelectTipRate() {
  return <h1>SelectTipRate</h1>;
}
