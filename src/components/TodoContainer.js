import React from 'react';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      todos: [
        {
          id: 1,
          title: 'Set up dev environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop Website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to Live Server',
          completed: false,

        },
      ],

    };
  }

  render() {
    const { todos } = this.state;
    return (
      <ul>
        {todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    );
  }
}
export default TodoContainer;
