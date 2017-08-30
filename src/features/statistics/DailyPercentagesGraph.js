import React from 'react';
import Chart from '../../Chart';
import { countGrams, caloriesPerDay } from '../../functions';

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

class DailyPercentagesGraph extends React.Component {
  render() {
    return <Chart data={data} />;
  }
}

export default DailyPercentagesGraph;
