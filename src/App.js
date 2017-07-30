import React, { Component } from 'react';
import './App.css';
// import Chart from './Chart';
import SearchContainer from './features/search/SearchContainer';
import AddNewProductContainer from "./features/addNewFood/AddNewProductContainer";
// import FoodDetailsContainer from "./features/foodDetails/FoodDetailsContainer";
import MealContainer from "./features/mealDetails/MealContainer";
import MealsDetailsContainer from "./features/mealDetails/MealsDetailsContainer";
import EditFoodContainer from './features/editFood/EditFoodContainer';
import PreferencesFormContainer from './features/preferences/PreferencesFormContainer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Time from './Time';
import Date from './Date';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Time/>
          <Date />
          <br/><br/>
          <Nav />
          <Route path='/addFood' component={AddNewProductContainer} />
          <Route path='/editFood' component={EditFoodContainer} />
          {/*<Route path="/selectedFood" component={FoodDetailsContainer} />*/}
          <Route path="/addMeal" component={SearchContainer} />
          <Route path="/addMeal" component={MealContainer} />
          <Route path="/mealsDetails" component ={MealsDetailsContainer} />
          <Route path="/preferences" component={PreferencesFormContainer} />
        </div>
      </Router>
    );
  }
}

export default App;