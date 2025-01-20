import React from 'react';

export default function NumberInput({ purpose, title, inputIconAlt, value, setValue }) {
  const isZero = value === 0;
  return (
    <div className={purpose}>
      <div className='message'>
        <label className='input-title' htmlFor={purpose}>
          {title}
        </label>
        {isZero && <p className='error'>Can't be zero</p>}
      </div>
      <div className='input-wrapper'>
        <input
          type='number'
          style={isZero ? { outline: '2px solid #b51717' } : {}}
          className='input-number'
          id={purpose}
          min={0}
          placeholder='0'
          value={value || ''}
          onChange={e => setValue(+e.target.value)}
        />
        <img src={`./images/icon-${inputIconAlt}.svg`} alt={`${inputIconAlt} icon`} />
      </div>
    </div>
  );
}
