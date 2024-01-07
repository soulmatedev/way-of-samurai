import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 15},
  {id: 2, message: "It`s my first post", likesCount: 20},
]

let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'},
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Hia'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

