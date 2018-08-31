import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        {this.props.todo.text} {' '} <button className="btn btn-primary" onClick={(e)=> this.removeTodo(this.props.id) }> Remove [X]</button>
      </div>
    );
  }
}
