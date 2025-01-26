import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { store } from './store/Store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Login from './components/Login.jsx';
import Add from './components/Add.jsx';
import TodoTable from './components/TodoTable.jsx';
import Signup from './components/Signup.jsx';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        path: "/login", 
        element: <Login />,
      },{
        path: "/signup", 
        element: <Signup />,
      },
      {
        path: "/add-todo", 
        element: <TodoTable />,
      },
     ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
