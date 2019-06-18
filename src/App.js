import React from 'react'

import Greetings from './components/Greetings'
import JarvisResponse from './components/JarvisResponse'
import RecipeSearch from './components/RecipeSearch'

import useGreetingsContext from './components/Greetings/useGreetingsContext'

import './App.css'

const App = () => (
  <>
    <Greetings />
    <useGreetingsContext.Provider>
      <JarvisResponse />
    </useGreetingsContext.Provider>
    <RecipeSearch />
  </>
)

export default App
