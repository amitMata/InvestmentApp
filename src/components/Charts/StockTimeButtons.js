import React, {useEffect , useRef} from 'react';
import './StockTimeButtons.css';


const StockTimeButtons = (props) => {

  const clickedRef1M = useRef();
  const clickedRef6M = useRef();
  const clickedRef1Y = useRef();
  const clickedRef2Y = useRef();
  const clickedRef5Y = useRef();
  const clickedRefALL = useRef();

  useEffect(()=>{
    clickedRef1Y.current.style.backgroundColor = '#158d75';
  },[])

  let arrayOfPrices = [];
  let arrayOfTime = [];

  arrayOfPrices = props.prices;
  arrayOfTime = props.time;

  const applyChange = (key) =>{
    props.changeTimeToDisplay(key);
    
    switch(key){
      case '1M':
        let newArrayOfTimes = [];
        let newArrayOfPrices = [];

        clickedRef1M.current.style.backgroundColor = '#158d75';
        clickedRef6M.current.style.backgroundColor = '#1abc9c';
        clickedRef1Y.current.style.backgroundColor = '#1abc9c';
        clickedRef2Y.current.style.backgroundColor = '#1abc9c';
        clickedRef5Y.current.style.backgroundColor = '#1abc9c';
        clickedRefALL.current.style.backgroundColor = '#1abc9c';


        for (let i = 0; i < 22 ; i++ ){
          newArrayOfPrices.push(arrayOfPrices[i]);
          newArrayOfTimes.push(arrayOfTime[i]);
        }

        newArrayOfPrices.reverse();
        newArrayOfTimes.reverse();

        newArrayOfPrices = newArrayOfPrices.filter(function(element){
          return element !== undefined;
        });

         newArrayOfTimes = newArrayOfTimes.filter(function(element){
          return element !== undefined;
        });

        props.changeArrayOfPrices(newArrayOfPrices);
        props.changeArrayOfTime(newArrayOfTimes);
        break;

////////////////////////////////////////////////////////////////////

      case '6M':
        let newArrayOfTimes6M = [];
        let newArrayOfPrices6M = [];

        clickedRef1M.current.style.backgroundColor = '#1abc9c';
        clickedRef6M.current.style.backgroundColor = '#158d75';
        clickedRef1Y.current.style.backgroundColor = '#1abc9c';
        clickedRef2Y.current.style.backgroundColor = '#1abc9c';
        clickedRef5Y.current.style.backgroundColor = '#1abc9c';
        clickedRefALL.current.style.backgroundColor = '#1abc9c';

        for (let i = 0; i < 120 ; i++ ){
          newArrayOfPrices6M.push(arrayOfPrices[i]);
          newArrayOfTimes6M.push(arrayOfTime[i]);
        }
        newArrayOfPrices6M.reverse();
        newArrayOfTimes6M.reverse();

        newArrayOfPrices6M = newArrayOfPrices6M.filter(function(element){
          return element !== undefined;
        });

         newArrayOfTimes6M = newArrayOfTimes6M.filter(function(element){
          return element !== undefined;
        });

        props.changeArrayOfPrices(newArrayOfPrices6M);
        props.changeArrayOfTime(newArrayOfTimes6M);


        break;

        case '1Y':
        let newArrayOfTimes1Y = [];
        let newArrayOfPrices1Y = [];

        clickedRef1M.current.style.backgroundColor = '#1abc9c';
        clickedRef6M.current.style.backgroundColor = '#1abc9c';
        clickedRef1Y.current.style.backgroundColor = '#158d75';
        clickedRef2Y.current.style.backgroundColor = '#1abc9c';
        clickedRef5Y.current.style.backgroundColor = '#1abc9c';
        clickedRefALL.current.style.backgroundColor = '#1abc9c';

        for (let i = 0; i < 260 ; i++ ){
          newArrayOfPrices1Y.push(arrayOfPrices[i]);
          newArrayOfTimes1Y.push(arrayOfTime[i]);
        }
        newArrayOfPrices1Y.reverse();
        newArrayOfTimes1Y.reverse();

        newArrayOfPrices1Y = newArrayOfPrices1Y.filter(function(element){
          return element !== undefined;
        });

         newArrayOfTimes1Y = newArrayOfTimes1Y.filter(function(element){
          return element !== undefined;
        });

        props.changeArrayOfPrices(newArrayOfPrices1Y);
        props.changeArrayOfTime(newArrayOfTimes1Y);

        break;

        case '2Y':
        let newArrayOfTimes2Y = [];
        let newArrayOfPrices2Y = [];

        clickedRef1M.current.style.backgroundColor = '#1abc9c';
        clickedRef6M.current.style.backgroundColor = '#1abc9c';
        clickedRef1Y.current.style.backgroundColor = '#1abc9c';
        clickedRef2Y.current.style.backgroundColor = '#158d75';
        clickedRef5Y.current.style.backgroundColor = '#1abc9c';
        clickedRefALL.current.style.backgroundColor = '#1abc9c';

        for (let i = 0; i < 505 ; i++ ){
          newArrayOfPrices2Y.push(arrayOfPrices[i]);
          newArrayOfTimes2Y.push(arrayOfTime[i]);
        }
        newArrayOfPrices2Y.reverse();
        newArrayOfTimes2Y.reverse();

        newArrayOfPrices2Y = newArrayOfPrices2Y.filter(function(element){
          return element !== undefined;
        });

         newArrayOfTimes2Y = newArrayOfTimes2Y.filter(function(element){
          return element !== undefined;
        });

        props.changeArrayOfPrices(newArrayOfPrices2Y);
        props.changeArrayOfTime(newArrayOfTimes2Y);

        break;

        case '5Y':
        let newArrayOfTimes5Y = [];
        let newArrayOfPrices5Y = [];

        clickedRef1M.current.style.backgroundColor = '#1abc9c';
        clickedRef6M.current.style.backgroundColor = '#1abc9c';
        clickedRef1Y.current.style.backgroundColor = '#1abc9c';
        clickedRef2Y.current.style.backgroundColor = '#1abc9c';
        clickedRef5Y.current.style.backgroundColor = '#158d75';
        clickedRefALL.current.style.backgroundColor = '#1abc9c';


        for (let i = 0; i < 1260 ; i++ ){
          newArrayOfPrices5Y.push(arrayOfPrices[i]);
          newArrayOfTimes5Y.push(arrayOfTime[i]);

        }

        newArrayOfPrices5Y.reverse();
        newArrayOfTimes5Y.reverse();

        newArrayOfPrices5Y = newArrayOfPrices5Y.filter(function(element){
          return element !== undefined;
        });

         newArrayOfTimes5Y = newArrayOfTimes5Y.filter(function(element){
          return element !== undefined;
        });

        props.changeArrayOfPrices(newArrayOfPrices5Y);
        props.changeArrayOfTime(newArrayOfTimes5Y);

        break;

        case 'ALL':
        let newArrayOfTimesALL = [];
        let newArrayOfPricesALL = [];

        clickedRef1M.current.style.backgroundColor = '#1abc9c';
        clickedRef6M.current.style.backgroundColor = '#1abc9c';
        clickedRef1Y.current.style.backgroundColor = '#1abc9c';
        clickedRef2Y.current.style.backgroundColor = '#1abc9c';
        clickedRef5Y.current.style.backgroundColor = '#1abc9c';
        clickedRefALL.current.style.backgroundColor = '#158d75';

        for (let i = 0; i < arrayOfPrices.length ; i++ ){
          newArrayOfPricesALL.push(arrayOfPrices[i]);
          newArrayOfTimesALL.push(arrayOfTime[i]);
        }
        newArrayOfPricesALL.reverse();
        newArrayOfTimesALL.reverse();

        props.changeArrayOfPrices(newArrayOfPricesALL);
        props.changeArrayOfTime(newArrayOfTimesALL);

    }
  }

  return (
    <div>
      <button key={'1M'} ref={clickedRef1M}  onClick={() => applyChange('1M')}>1M</button>
      <button key={'6M'} ref={clickedRef6M} onClick={() =>  applyChange('6M')}>6M</button>
      <button key={'1Y'} ref={clickedRef1Y} onClick={() =>  applyChange('1Y')}>1Y</button>
      <button key={'2Y'} ref={clickedRef2Y} onClick={() =>  applyChange('2Y')}>2Y</button>
      <button key={'5Y'} ref={clickedRef5Y} onClick={() =>  applyChange('5Y')}>5Y</button>
      <button key={'ALL'} ref={clickedRefALL} onClick={() => applyChange('ALL')}>ALL</button>
    </div>
  )
}

export default StockTimeButtons;


  // const styleDefault = {
  // backgroundColor: '#1abc9c',
  // border: '#16a084',
  // color: 'white',
  // textDecoration: 'none',
  // display: 'inline-block',
  // fontSize: '14px',
  // margin: '6px',
  // borderRadius: '12px',
  // width: '60px',
  // height: '30px',
  // textAlign: 'center'
  // }