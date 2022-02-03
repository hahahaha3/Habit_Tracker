import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    // input 초기화 방법2
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = (event) => {
        event.preventDefault();
        //console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // input창 초기화 방법1
        //this.inputRef.current.value = '';  
        this.formRef.current.reset();
    };
    render() {
        return (
            <form ref={this.formRef} className="add-foorm" onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef}
                    type="text" 
                    className="add-input" 
                    placeholder="Habit" 
                />
                <button className='add-button'>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;