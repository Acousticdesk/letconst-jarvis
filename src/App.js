import React from 'react'
import 'isomorphic-fetch'

import Greetings from './components/Greetings'
import JarvisResponse from './components/JarvisResponse'
import RecipeSearch from './components/RecipeSearch'

import useGreetingsContext from './components/Greetings/useGreetingsContext'

import './App.css'

const App = () => (
  <>
    <useGreetingsContext.Provider>
      <Greetings />
      <JarvisResponse />
      <RecipeSearch />
    </useGreetingsContext.Provider>
  </>
)

export default App
