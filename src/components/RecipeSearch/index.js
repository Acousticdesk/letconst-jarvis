import React from 'react'

import useGreetingsContext from '../Greetings/useGreetingsContext'
import useRecipeQuery from './useRecipeQuery'

export default () => {
  const {hasGreetingsToJarvis} = useGreetingsContext()
  const {handleRecipeQueryChange} = useRecipeQuery()

  return hasGreetingsToJarvis() && (
    <div>
      - JARVIS, I need to impress mrs Stark with my cooking talent. I need recipes with
      <div>
        <input
          type="text"
          name="recipe_query"
          onChange={handleRecipeQueryChange}
        />
        <button type="button">What are you waiting for?</button>
      </div>
    </div>
  )
}
