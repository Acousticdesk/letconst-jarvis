import React from 'react'

import useGreetingsContext from '../components/Greetings/useGreetingsContext'

export default () => {
  const {hasGreetingsToJarvis} = useGreetingsContext()

  return hasGreetingsToJarvis() && (
    <div>
      - JARVIS, I need to impress mrs Stark with my cooking talent. I need recipies with
      <div>
        <input
          type="text"
          name="recipe_query"
        />
        <button type="button">What are you waiting for?</button>
      </div>
    </div>
  )
}
