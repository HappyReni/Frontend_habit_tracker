import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import React, {Component} from 'react';
import Add from './components/add';


class App extends Component{
  state = {
    habits: [
        {
            id: 1,
            name: 'Coding',
            count: 0
        }, {
            id: 2,
            name: 'Reading',
            count: 0
        }, {
            id: 3,
            name: 'Running',
            count: 0
        }
    ]
};

handleIncrement = habit => {
  const habits = this.state.habits.map(item =>{
    if(item.id=== habit.id){
      return {...habit, count:habit.count+1};
    }
    return item;
  })

  this.setState({habits});
};

handleDecrement = habit => {
  const habits = this.state.habits.map(item =>{
    if(item.id=== habit.id){
      const count = habit.count-1;
      return {...habit, count:count<0?0:count};
    }
    return item;
  })

  this.setState({habits});
};

handleDelete = habit => {
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  habits.splice(index,1);

  this.setState({habits});
};

sumCount = habit => {
  const habits = [...this.state.habits];
  let sum=0;
  for(let i=0;i<habits.length;i++){
    sum += habits[i].count;
  }
  return sum;
};

handleAdd = name =>{
  const habits = [...this.state.habits, {id: Date.now(),name,count:0}];
  this.setState({habits});
}

ResetAll = habit =>{
  const habits = this.state.habits.map(habit =>{
    if(habit.count!==0)
      return {...habit, count:0};
    return habit
  });
  this.setState({habits});

}

  render(){
    return(
      <>
      <Navbar 
      totalCount={this.state.habits.filter(item => item.count>0).length}/>
      <Add onAdd={this.handleAdd}/>
      <Habits 
      habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      ResetAll ={this.ResetAll}/> 
      </>
    );
  }
  return 
}

export default App;
