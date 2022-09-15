import React from 'react';
import TodoItem from './TodoItem';
/*eslint-disable */
class TodoList extends React.Component {
  render(){
    return (
       <ul>
        {this.props.todos.map(todo => (
          <TodoItem   
          key={todo.id}
          todo={todo}
          handleChangedProps={this.props.handleChangedProps}
          deleteTodoProps={this.props.deleteTodoProps}
          setUpdate={this.props.setUpdate}
           />
        ))}
       </ul>
    )
  }
}

export default TodoList;