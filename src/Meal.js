import React from 'react';
import Autocomplete from 'react-autocomplete';

class Meal extends React.Component {
    state = {
        mealName: ""
    }

    handleChange = (event) => {
        this.setState({ mealName: event.target.value })
    }

    showItem = (item, value) => item.toLowerCase().indexOf(value.toLowerCase()) !== -1;

    render() {
        let arrayOfId = this.props.foodsOfNewMeal;
        let food = arrayOfId.map((id) => {
            return (
                <div>
                    <li>{this.props.foods[id].name}</li>
                    <button onClick={() => this.props.removeFromMeal(id)}>-</button>
                </div>
            )
        });
        return (
            <div>
                <h2>Meal name:</h2>
                <Autocomplete
                    getItemValue={(item) => item}
                    items={this.props.predefinedMealsNames}
                    renderItem={(item, isHighlighted) =>
                        <div>
                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item}
                            </div>
                        </div>
                    }
                    value={this.state.mealName}
                    onChange={e => {
                        this.setState({
                            mealName: e.target.value
                        });
                    }}
                    shouldItemRender={this.showItem}
                />
                <ul>
                    {food}
                </ul>
                <button type="button" onClick={() => {
                    this.props.addMeal(this.props.foodsOfNewMeal, this.state.mealName);
                    this.setState({ mealName: "" });
                }
                }
                    disabled={!this.state.mealName}>Save meal</button>
            </div>
        )
    }
}

export default Meal;