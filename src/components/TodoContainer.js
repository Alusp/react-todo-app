import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
/*eslint-disable*/
class TodoContainer extends React.Component {

  state = {
    todos: [
      {
        id: uuidv4(),
      title: "Set up dev environment",
    completed: true
  },
  {
    id: uuidv4(),
    title: "Develop Website and add content",
    completed: false
  },
  {
    id: uuidv4(),
    title: "Deploy to Live Server",
    completed: false
  }
    ]
  };
  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
     
  };
  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };
  addTodoItem = title => {
     const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
     };
     this.setState({
      todos: [...this.state.todos, newTodo]
     });
  };
  setUpdate = (updatedTitle, id) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = updatedTitle
      }
      return todo
    }),
  })
}
  render(){
    return (
        <div className="container">
        <div className="inner">
          <Header/>
          <InputTodo addTodoProps={this.addTodoItem}/>
          <TodoList 
          todos={this.state.todos} 
          handleChangedProps={this.handleChange}
          deleteTodoProps={this.delTodo}
          setUpdate={this.setUpdate}
          />
        </div>
        </div>
    )
  }
}

export default TodoContainer;