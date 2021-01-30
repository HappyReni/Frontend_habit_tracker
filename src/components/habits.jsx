import React, {Component} from 'react';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };

    handleDecrement = habit => {
        this.props.onDecrement(habit);
        
    };

    handleDelete = habit => {
        this.props.onDelete(habit);
        
    };

    ResetAll = habit =>{
        this.props.ResetAll(habit);
    }

    render() {
        return (
            <ul>
                {
                this.props.habits.map(habit => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}/>
                    ))
                }
                <button className="habits-reset" onClick={this.ResetAll}>Reset All</button>
            </ul>
        );
    }
}

export default Habits;