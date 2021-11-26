import React, { Component } from 'react'; // Component는 react에서 제공
import ListItem from './ListItem';

export default class FoodList extends Component {
    render() {
        return (
        <ul>
            <ListItem name='Egg' quantity={["12" , "10"]} />
            <ListItem name='Milk' quantity='20'/>
            <ListItem name='Bread' quantity='5'/>
            <ListItem name='Carrot' quantity='30'/>
        </ul>
        )
    }
}

// <ListItem name='Egg' quantity={["12" , "10"]} /> // 배열로 가져오고 싶을 때
