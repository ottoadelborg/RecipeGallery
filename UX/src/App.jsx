import './App.css'
import React from 'react';
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Home } from './components/home';
import { Recipe } from './components/recipe';
import { About } from './components/about';
import { RecipeOne } from './recipe/recipeOne';
import { RecipeTwo } from './recipe/recipeTwo';
import { RecipeThree } from './recipe/recipeThree';

function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/recipe",
    element: <Recipe />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/recipeone",
    element: <RecipeOne />
  },
  {
    path: "/recipetwo",
    element: <RecipeTwo />
  },
  {
    path: "/recipethree",
    element: <RecipeThree />
  }

])
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
