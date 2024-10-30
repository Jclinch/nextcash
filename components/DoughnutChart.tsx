"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)


 
const DoughnutChart = ({ accounts }: DoughnutChartProps ) => {

     const data = {
        datasets: [
            {
            label: 'Banks',
            data: [8524500, 4500000, 5300000 ],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
     ],
     labels: ['Bank A', 'Bank B', 'Bank C']
    }
       
  return <Doughnut 
  data={data} 
  options={{
    responsive: true,
    cutout: '60%',
    plugins: {
        legend: {
        display: false
        }
    }
  }}
  />
}

export default DoughnutChart