import React from 'react'

import useGreetingsContext from './Greetings/useGreetingsContext'

const GREETINGS_TO_JARVIS_REGEXP = /^\w+, Jarvis/

const hasGreetingsToJarvis = greetings => GREETINGS_TO_JARVIS_REGEXP.test(greetings)

export default () => {
  const {greetings} = useGreetingsContext()

  return hasGreetingsToJarvis(greetings) && <p>- Good day, mr Stark! How can I help you?</p>

}
