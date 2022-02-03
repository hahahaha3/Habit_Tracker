import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id:1, name: 'Reading', count: 0},
            {id:2, name: 'Running', count: 0},
            {id:3, name: 'Coding', count: 0},
        ],
    };

    // Spread Operator : 이 habits 라는 배열 안에 있는 아이템들을 하나하나씩 새로운 배열 안으로 복사해 오는 것을 말함. 
    handleIncrement = (habit) => {
        console.log(`handleIncrement ${habit.name}`);
        const habits = [...this.state.habits];
        this.setState(this.state);
    };

    handleDecrement = (habit) => {
        console.log(`handleDecrement ${habit.name}`);
    };

    handleDelete = (habit) => {
        console.log(`handleDelete ${habit.name}`);
    };

    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit => 
                        <Habit 
                            key={habit.id} 
                            habit = {habit} 
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                )}
            </ul>
        );
    }
}

export default Habits;