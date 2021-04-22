import React from 'react';
import { Equation } from 'react-equation';

export default function CIFormula() {
  return (
    <div>
      <Equation
                value='At = A0*(1+r/n)^(n*t)'
            />
    </div>
  )
}
