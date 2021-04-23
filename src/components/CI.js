import React, {useState} from 'react';
import './CI.css';
import Modal from './AdditionalComponents/Modal';
import CIChart from './Charts/CIChart';

const CI = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [initialAmount, setInitialAmount] = useState();
  const [numOfYears, setNumOfYears] = useState();
  const [interestRate, setInterestRate] = useState();
  const [finalResult, setFinalResult] = useState();
  const [isCalculated, setIsCalculated] = useState(false);
  const [error, setError] = useState(false);

  const calculation = () =>{

    const res = initialAmount * Math.pow(1+interestRate, numOfYears);
    setError(false);

    setFinalResult(undefined);

    // if(numOfYears === 0 || interestRate === 0){
    //   setError(true);
    //   return;
    // }

    if(isNaN(res) || res <= 0 || numOfYears === undefined || numOfYears === "" || numOfYears <= 0 || interestRate <= 0){
      setError(true);
      setIsCalculated(true);
      return;
    }

    if(initialAmount === res){
      setError(true);
      setIsCalculated(true);
      return;
    }

    setFinalResult(res.toFixed(2));
    setIsCalculated(true);

  }

  return (
    <div>
      <div className="topCI">Welcome to the Compound Interest Calculator! </div>
      
        <div>
          <button onClick={()=>setIsOpen(true)}>What Is Compound Interest?</button>
          <Modal open={isOpen} onClose={()=>setIsOpen(false)}/>
        </div>
        
        <div className="containerCI">
          <form>
          <div className="inputOfForm">
            <label>Initial Amount: </label><br></br>
            <input className="searchCI" maxLength="8" type="text" name="name" onChange={(e) => {setInitialAmount(e.target.value)}} ></input>
            <br></br><br></br>
            <label>Number Of Years: </label><br></br>
            <input className="searchCI" maxLength="2" type="text" name="name" onChange={(e) => {setNumOfYears(e.target.value)}}></input>
            <br></br><br></br>
            <label>Interest rate in %: </label><br></br>
            <input className="searchCI" maxLength="3" type="text" name="name" onChange={(e) => {setInterestRate((e.target.value/100))}}></input>
            <br></br>
          </div>
          <button type="button" onClick={()=>calculation()}>Calculate</button>
          </form>
        </div>
        {error && isCalculated && <span>Please fill all the inputs with positive numbers!</span>}
        {!error &&isCalculated && <div>The final amount of money is: {finalResult}$ <div><br></br><CIChart initialAmount={initialAmount} numOfYears={numOfYears} interestRate={interestRate} finalResult={finalResult}/></div></div>}
        <br></br>
    </div>
  )
}

export default CI;