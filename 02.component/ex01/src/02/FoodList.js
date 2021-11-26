import React, { Component } from 'react'; // Component 는 react에서 제공
import ListItem from './ListItem';

export default class FoodList extends Component {
    render() {
        const components = [];
        // const foods = this.props.foods;

        // for(let i = 0; i < foods.length; i++){
        //     components[i] = <ListItem name={foods[i].name} quantity={foods[i].quantity} />;
        // }

        // this.props.foods.forEach(function(food, index){
        //     components[index] = <ListItem name={food.name} quantity={food.quantity} />;
        // });

        // const r = [1, 2, 3, 4].map(function(e){
        //     return e * e;
        // });

        const r = this.props.foods.map(function(food, index){
            return <ListItem name={food.name} quantity={food.quantity} />;
        });
        

        retrun (
            <ul>
                { r }
            </ul>
        )
    }
}