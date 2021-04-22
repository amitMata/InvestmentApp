import React, {useState, useEffect} from 'react';
import { Line } from "react-chartjs-2";
import './CIChart.css';

const CIChart = ({initialAmount, numOfYears, interestRate, finalResult}) => {

  const [yearsArray, setYearsArray] = useState([]);
  const [amountArray, setAmountArray] = useState([]);
  
  useEffect(() => {
    CreateArraysForChart();
    
  }, [finalResult]);

  const CreateArraysForChart = () => {
    
    let arrayOfYears = [];
    let arrayOfAmount = [];
    let tempEarned = 0;
    let res = parseInt(initialAmount, 10);;
    
    arrayOfYears.push(0);
    arrayOfAmount.push(res);

    for(let i = 1 ; i <= parseInt(numOfYears, 10) ; i++) {
      tempEarned = res*(interestRate);
      res = res + tempEarned;

      arrayOfYears.push(i);
      arrayOfAmount.push(res.toFixed(2));
    }

    setYearsArray(arrayOfYears);
    setAmountArray(arrayOfAmount);

    //console.log(arrayOfYears);
    console.log(arrayOfAmount);
  }

  
const data = {
  labels: yearsArray,
  datasets: [
    {
      label: 'Compound Interest Graph',
      data: amountArray,
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
  title:'blabla',
  scales: {
    xAxes: [
      {
        scaleLabel:{
        labelString: 'Years Passed',
        display:true
        }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
        display: true,
        labelString: 'Amount Of Money'},
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
}
  
  return (
    <div className="chartCI">
      <Line data={data} options={options}/>
    </div>
  )
}

export default CIChart;
