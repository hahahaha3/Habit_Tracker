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
    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit => 
                        // habit이라는 prop 이름에 우리가 각각의 habit을 여기 지금 이 데이터를 전달해주는 것임..
                        <Habit key={habit.id} habit = {habit} />
                )}
            </ul>
        );
    }
}

export default Habits;