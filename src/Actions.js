import { convertFoodFromServer } from './functions';
import server from './server/serverMock';

export const NEW_FOOD = "NEW_FOOD";
export const SELECT_FOOD = "SELECT_FOOD";
export const ADD_SELECTED_FOOD = "ADD_SELECTED_FOOD";
export const REMOVE_SELECTED_FOOD = "REMOVE_SELECTED_FOOD";
export const ADD_FOODS_OF_NEW_MEAL_TO_MEALS = "ADD_FOODS_OF_NEW_MEAL_TO_MEALS"
export const SHOW_MEAL_DETAILS = "SHOW_MEAL_DETAILS";
export const ADD_PREFERENCE = "ADD_PREFERENCE";
export const UPDATE_PREFERENCE = "UPDATE_PREFERENCE";
export const EDIT_FOOD = "EDIT_FOOD";
export const IS_LOADING = "IS_LOADING";


export const newFood = food => {
    return { type: NEW_FOOD, content: food };
}

export const addNewFoodToServer = food => dispatch => {
    dispatch(isLoading(true));
  server.addFood(food)
        .then(data => {
            console.log(`the server says ${data}`);
            const newFoodFromServer = convertFoodFromServer(data);

            dispatch(newFood(newFoodFromServer));
            dispatch(isLoading(false));
        });
}

export function selectFood(foodId) {
    return { type: SELECT_FOOD, content: foodId };
}

export function addSelectedFood(foodId) {
    return { type: ADD_SELECTED_FOOD, content: foodId }
}

export function removeSelectedFood(foodId) {
    return { type: REMOVE_SELECTED_FOOD, content: foodId }
}

export function addFoodsOfNewMealToMeals(meal, mealName) {
    return { type: ADD_FOODS_OF_NEW_MEAL_TO_MEALS, content: { mealName: mealName, details: meal } }
}

export function showMealDetails(mealName) {
    return { type: SHOW_MEAL_DETAILS, content: mealName }
}

export function addPreference(mealPreference) {
    return { type: ADD_PREFERENCE, content: mealPreference }
}

export function editFood(food) {
    return { type: EDIT_FOOD, content: food }
}

export function isLoading(value) {
    return { type: IS_LOADING, content: value };
}
