import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox.jsx';
import AddButton from './AddButton.jsx';
import AddForm from './AddForm.jsx';
import SearchBar from './SearchBar.jsx';
import TodaysFood from './TodaysFood.jsx';

// the default values for all quantities should be 1 for Today's food to work intuitively
for (let i = 0; i < foods.length; i++) {
  foods[i].quantity = 1;
}
  
  class App extends Component {

  state = {
    food: foods,
    formIsThere: false,
    searched: '',
    todaysFood: []
  }

  changeFormState = () => {
    let newState = true;
    if (this.state.formIsThere) newState = false;
    this.setState({
      formIsThere: newState
    })
  }

  addFood = (newFood) => {
    newFood={...newFood, quantity: 1}
    if (this.state.food.find((food) => food.name === newFood.name)) {
      alert('This food already exists!')
      return;
    }
    this.setState({
      food: [...this.state.food, newFood],
      formIsThere: false,
      searched: ''
    })
  }

  addToToday = (quantity, newTodaysFood) => {
    if (this.state.todaysFood.includes(newTodaysFood)){
      const updatedTodaysFood = [...this.state.todaysFood]
      updatedTodaysFood[updatedTodaysFood.indexOf(newTodaysFood)].quantity += Number(quantity);
      this.setState({
        todaysFood: updatedTodaysFood
      })
    } else {
    newTodaysFood.quantity = quantity;
    this.setState({
      todaysFood: [...this.state.todaysFood, newTodaysFood]
    })
  }
  }

  handleSearch = (valueSearched) => {
    this.setState({
      searched: valueSearched
    })
  }

  render () {
    console.log(this.state.food)
    let filteredFood = [...this.state.food]
    if (this.state.searched.length) {filteredFood = filteredFood.filter((food) => food.name.includes(this.state.searched))}
    return(
    <div className="App">
      <h1 className="main-title">IronNutrition</h1>
      <SearchBar handleSearch={this.handleSearch}/>
      <AddButton handleClick={ this.changeFormState }/>
      <AddForm display={this.state.formIsThere} handleForm={this.addFood}/>

      <div className="columns">
        <div className="column is-one-half">
          {
                filteredFood.map((food, index) => {
                  return <FoodBox food={ food } handleToday={this.addToToday}/>
                })
          }
        </div>
        <div className="column is-one-quarter">
          <TodaysFood food={this.state.todaysFood} />
        </div>
    </div>
    </div>
    )
  };
}

export default App;
