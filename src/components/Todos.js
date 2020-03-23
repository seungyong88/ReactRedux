import React, { useState } from 'react';

const TodoList = ({ todos, onToggle }) => (
  <ul>
    {todos.map(todo => (
      <li 
        key={todo.id} 
        onClick={() => {onToggle(todo.id)}}
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        >{todo.text}</li>
    ))}
  </ul>
)


function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault(); // submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(''); // 인풋 초기화
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text} placeholder="할 일을 입력하세요." />
        <button>추가하기</button>
      </form>
      { todos && <TodoList todos={todos} onToggle={onToggle} /> }
    </div>
  )
}

export default Todos;