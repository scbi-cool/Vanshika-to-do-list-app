import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Todo';
import NoPage from './NoPage';
import TodoList from './TodoList';


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TodoList />}>
                <Route index element= {<TodoList />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="*" element={<NoPage />} />
            </Route>        
        </Routes>
    </BrowserRouter>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
