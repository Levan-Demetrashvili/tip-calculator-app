import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const percentages = [5, 10, 15, 25, 50];

export default function SelectTipRate({ tipRate, setTipRate }) {
  const [customRateValue, setCustomRateValue] = useState(0);

  return (
    <div className='tip-container'>
      <p className='input-title'>Select Tip %</p>
      <div className='rates-container'>
        {percentages.map(perc => (
          <RateBox
            key={uuid()}
            percent={perc}
            tipRate={tipRate}
            setTipRate={setTipRate}
            onClearCustomRateValue={() => setCustomRateValue(0)}
          />
        ))}
        <label className='custom-rate' htmlFor='custom'>
          <input
            id='custom'
            className='input-number'
            type='number'
            name='rate'
            min={0}
            placeholder='Custom'
            value={tipRate !== customRateValue ? '' : customRateValue || ''}
            onChange={e => {
              const val =
                +e.target.value > 100 ? 100 : +e.target.value < 0 ? 0 : +e.target.value;
              setTipRate(val);
              setCustomRateValue(val);
            }}
          />
        </label>
      </div>
    </div>
  );
}

function RateBox({ percent, tipRate, setTipRate, onClearCustomRateValue }) {
  return (
    <label className='rate' htmlFor={`${percent}%`}>
      <input
        id={`${percent}%`}
        type='radio'
        name='rate'
        checked={percent === tipRate ? true : false}
        onChange={() => {
          setTipRate(percent);
          onClearCustomRateValue();
        }}
      />
      <span>{percent}%</span>
    </label>
  );
}
