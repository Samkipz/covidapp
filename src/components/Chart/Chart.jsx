import React from 'react';
import { Chart, registerables } from 'chart.js';
import {Line} from 'react-chartjs-2'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import { fetchStatistics } from '../../api';


import styles from './Chart.module.css';


Chart.register(...registerables);

class MyChart extends React.Component{
    state = {
        data: []
    }

    async componentDidMount(){
        const fetchedData = await fetchStatistics();
        // console.log(fetchedData)
        this.setState({ data: fetchedData});
    }

    render() {
        const {data} = this.state;
        
        //The two immediate functions below are used to format date time as yyyy-mm-dd hh:mm:ss 
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }

        function formatDate(date) {
            return (
              [
                date.getFullYear(),
                padTo2Digits(date.getMonth() + 1),
                padTo2Digits(date.getDate()),
              ].join('-') +
              ' ' +
              [
                padTo2Digits(date.getHours()),
                padTo2Digits(date.getMinutes()),
                padTo2Digits(date.getSeconds()),
              ].join(':')
            );
        }

        //We then get an array of time to be use as x-axis of the line graph and 
        //total cases, total deaths and total tests to be used as y-axis for the chart
        const time = Object.values(data).map(value => {
            return formatDate(new Date(value.time));
        });
        const cases = Object.values(data).map(value => {
            return value.cases.total;
        });
        const deaths = Object.values(data).map(value => {
            return value.deaths.total;
        });
        const tests = Object.values(data).map(value => {
            return value.tests.total;
        });

        const  options = {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Analysis graph for cases, deaths and tests',
              },
            },
        };
        const lineChart = (
            data.length ? 
            (
                <Line options={options} data={{
                    labels: time,
                    // .map((c)=>time(c).format("DD MMM"))
                    datasets: [{
                        data: cases,
                        label: 'Total cases',
                        borderColor: '#2980ba',
                        fill:false
                    },
                    {
                        data: deaths,
                        label: 'Total deaths',
                        borderColor: 'red',
                        fill:false
                    },
                    {
                        data: tests,
                        label: 'Total tests',
                        borderColor: 'limegreen',
                        fill:false
                    }] 
                }
            }/>) : undefined
        );


        return (
            <div className={styles.container}>
                {lineChart}
            </div>
        )
    }
}

export default MyChart;