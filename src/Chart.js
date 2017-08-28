import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { countGrams, caloriesPerDay } from './functions';

var goal = caloriesPerDay(2000, 20, 30, 50);
var diet = countGrams(goal);

var data = {
  labels: ['Fat', 'Proteins', 'Carbs'],
  datasets: [
    {
      label: 'Calories',
      backgroundColor: ['#0097A7', '#90C3D4', '#49AFD1'],
      borderColor: '#FFFFFF',
      borderWidth: 2,
      hoverBackgroundColor: ['#6BD4D6', '#6BD4D6', '#6BD4D6'],
      hoverBorderColor: ['#6BD4D6', '#6BD4D6', '#6BD4D6'],
      data: [diet.fat, diet.protein, diet.carbs]
    }
  ]
};

class Chart extends React.Component {
  render() {
    return <Doughnut data={data} width={300} height={300} />;
  }
}

export default Chart;
