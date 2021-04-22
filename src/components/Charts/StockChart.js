import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2";
import './StockChart.css';
import LoadingAnimation from '../AdditionalComponents/LoadingAnimation';
import StockTimeButtons from './StockTimeButtons';

const StockChart = (props) => {

const [isLoading, setIsLoading] = useState(true);
const [isAPIFull, setIsAPIFull] = useState(true);

const [time, setTime] = useState([]);
const [prices, setPrices] = useState([]);

const [timeButton, setTimeForButtons] = useState([]);
const [PricesForChartButton, setPricesForButtons] = useState([]);

const [timeToDisplay, setTimeToDisplay] = useState('6M');
const [default1YPrices, setdefauly1YPrices] = useState([]);
const [default1YTimes, setdefauly1YTimes] = useState([]);

useEffect( ()  => {
  
  const getDataForChart = async() =>{

  setIsLoading(true);
  setIsAPIFull(false);

  const chartData = await axios (`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${props.symbol}&outputsize=full&apikey=${process.env.REACT_APP_STOCKS_AV}`);

  let HistoricPrices = chartData.data;

  let PricesForChart = [];

  let time = [];


    for (let key in HistoricPrices['Time Series (Daily)']) {
      time.push(key);
      PricesForChart.push(HistoricPrices['Time Series (Daily)'][key]['5. adjusted close']);

      timeButton.push(key);
      PricesForChartButton.push(HistoricPrices['Time Series (Daily)'][key]['5. adjusted close']);

    }

    setPricesForButtons(PricesForChartButton);
    setTimeForButtons(timeButton);

    let newChar = [];
    let newCharTime = [];

  for(let i = time.length-1 ; i>0 ; i-=1){
    newChar.push(PricesForChart[i]);
    newCharTime.push(time[i]);
  }

  let default1YPrices = [];
  let default1YTimes = [];

  for(let i = 0 ; i<260 ; i++){
    default1YPrices.push(PricesForChart[i]);
    default1YTimes.push(time[i]);
  }

  default1YPrices.reverse();
  default1YTimes.reverse();

  default1YPrices = default1YPrices.filter(function(element){
          return element !== undefined;
        });

  default1YTimes = default1YTimes.filter(function(element){
          return element !== undefined;
        });

  setdefauly1YPrices(default1YPrices);
  setdefauly1YTimes(default1YTimes);

  setPrices(newChar);
  setTime(newCharTime);

  //The API does not send back an error message in case of a call limit, so I had to figure a way to hide the chart in case the limit has reached, with the following if statement.

  if(PricesForChart.length == 0){
    setIsAPIFull(true);
  }

  setIsLoading(false);

  }
  
  getDataForChart();

}, [props.symbol]);


const data = {
  labels: default1YTimes,
  datasets: [
    {
      label: props.symbol,
      data: default1YPrices,
      fill: false,
      backgroundColor: 'rgb(1, 1, 1)',
      borderColor: 'rgba(26,188,156,0.51)',
      borderWidth: '3'
    },
  ],
}

const options = {
  maintainAspectRatio : false,
  elements: {point: { radius: 1 }},
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
}


  return (
    <div>
      <br></br>      
      {isLoading && !isAPIFull && <span><LoadingAnimation/> <br></br> Loadig chart...</span>}

      {isAPIFull && <span>A problem has occurred while the app tried to load the requested chart.<br></br> It is probably because the API has reached the request limit for a minute, which means you are not the only one online right now. <br></br>Sorry for being cheap and not paying for a bigger capacity.<br></br> Please try again in a minute :)</span>}

      <div className="chart"> {!isLoading && !isAPIFull && <Line data={data} options={options}/>} </div>
        <div className="btn">
        {!isLoading && !isAPIFull && 
          <div className="btn">
            <StockTimeButtons changeTimeToDisplay = {time => setTimeToDisplay(time)} changeArrayOfPrices = {prices => setdefauly1YPrices(prices)} changeArrayOfTime = {time => setdefauly1YTimes(time)} prices={PricesForChartButton} time={timeButton} /> <span>In order to see the recent trading day on the chart, simply hover / press the ending dots on the line</span>
          </div>
        } 
      </div>

    </div>
  )
}

export default StockChart;
