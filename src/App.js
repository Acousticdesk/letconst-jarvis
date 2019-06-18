import React from 'react'
import 'isomorphic-fetch'

import Greetings from './components/Greetings'
import JarvisResponse from './components/JarvisResponse'
import RecipeSearch from './components/RecipeSearch'
import RecipesList from './components/RecipesList'

import useGreetingsContext from './components/Greetings/useGreetingsContext'
import useRecipeContext from './components/RecipeSearch/useRecipeContext'

import './App.css'

const App = () => (
  <>
    <useGreetingsContext.Provider>
        <Greetings />
        <JarvisResponse />
      <useRecipeContext.Provider>
        <RecipeSearch />
        <RecipesList />
      </useRecipeContext.Provider>
    </useGreetingsContext.Provider>
  </>
)

export default App
