import React from 'react'

import useGreetingsContext from '../Greetings/useGreetingsContext'
import useRecipeContext from './useRecipeContext'

export default () => {
  const {hasGreetingsToJarvis} = useGreetingsContext()
  const {handleRecipeQueryChange, fetchRecipes} = useRecipeContext()

  return hasGreetingsToJarvis() && (
    <div>
      - JARVIS, I need to impress mrs Stark with my cooking talent. I need recipes with
      <div>
        <input
          type="text"
          name="recipe_query"
          onChange={handleRecipeQueryChange}
        />
        <button
          type="button"
          onClick={fetchRecipes}
        >
          What are you waiting for?
        </button>
      </div>
    </div>
  )
}
