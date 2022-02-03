import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        // state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트 해야함.
        // count라는 이름의 변수에는 this.state에 있는 count의 숫자의 1을 증가한 것을 할당
        // 오브젝트 안에 있는 데이터를 업데이트 하게 되면 리액트는 업데이트가 되었는지 모름,, 그래서 꼭 state를 업데이트 할때는, 리액트에서 제공하는 setState라는 함수를 호출해야함. 그래서 부분적으로 데이터를 업데이트 할 수 없고 이렇게 전체적인 state를 업데이트 해줘야함. 그래야지만 리액트가 state가 변경되었구나.. render 함수를 다시 호출하자 라고 알 수 있음.
        this.setState({count: this.state.count + 1});
    };

    handelDecrement = () => {
        const count = this.state.count - 1;
        this.setState({ count: count < 0 ? 0 : count });
    };

    render() {
        console.log(this.props.habit);
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease"  onClick={this.handelDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default Habit;