import {createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import Root from "./components/Root/Root"
import Home from './components/HomePage/HomePage';
import LaboList from './components/LaboList/LaboList';
import Contact from './components/ContactPage/ContactPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ColorSelection from './components/LaboOefeningen/ColorSelection/ColorSelection';
import CounterList from './components/LaboOefeningen/CounterList/CounterList';
import LocalStorage from './components/LaboOefeningen/LocalStorage/LocalStorage';
import Pokemon from './components/LaboOefeningen/Pokemon/Pokemon';
import Interval from './components/LaboOefeningen/Interval/Interval';
import ShoppingListTabel from './components/LaboOefeningen/ShoppingList/ShoppingList';
import Slots from './components/LaboOefeningen/Slots/Slots';
import TodoApp from './components/LaboOefeningen/TodoApp/TodoApp';


const App = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "labo",
                element: <LaboList/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "colorselection",
                element: <ColorSelection/>
            },
            {
                path: "counterlist",
                element: <CounterList/>
            },
            {
                path: "localstorage",
                element: <LocalStorage/>
            },
            {
                path: "pokemon",
                element: <Pokemon/>
            },
            {
                path: "interval",
                element: <Interval/>
            },
            {
                path: "shoppinglist",
                element: <ShoppingListTabel/>
            },
            {
                path: "slots",
                element: <Slots/>
            },
            {
              path: "todoapp",
              element: <TodoApp/>
          }
        ]
    },
    {
      path: "*",
      element: <PageNotFound/>
  }
]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
