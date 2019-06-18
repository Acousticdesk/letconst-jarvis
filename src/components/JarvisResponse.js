import React from 'react'

import useGreetingsContext from './Greetings/useGreetingsContext'

export default () => {
  const {hasGreetingsToJarvis} = useGreetingsContext()

  return hasGreetingsToJarvis() && <p>- Good day, mr Stark! How can I help you?</p>

}
