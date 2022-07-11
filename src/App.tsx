import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import UserList from './components/UserList';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserList />
        <hr />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
