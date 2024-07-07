import React from "react";

export default function NumberInput({ purpose, title, inputIconAlt, value, setValue }) {
  return (
    <div className={purpose}>
      <label className='input-title' htmlFor={purpose}>
        {title}
      </label>
      <div className='input-wrapper'>
        <input type='number' className='input-number' id={purpose} min={0} placeholder='0' value={value || ""} onChange={e => setValue(+e.target.value)} />
        <img src={`./images/icon-${inputIconAlt}.svg`} alt={`${inputIconAlt} icon`} />
      </div>
    </div>
  );
}
