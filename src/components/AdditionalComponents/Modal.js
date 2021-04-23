import React from 'react';
import './Modal.css';
import CIFormula from './CIFormula';

const Modal = ({open, onClose}) => {

  if (!open){
    return null;
  }
  return (
  <div>
    <div className="overlay"></div>
    <div className="containerModal">
      <div className="paragraph">
        <br></br>
        There's a reason Enstein once defined Compound Interest as the 8th Wonder Of the world.
        <br></br>Compound Interest is a term describing an interesting phenomena taken from the finances and economic worlds. Compoud interest, is the interest earned on interest.<br></br>
        <br></br>CI is calculated with the following formula: <CIFormula/>
        <br></br>At = Final Amount, A0 = Initial Amount, r = Interest Rate, t = Amount Of Years, n = Compounding Frequency.<br></br>
        <br></br>Let's explain it with an example: 
        <br></br>Imagine we have 10,000$, and earned an interest of 10% a year, which means that after a single year we will hold 11,000$ (10,000$ we had + 1,000$ we earned).
      <br></br>In the following year, we have managed to earn 10%, what will happen to the money?
      <br></br>Those 11,000$ will turn into 12,100$, which means we earned addiotional 1,100$. See the pattern? 
      <br></br>On the first year we earned 1,000$, and on the second year we earned 1,100$. That's the power of Compound Interest.
      </div>
      <div>
        <button className="btnModal" onClick={onClose}>Close</button>
      </div>
      
    </div>
  </div>
  )
}

export default Modal;

{/* <br></br><h3> So What Is Compound Interest? </h3>
      Theres a reason Enstein once defined Compound Interest as the 8th Wonder Of the world.
      <br></br>Compound Interest is a term that described an interesting phenomena taken from the finances and economic worlds.
      <br></br>Compoud interest, is the interest earned on interest.<br></br>
      <br></br> The easiest way to explain CI is with an example:
      <br></br> Imagine we have 10,000$, and earned an interest of 10% a year, which means that after a single year we will hold 11,000$ (10,000$ we had + 1,000$ we earned).
      <br></br>In the following year, we have managed to earn 10%, what will happen to the money?
      <br></br>Let's calculate it together: for 11,000$, we made 10% interest, which means we will now hold: 12,100$.
      <br></br>See the magic? In the first year we earned 1,000$, but in the following year we earned 1,100$. That is the interest we earn on an interest.<br></br>
      <br></br>How do we calculate CI? We use the following formula: 
      <br></br><CIFormula/>
      <div></div> */}