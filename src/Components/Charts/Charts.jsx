/*import React,{useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './charts.module.css';
const Chart = () =>
{
    const [ dailyData ,setDailyData ] = useState([]);

    useEffect(
        ()=> {
            const fetchApi = async () =>
            {
                setDailyData(await fetchDailyData());

            };
           
            fetchApi();

        });
    const lineChart=(
        dailyData.length ? (
<Line 
data = {{
    labels: dailyData.map(({date}) => date),
    datasets : [ 
        {
            data :  dailyData.map(({confirmed}) => confirmed),
            label: 'infected',
            borderColor:'#3333fff',
            fill : true,

        },
        {
            data :  dailyData.map(({deaths}) => deaths),
            label: 'infected',
            borderColor:'red',
            fill : true,
            backgroundColor:'rgba(255,0,0,0.5)',

        },],
}}
/>) : null
    );
    return(
        <div className={styles.container}>
            {lineChart}

        </div>
    )
}

export default Chart;
*/