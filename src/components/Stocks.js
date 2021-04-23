import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Stocks.css';
import StockChart from './Charts/StockChart';
import LoadingAnimation from './AdditionalComponents/LoadingAnimation';

const Stocks = () => {

  const [currentStock, setCurrentStock] = useState({});
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [init, setInit] = useState(true);

  const fetchData = useCallback( async (query) =>{

    let fixed = query.trim();

    if (!fixed){
      return;
    }

    setIsLoading(true);
    setErrorMessage(false);

    try{const getSymbol = await axios(`https://finnhub.io/api/v1/search?q=${fixed}&token=${process.env.REACT_APP_STOCKS_API}`);
    
    if(getSymbol.data.result.length === 0 || isLoading===true) {
      setIsLoading(false);
      setErrorMessage(true);
      return;
    }

    const symbol = getSymbol.data.result[0].symbol;

    const getPrice = await axios (`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.REACT_APP_STOCKS_API}`);

    const price = getPrice.data.c;

     setCurrentStock({symbol, price});
     if(errorMessage===false){
          localStorage.setItem('stock', fixed);
    }
  }

  catch(err){
    setErrorMessage(true);
  }
   
    setIsLoading(false);
    setInit(false);

    }, []);
    

  useEffect( () => {
  
  setQuery(localStorage.getItem('stock'));
  
  fetchData(query);

  } , []);

  

  return (
    <div className="container">
    <br></br>
      Search for your desired stock by company's name or its symbol!<br></br>
      For Example: Apple / AAPL / Tesla / TSLA...
      <br></br><br></br>

      <div className="Wrapper">
        <div className='SearchBar'>
          <input name="query" className="search" type="text" placeholder="Type Here!" value={query} onChange={(e) => { setQuery(e.target.value); }} /><br></br>
        </div>
        <div>
          <button className="Button" type="button" onClick={()=>fetchData(query)}> Search</button><br></br>
        </div>

      </div>

      {errorMessage && <span>Stock was not found. Please try again.<br></br><br></br>NOTE: Sometimes the API is overloaded with request, especially during trading hours.<br></br> In case you did write your query correctly, just press search again</span>}

      {isLoading && <span><div className="Loading"><LoadingAnimation></LoadingAnimation></div> <br></br> Please allow the system a few seconds to gather all the information</span>}
      
      {!isLoading && !errorMessage && !init &&
        <div>
          <div>Current Symbol: {currentStock.symbol}</div>
          <div>Current Price: {currentStock.price}$</div>
          <StockChart symbol={currentStock.symbol} />
        </div>
      }
      <br></br>
    </div>
  );
}

export default Stocks;